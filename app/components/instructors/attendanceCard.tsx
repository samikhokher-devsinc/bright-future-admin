import DropdownMenu from '../common/DropdownMenu'
import { timeMenu } from '@/app/utils/constants/cardsData'
import CommonPieChart from "../common/pieChart";

export interface AttendanceCardProps {
  present?: number;
  absent?: number;
  halfDay?: number;
  late?: number;
}

const AttendanceCard = () => {
  const daysLetter = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const chartColors = ['green', 'blue', 'grey', 'red'];
  const attendance: AttendanceCardProps = {
    present: 220,
    absent: 80,
    halfDay: 105,
    late: 30,
  };
  const attendanceItems = [
    { name: 'Present', value: attendance.present },
    { name: 'Absent', value: attendance.absent },
    { name: 'Halfday', value: attendance.halfDay },
    { name: 'Late', value: attendance.late },
  ];

  return (
    <div>
      <div className="p-4 flex flex-col md:flex-row md:justify-between items-center mb-6 gap-3 border-b border-gray-300 pb-4">
        <h1 className="text-lg font-bold">Recently Joined</h1>
        <DropdownMenu label="Last 7 days" menuItems={timeMenu} />
      </div>
      <div className='px-4 py-1'>
        <div className='px-4 py-3 bg-gray-200 rounded-md border-gray-300 border'>
          <div className="flex flex-col md:flex-row md:justify-between items-center gap-3">
            <h1 className="text-md font-bold">Last 7 Days</h1>
            <p className='text-xs text-gray-600' >14 May 2024 - 21 May 2024</p>
          </div>
          <ul className='flex flex-row mt-2'>
            {daysLetter.map((day, index) => (
              <li key={index} className="">
                <div className="flex justify-between px-2 py-1 mr-2 bg-green-600 rounded-sm">
                  <span className="text-xs text-white font-bold">{day}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='px-8 py-1 mt-1'>
        <h1 className='text-gray-600'>No of total working days <span className='font-bold text-black'> 250 Days</span></h1>
      </div>
      <div>
        <div className="flex flex-col h-full gap-3">
          <ul className="flex justify-between justify-center p-3 mx-4 rounded-md mt-4  border border-gray-300 pb-4">
            {attendanceItems.map(
              (item, index) =>
                item.value !== undefined && (
                  <li
                    key={item.name}
                    className={`text-xs md:text-md text-gray-700 flex flex-col text-center mr-2 pr-2 md:mr-6 md:pr-6 ${index !== attendanceItems.length - 1 ? 'border-r border-gray-300' : ''
                      }`}
                  >
                    {item.name} <span className="font-bold text-black">{item.value}</span>
                  </li>
                )
            )}
          </ul>
          <div className="ml-5">
            <CommonPieChart
              title="Attendance Distribution"
              data={attendanceItems.filter((item) => item.value !== undefined) as { name: string; value: number }[]}
              colors={chartColors}
              dropdownItems={[
                { key: '1', label: 'This Quarter' },
                { key: '2', label: 'Last Quarter' },
              ]}
              width={220}
              height={220}
              innerRadius="55%"
              outerRadius="80%"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttendanceCard
