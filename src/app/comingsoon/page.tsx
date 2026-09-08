"use client";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <section className="flex fixed inset-0 z-50 flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="shadow-sm p-8 h-80 rounded-2xl bg-white text-center">
        <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg text-gray-600 mb-6">
          We are working hard to bring you something amazing. Stay tuned!
        </p>
        <button
          onClick={() => {
            router.back();
          }}
          className="px-6 py-2 text-white bg-[#00E676] rounded-xl"
        >
          Back
        </button>
      </div>
    </section>
  );
}
