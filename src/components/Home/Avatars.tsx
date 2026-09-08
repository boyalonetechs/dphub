import { img } from "../Images/server";

// ─── Avatar Component ──────────────────────────────────────────────────────────
const avatars = [
  {
    name: "Ifeanyi Okocha",
    role: "CEO & Founder",
    image: `${img}/avatars/4.jpg`,
    color: "#8B7355",
  },
  {
    name: "Miracle Chidebere",
    role: "Social Minister",
    image: `${img}/avatars/2.jpg`,
    color: "#5C4033",
  },
  {
    name: "Oluebube Ijere",
    role: "Director",
    image: `${img}/avatars/3.jpg`,
    color: "#A0785A",
  },
  {
    name: "Deborah Ochonma",
    role: "Career Consellor",
    image: `${img}/avatars/1.jpg`,
    color: "#7B6344",
  },
];

// ─── Avatar Placeholder ────────────────────────────────────────────────────────
export const AvatarCircle = () => (
  <div className="lg:max-w-[1360px] max-w-[400px] mx-auto p-[2px] rounded-2xl bg-gradient-to-b from-yellow-400 to-[#00D05A] shadow-md">
    <div className="px-6 md:px-20 py-8 w-full rounded-[14px] bg-white flex flex-wrap gap-8 sm:gap-12 items-center justify-start sm:justify-between">
      {avatars.map((avatar, index) => (
        <div key={index} className="flex items-center gap-4 group">
          {/* Styled Circle Avatar */}
          <div className="w-14 h-14 rounded-full flex items-center justify-center shrink-0 border-2 border-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg overflow-hidden bg-gray-100">
            <img
              src={avatar.image}
              alt={avatar.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Profile Info */}
          <div className="flex flex-col">
            <span className="font-bold text-[#18047C] text-sm sm:text-base tracking-tight group-hover:text-[#0EB862] transition-colors duration-300">
              {avatar.name}
            </span>
            <span className="text-xs sm:text-sm text-gray-500 font-medium tracking-wide">
              {avatar.role}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);
