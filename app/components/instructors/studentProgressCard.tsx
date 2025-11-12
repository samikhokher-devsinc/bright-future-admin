import React from "react";
import DropdownMenu from "../common/DropdownMenu";
import { timeMenu } from "@/app/utils/constants/cardsData";

export interface StudentProgressCardProps {
    studentName: string;
    class: string;
    progressPercentage: number;
    badge?: React.ReactNode;
}

const StudentProgressCard = () => {
    const studentProgress: StudentProgressCardProps[] = [
        {
            studentName: 'John Doe',
            class: '5, C',
            progressPercentage: 88,
            badge: <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">Top Performer</span>,
        },
        {
            studentName: 'Jane Smith',
            class: '3, B',
            progressPercentage: 92,
            badge: <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">Excellent</span>,
        },
        {
            studentName: 'Alice Johnson',
            class: '5, A',
            progressPercentage: 85,
            badge: <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">Needs Improvement</span>,
        },
    ];
    return (
        <div>
            <div className="p-2 md:p-4 flex flex-col md:flex-row md:justify-between items-center  gap-3 border-b border-gray-300 pb-4 overflow-hidden">
                <h1 className="text-lg font-bold">Student Progress</h1>
                <DropdownMenu label="Last 7 days" menuItems={timeMenu} />
            </div>
            <ul className="p-3 max-h-[400px] overflow-y-auto">
                {studentProgress.map((student, index) => ( 
                    <li key={index} className="mb-2 md:mb-4 last:mb-0 border border-gray-200 p-2 rounded-sm">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-sm font-semibold">{student.studentName}</h2>
                                <p className="text-xs text-gray-500">Class: {student.class}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-bold text-gray-700">{student.progressPercentage}%</span>
                                {student.badge}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default StudentProgressCard
