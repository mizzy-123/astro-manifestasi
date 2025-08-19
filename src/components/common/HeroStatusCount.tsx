import { use, useEffect, useState } from "react";

interface CounterProps {
  start: number;
  end: number;
  duration: number; // dalam ms
}

export function HeroStatusCount() {
  let project: CounterProps = {
    start: 0,
    end: 23,
    duration: 2000, // 2 detik
  };

  const [countProject, setCountProject] = useState<number>(project.start);

  let satisfaction: CounterProps = {
    start: 0,
    end: 96,
    duration: 2000, // 2 detik
  };

  const [countSatisfaction, setCountSatisfaction] = useState<number>(
    satisfaction.start
  );

  let experience: CounterProps = {
    start: 0,
    end: 5,
    duration: 2000, // 2 detik
  };

  const [countExperience, setCountExperience] = useState<number>(
    experience.start
  );

  /* Menggunakan useEffect untuk memulai animasi saat komponen dimount */
  // useeffect project
  useEffect(() => {
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      let progress = Math.min((timestamp - startTime) / project.duration, 1);

      // easing
      let easeOutQuad = progress * (2 - progress);
      setCountProject(
        Math.floor(easeOutQuad * (project.end - project.start) + project.start)
      );

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, []);

  // useeffect satisfaction
  useEffect(() => {
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      let progress = Math.min(
        (timestamp - startTime) / satisfaction.duration,
        1
      );

      // easing
      let easeOutQuad = progress * (2 - progress);
      setCountSatisfaction(
        Math.floor(
          easeOutQuad * (satisfaction.end - satisfaction.start) +
            satisfaction.start
        )
      );

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, []);

  // useeffect experience
  useEffect(() => {
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      let progress = Math.min((timestamp - startTime) / experience.duration, 1);

      // easing
      let easeOutQuad = progress * (2 - progress);
      setCountExperience(
        Math.floor(
          easeOutQuad * (experience.end - experience.start) + experience.start
        )
      );

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, []);
  return (
    <div className="text-white py-6">
      <div className="max-w-4xl mx-auto flex justify-center divide-x divide-font-white">
        {/* <!-- Item 1 --> */}
        <div className="sm:px-6 mobile:px-4 text-center">
          <p className="font-poppins text-2xl">{countProject}+</p>
          <div className="flex flex-col items-center">
            <p className="font-poppins text-[12px]">Project</p>
            <p className="font-poppins text-[12px]">Terselesaikan</p>
          </div>
        </div>

        {/* <!-- Item 2 --> */}
        <div className="sm:px-6 mobile:px-4 text-center">
          <p className="font-poppins text-2xl">{countSatisfaction}%</p>
          <div className="flex flex-col items-center">
            <p className="font-poppins text-[12px]">Kepuasan</p>
            <p className="font-poppins text-[12px]">Pelanggan</p>
          </div>
        </div>

        {/* <!-- Item 3 --> */}
        <div className="sm:px-6 mobile:px-4 text-center">
          <p className="font-poppins text-2xl">{countExperience}+</p>
          <div className="flex flex-col items-center">
            <p className="font-poppins text-[12px]">Tahun</p>
            <p className="font-poppins text-[12px]">Pengalaman</p>
          </div>
        </div>
      </div>
    </div>
  );
}
