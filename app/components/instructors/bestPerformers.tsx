'use client';
import { Avatar, Tooltip } from "antd";

export interface BestPerformersProps {
  id: string;
  class: string;
  students: string[];
  progress: number;
}

const BestPerformers = () => {
  const bestPerformers: BestPerformersProps[] = [
    {
      id: '#S123456',
      class: '5, C',
      students: ['John Doe', 'Jane Smith', 'Alice Johnson'],
      progress: 95,
    },
    {
      id: '#S789012',
      class: '3, B',
      students: ['Bob Brown', 'Charlie Davis', 'Eve Wilson'],
      progress: 88,
    },
    {
      id: '#S345678',
      class: '5, A',
      students: ['Frank Green', 'Grace Hall', 'Hank Lee'],
      progress: 76,
    },
  ];

  const progressColors = ['#0728e2', '#bdb406', '#70b0e2'];
  const getRandomColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const pastel = `hsl(${hue}, 70%, 85%)`;
    return pastel;
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="p-4 flex flex-col md:flex-row md:justify-between items-center border-b border-gray-200">
        <h1 className="text-lg font-bold text-gray-900">Best Performers</h1>
        <button className="text-blue-800 font-semibold hover:underline text-sm">
          View All
        </button>
      </div>

      {/* Body */}
      <div className="p-3 space-y-6">
        {bestPerformers.map((performer, index) => {
          const progressColor = progressColors[index % progressColors.length];
          return (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <p className="text-md font-semibold text-gray-800">
                  Class: {performer.class}
                </p>
                 <div className="relative w-1/2 bg-gray-100 rounded-full h-7 overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full transition-all duration-500 flex items-center justify-between px-2"
                  style={{
                    width: `${performer.progress}%`,
                    backgroundColor: progressColor,
                  }}
                >
                  <Avatar.Group maxCount={3} size="small">
                    {performer.students.map((name, idx) => {
                      const randomBg = getRandomColor();
                      return (
                        <Tooltip title={name} key={idx}>
                          <Avatar
                            style={{
                              backgroundColor: randomBg,
                              color: '#222',
                              fontSize: 10,
                              border: `1px solid ${progressColor}`,
                              fontWeight: 600,
                            }}
                          >
                            {name[0]}
                          </Avatar>
                        </Tooltip>
                      );
                    })}
                  </Avatar.Group>

                  <span className="text-[8px] font-bold ml-auto
                  px-2 bg-white rounded-lg text-black
                  ">
                    {performer.progress}%
                  </span>
                </div>
              </div>
              </div>

             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestPerformers;
