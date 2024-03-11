import { useEffect, useState } from "react";
import Day, { DayProps } from "./Day";
import { getCalendarDays } from "../utils/getCalendarDays";

interface Props {
  name: string;
  year: number;
  month: number;
  today: Date;
}

const Calendar = ({ name, year, month, today }: Props) => {
  const [days, setDays] = useState<DayProps[]>([]);
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    setDays(getCalendarDays(weekDays, year, month, today));
  }, [name, year, month, today]);

  return (
    <section className="m-10 mx-auto grid w-full max-w-screen-xl grid-cols-7 justify-evenly border border-white">
      {weekDays.map((day, i) => (
        <span
          className="flex items-center justify-center border border-white py-5 capitalize text-white"
          key={i}
        >
          <span className="hidden md:block">{day}</span>
          <span className="text-sm md:hidden">
            {i === 2 || i === 4 ? day.slice(0, 4) : day.slice(0, 3)}
          </span>
        </span>
      ))}
      {days.map((day, i) => (
        <Day
          dayNum={day.dayNum}
          selectable={day.selectable ? true : false}
          today={day.today}
          key={i}
        />
      ))}
    </section>
  );
};

export default Calendar;
