import { useState } from "react";
import Calendar from "./components/Calendar";
import { useTheme } from "./components/ThemeContext/ThemeContext";

function App() {
  const [calendarMonth, setCalendarMonth] = useState<Date>(new Date());

  const theme = useTheme();

  const today = new Date();

  const handleMonthChange = (sum: number) => {
    const calMonth = calendarMonth?.getMonth();
    const calYear = calendarMonth?.getFullYear();

    if (sum === 0) setCalendarMonth(new Date());
    else setCalendarMonth(new Date(calYear, calMonth + sum, 1));
  };

  return (
    <div
      className={`theme ${theme ? "bg-black" : "bg-gray-800"} flex min-h-screen w-full flex-col items-center`}
    >
      <h1 className="text py-10 font-extrabold uppercase text-red-950 underline md:text-7xl 2xl:text-9xl">
        Group Calendar
      </h1>
      {calendarMonth && (
        <div className="flex w-full items-center justify-center gap-10 px-10 text-5xl text-white">
          <button
            className="flex h-16 w-16 items-center justify-center rounded-full border pb-2 text-4xl text-white"
            onClick={() => handleMonthChange(-1)}
          >
            {"<"}
          </button>
          <div className="w-full text-center text-2xl md:text-5xl">
            {calendarMonth.toLocaleDateString("en-US", { month: "long" })}{" "}
            {calendarMonth.getFullYear()}
          </div>
          <button
            className="flex h-16 w-16 items-center justify-center rounded-full border pb-2 text-4xl text-white"
            onClick={() => handleMonthChange(1)}
          >
            {">"}
          </button>
        </div>
      )}
      <button
        className="text-lg text-white underline md:py-10"
        onClick={() => handleMonthChange(0)}
      >
        Return to Today
      </button>
      <Calendar
        name="test"
        year={calendarMonth?.getFullYear()}
        month={calendarMonth?.getMonth()}
        today={today}
      />
    </div>
  );
}

export default App;
