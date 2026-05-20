import React from "react";
import { LiaLinkedin } from "react-icons/lia";

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  linkedinUrl: string;
}

export default function TeamSection() {
  const teamData: TeamMember[] = [
    {
      name: "Ifeanyi Oko",
      role: "CEO and Founder",
      imageUrl:
        "https://ik.imagekit.io/spitndu0j/Dp%20Hub/team1.png?updatedAt=1779199833098",
      linkedinUrl: "#",
    },
    {
      name: "Onyema promise",
      role: "Director",
      imageUrl: "https://ik.imagekit.io/spitndu0j/Dp%20Hub/team2.png",
      linkedinUrl: "#",
    },
    {
      name: "Miracle Chidiebere",
      role: "Director",
      imageUrl:
        "https://ik.imagekit.io/spitndu0j/Dp%20Hub/team3.png?updatedAt=1779199758431",
      linkedinUrl: "#",
    },
    {
      name: "Blessing Igwe",
      role: "Creative Designer",
      imageUrl:
        "https://ik.imagekit.io/spitndu0j/Dp%20Hub/team4.png?updatedAt=1779199814931",
      linkedinUrl: "#",
    },
    {
      name: "Olumide Faleye",
      role: "Senior Analyst",
      imageUrl:
        "https://ik.imagekit.io/spitndu0j/Dp%20Hub/team5.png?updatedAt=1779199855386",
      linkedinUrl: "#",
    },
    {
      name: "Chidima C.G",
      role: "Financial Analyst",
      imageUrl: "https://ik.imagekit.io/spitndu0j/Dp%20Hub/team6.png",
      linkedinUrl: "#",
    },
  ];

  return (
    <section className="w-full bg-white py-12 px-4 sm:px-6 md:py-24">
      <div className="max-w-6xl mx-auto">
        {/* Header Badge */}
        <div className="inline-block bg-gradient-to-b from-[#E7F644] to-[#25D366] px-6 py-2 rounded-xl shadow-md mb-12">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-black tracking-wide">
            Team
          </h2>
        </div>

        {/* Responsive Flex/Grid Container */}
        {/* Mobile: 1 Column | Tablet: 2 Columns | Desktop: Exactly 3 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Group 1: Column 1 (Top & Bottom pair stacked) */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <MemberCard member={teamData[0]} />
            <MemberCard member={teamData[3]} />
          </div>

          {/* Group 2: Column 2 (Top & Bottom pair stacked) */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <MemberCard member={teamData[1]} />
            <MemberCard member={teamData[4]} />
          </div>

          {/* Group 3: Column 3 (Top & Bottom pair stacked) */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <MemberCard member={teamData[2]} />
            <MemberCard member={teamData[5]} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Individual Team Card Component mimicking the design layout rules */
function MemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="relative w-full bg-white shadow-[0px_6px_1px_#000] text-black rounded-[2rem] p-6 flex items-center justify-between transition-transform duration-300 hover:scale-[1.02] border border-black min-h-[140px] sm:min-h-[150px]">
      {/* Left side content: Shape wrapper + Profile and Text details */}
      <div className="flex items-center gap-4 sm:gap-5 z-10 w-[85%]">
        {/* Custom 4-point cross background graphic behind portrait */}
        <div className="relative flex-shrink-0 w-20 h-20 sm:w-22 sm:h-22 flex items-center justify-center">
          {/* Custom SVG backdrop mimicking the organic green corner points */}

          {/* Circular image cropped sharply overlapping the shape */}
          <img
            src={member.imageUrl}
            alt={member.name}
            className="w-[78%] h-[78%] "
          />
        </div>

        {/* Member Credentials */}
        <div className="flex flex-col pr-2">
          <h3 className="text-base sm:text-lg font-bold tracking-tight text-gray-900 leading-tight">
            {member.name}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 font-medium mt-0.5">
            {member.role}
          </p>
        </div>
      </div>

      {/* Right side item: Linked In Platform circular toggle trigger */}
      <a
        href={member.linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 sm:top-5 sm:right-5 bg-black hover:bg-neutral-800 p-1.5 rounded-full flex items-center justify-center transition-colors shadow-sm z-20"
      >
        <LiaLinkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B4FA60] fill-[#B4FA60] stroke-black stroke-[1.5]" />
      </a>
    </div>
  );
}
