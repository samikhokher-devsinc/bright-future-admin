export interface LessonCardProps {
    id: string;
    class: string;
    title: string;
    progress: number;
}

const LessonCard = () => {
    const colors = ['#c70000ff', '#0003baff', '#017f05ff', '#beb206ff'];
    const bGcolors = ["bg-red-100", "bg-blue-100", "bg-green-100", "bg-yellow-100"];

    const studentLessons: LessonCardProps[] = [
        {
            id: '#L123456',
            class: '5, C',
            title: 'Introduction to Algebra',
            progress: 80,
        },
        {
            id: '#L789012',
            class: '3, B',
            title: 'Basics of Geometry',
            progress: 65,
        },
        {
            id: '#L345678',
            class: '5, A',
            title: 'Understanding Fractions',
            progress: 90,
        },
        {
            id: '#L901234',
            class: '4, D',
            title: 'Decimals and Percentages',
            progress: 75,
        },
    ];

    return (
        <div>
            <div className="p-4 flex flex-col md:flex-row md:justify-between items-center border-b border-gray-200">
                <h1 className="text-lg font-bold text-gray-900">Syllabus / Lesson Plan</h1>
                <button className="text-blue-800 font-semibold hover:underline text-sm">
                    View All
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-4 p-4 gap-4">
                {studentLessons.map((lesson, index) => {
                    const progressColor = colors[index % colors.length];
                    const bgColorClass = bGcolors[index % bGcolors.length];
                    return (
                        <div key={index} className="p-4 border border-gray-200 rounded-md shadow-sm">
                            <div className="flex flex-col flex-start mb-2 border-b border-gray-200 pb-2">
                                <p
                                    className={`text-sm p-3 rounded-md text-center ${bgColorClass}`}
                                    style={{ color: progressColor }}
                                >
                                    Class: {lesson.class}
                                </p>
                                <p className="text-md font-semibold text-gray-800 my-1">{lesson.title}</p>
                                <div
                                    className="h-1 rounded-full mt-2"
                                    style={{
                                        width: `${lesson.progress}%`,
                                        backgroundColor: progressColor,
                                    }}
                                ></div>
                            </div>
                            <div className="flex justify-between mt-2 mx-3">
                                <p className="text-sm text-black font-semibold">Reschedule</p>
                                <button className="text-xs text-blue-800">Share</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default LessonCard;
