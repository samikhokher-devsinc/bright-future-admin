export interface LeaveCardProps {
  title: string;
  startDate: string;
  status: 'Approved' | 'Pending' | 'Rejected';
}

const LeaveCard = () => {
  const leaveData: LeaveCardProps[] = [
    {
      title: "Medical Leave",
      startDate: "15 June 2024",
      status: "Approved",
    },
    {   
      title: "Personal Leave",  
      startDate: "20 June 2024",
      status: "Pending",
    },
    {
      title: "Vacation Leave",
      startDate: "25 June 2024",
      status: "Rejected",
    },
    {
      title: "Medical Leave",
      startDate: "15 June 2024",
      status: "Approved",
    },
    {   
      title: "Personal Leave",  
      startDate: "20 June 2024",
      status: "Pending",
    },
    {
      title: "Vacation Leave",
      startDate: "25 June 2024",
      status: "Rejected",
    },
  ];

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 flex flex-col md:flex-row md:justify-between items-center border-b border-gray-200">
        <h1 className="text-lg font-bold text-gray-900">Leave Status</h1>
        <button className="text-blue-800 font-semibold hover:underline text-sm">
          View All
        </button>
      </div>

      <ul className="overflow-y-auto flex-1 max-h-[400px]">
        {leaveData.map((leave, index) => (
          <li
            key={index}
            className="p-3 border-b border-gray-200 flex items-center gap-3"
          >
            {/* Avatar */}
            <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-white font-bold text-lg">
              {leave.title.charAt(0)}
            </div>

            {/* Leave Info */}
            <div className="flex-1">
              <h2 className="text-md font-semibold text-gray-800">{leave.title}</h2>
              <p className="text-sm text-gray-600">Start Date: {leave.startDate}</p>
            </div>

            {/* Status */}
            <div>
              {leave.status === 'Approved' && (
                <span className="px-2 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                  Approved
                </span>
              )}
              {leave.status === 'Pending' && (
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full">
                  Pending
                </span>
              )}
              {leave.status === 'Rejected' && (
                <span className="px-2 py-1 bg-red-100 text-red-800 text-sm font-semibold rounded-full">
                  Rejected
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeaveCard;
