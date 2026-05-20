import { Trophy } from "lucide-react";

const awards = [
  {
    title: "Best UI/UX Award",
    year: "2023",
    icon: <Trophy className="w-6 h-6 text-[#00D05A]" />,
  },
  {
    title: "Top Web Dev Agency",
    year: "2022",
    icon: <Trophy className="w-6 h-6 text-[#00D05A]" />,
  },
  {
    title: "Awwwards Nominee",
    year: "2024",
    icon: <Trophy className="w-6 h-6 text-[#00D05A]" />,
  },
];

export default function Awards() {
  return (
    <section className="px-6 md:px-12 py-12 w-full">
      <div className="flex flex-col gap-8 mb-12">
        <div className="flex items-center gap-4">
          <span className="inline-block px-4 py-1.5 bg-[#E8F8EE] text-[#00D05A] font-semibold text-sm rounded-full">
            Awards
          </span>
          <p className="text-gray-500 max-w-lg text-sm">
            Recognized globally for our continuous pursuit of excellence in digital design and engineering.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {awards.map((award, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-6 bg-white border border-gray-200 rounded-3xl"
          >
            <div>
              <p className="text-gray-400 text-sm font-medium mb-1">{award.year}</p>
              <h4 className="text-[#1E1B4B] font-bold text-lg">{award.title}</h4>
            </div>
            <div className="w-12 h-12 rounded-full bg-[#E8F8EE] flex items-center justify-center">
              {award.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
