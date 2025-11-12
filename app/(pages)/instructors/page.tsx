'use client';

import { useState } from 'react';
import LessonCard from "@/app/components/instructors/lessonCard";
import LeaveCard from "@/app/components/instructors/leaveCard";
import { Table, Select, Space } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import ProfileCard from '@/app/components/instructors/profileCard';
import SyllabusCard from '@/app/components/instructors/syllabusCard';
import SchedulesCard from '@/app/components/instructors/schedulesCard';
import ClassesCard from '@/app/components/instructors/classesCard';
import AttendanceCard from '@/app/components/instructors/attendanceCard';
import BestPerformers from '@/app/components/instructors/bestPerformers';
import StudentProgressCard from '@/app/components/instructors/studentProgressCard';
import AntTable from '@/app/components/common/AntTable';
interface StudentData {
  key: string;
  studentId: string;
  name: string;
  class: string;
  section: string;
  marks: number;
  cgpa: number;
  status: string;
}

const classes = ['All Classes', '5', '4', '3'];
const sections = ['All Sections', 'A', 'B', 'C', 'D'];

const fakeStudents: StudentData[] = Array.from({ length: 15 }).map((_, i) => ({
  key: i.toString(),
  studentId: `S${100 + i}`,
  name: `Student ${i + 1}`,
  class: ['5', '4', '3'][i % 3],
  section: ['A', 'B', 'C', 'D'][i % 4],
  marks: Math.floor(Math.random() * 100),
  cgpa: parseFloat((Math.random() * 4).toFixed(2)),
  status: i % 2 === 0 ? 'Active' : 'Inactive',
}));

const columns: ColumnsType<StudentData> = [
  { title: 'ID', dataIndex: 'studentId', key: 'studentId' },
  { title: 'Student Name', dataIndex: 'name', key: 'name' },
  { title: 'Class', dataIndex: 'class', key: 'class' },
  { title: 'Section', dataIndex: 'section', key: 'section' },
  { title: 'Marks', dataIndex: 'marks', key: 'marks' },
  { title: 'CGPA', dataIndex: 'cgpa', key: 'cgpa' },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (status: string) => (
      <span className={status === 'Active' ? 'text-green-600' : 'text-red-600'}>
        {status}
      </span>
    ),
  },
];

export default function InstructorsPage() {
  const [selectedClass, setSelectedClass] = useState('All Classes');
  const [selectedSection, setSelectedSection] = useState('All Sections');

  const filteredStudents = fakeStudents.filter((s) => {
    return (
      (selectedClass === 'All Classes' || s.class === selectedClass) &&
      (selectedSection === 'All Sections' || s.section === selectedSection)
    );
  });

  return (
    <div className="p-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 sm:col-span-6 lg:col-span-5 row-span-2">
          <ProfileCard />
        </div>
        <div className="col-span-12 sm:col-span-6 lg:col-span-3 row-span-2 rounded-sm bg-white shadow-sm">
          <SyllabusCard />
        </div>
        <div className="col-span-12 lg:col-span-4 row-span-6 rounded-sm bg-white shadow-sm max-h-[828px]">
          <SchedulesCard />
        </div>
        <div className="col-span-8 rounded-sm bg-white shadow-sm">
          <ClassesCard />
        </div>
        <div className="col-span-12 lg:col-span-4 rounded-sm bg-white shadow-sm">
          <AttendanceCard />
        </div>
        <div className="col-span-12 lg:col-span-4 space-y-4">
          <div className="rounded-sm bg-white shadow-sm h-[calc(50%-40px)]">
            <BestPerformers />
          </div>
          <div className="rounded-sm bg-white shadow-sm h-[calc(55%)]">
            <StudentProgressCard />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 grid-rows-8 gap-4">
        <div className="col-span-12 row-span-3 col-start-1 rounded-sm bg-white shadow-sm">
          <LessonCard />
        </div>

        <div className="col-span-8 row-span-5 col-start-1 row-start-4 rounded-sm bg-white shadow-sm p-4">
          <div className="flex justify-between mb-4">
            <h2 className="text-lg font-bold">Student Marks</h2>
            <div className='flex gap-2'>
              <Select
                value={selectedClass}
                onChange={(val) => setSelectedClass(val)}
                options={classes.map((c) => ({ label: c, value: c }))}
                className="w-40"
              />
              <Select
                value={selectedSection}
                onChange={(val) => setSelectedSection(val)}
                options={sections.map((s) => ({ label: s, value: s }))}
                className="w-40"
              />
            </div>

          </div>

          <AntTable<StudentData>
            columns={columns}
            data={filteredStudents}
            pageSize={5}
            scrollX={1000}
            stickyHeader={true}
          />

        </div>

        <div className="col-span-4 row-span-5 col-start-9 row-start-4 rounded-sm bg-white shadow-sm">
          <LeaveCard />
        </div>
      </div>
    </div>
  );
}
