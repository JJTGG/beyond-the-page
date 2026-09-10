"use client";

import { useState } from "react";
import { weeks } from "../data/weeks";
import WeekCard from "./WeekCard";

export default function SixWeeks() {
  const [openWeek, setOpenWeek] = useState<number | null>(null);

  const toggleWeek = (index: number) => {
    setOpenWeek((current) => (current === index ? null : index));
  };

  return (
    <div className="six-weeks">
      {weeks.map((week, index) => (
        <WeekCard
          key={week.title}
          title={week.title}
          sections={week.sections}
          isOpen={openWeek === index}
          onToggle={() => toggleWeek(index)}
        />
      ))}
    </div>
  );
}