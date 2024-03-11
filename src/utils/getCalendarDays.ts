import { DayProps } from "../components/Day";

export const getCalendarDays = (
  weekDays: string[],
  year: number,
  month: number,
  today: Date,
) => {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  // Calculate the last day of the previous month
  const lastDayOfPrevMonth = new Date(year, month, 0);

  const days: DayProps[] = [];

  const lastDayOfPrevMonthNum = Number(lastDayOfPrevMonth.getDate());
  const lastDayOfMonthNum = Number(lastDayOfMonth.getDate());

  let fwdNum = getWeekDayNumber(weekDays, firstDayOfMonth);
  let lwdNum = getWeekDayNumber(weekDays, lastDayOfMonth);

  //Pad start of month back to Sunday
  while (fwdNum > 0) {
    days.push({
      dayNum: lastDayOfPrevMonthNum - (fwdNum - 1),
      selectable: false,
    });
    fwdNum--;
  }
  //Add days of month
  for (let i = 0; i < lastDayOfMonthNum; i++) {
    const todayNum = Number(today.getDate());
    const todayMonthNum = today.getMonth();
    const todayYearNum = today.getFullYear();

    if (
      todayNum === i + 1 &&
      todayMonthNum === month &&
      todayYearNum === year
    ) {
      days.push({
        dayNum: i + 1,
        selectable: true,
        today: true,
      });
    } else {
      days.push({
        dayNum: i + 1,
        selectable: true,
      });
    }
  }
  //Pad end of month up to Saturday
  while (lwdNum < 6) {
    days.push({
      dayNum: lwdNum + 1,
      selectable: false,
    });
    lwdNum++;
  }

  return days;
};

const getWeekDayNumber = (weekDays: string[], day: Date) => {
  return weekDays.findIndex(
    (el: string) => el === day.toLocaleDateString("en-US", { weekday: "long" }),
  );
};
