import ClassesCard from "@/app/components/instructors/classesCard";
import ProfileCard from "@/app/components/instructors/profileCard";
import SyllabusCard from "@/app/components/instructors/syllabusCard";
import SchedulesCard from "@/app/components/instructors/schedulesCard";
import AttendanceCard from "@/app/components/instructors/attendanceCard";
import BestPerformers from "@/app/components/instructors/bestPerformers";
import StudentProgressCard from "@/app/components/instructors/studentProgressCard";

export default function InstructorsPage() {

  return (
    <div className="grid grid-cols-12 gap-4 p-4">

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
  );
}
