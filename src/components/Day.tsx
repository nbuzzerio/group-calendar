export interface DayProps {
  dayNum: number;
  selectable: boolean;
  today?: boolean;
}

const Day = ({ dayNum, selectable, today }: DayProps) => {
  return (
    <span
      className={`flex basis-[1/7] items-start justify-start border p-3 sm:aspect-square ${
        selectable
          ? `hover:cursor-pointer ${today ? "z-10 -m-[1px] border-2 border-emerald-600 text-emerald-600" : "border-white text-white"}`
          : "border-white/30 text-white/10 hover:cursor-not-allowed"
      }
  `}
    >
      {dayNum}
    </span>
  );
};

export default Day;
