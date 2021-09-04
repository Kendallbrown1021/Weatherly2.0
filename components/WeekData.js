import React from "react";
import { dayOfWeek } from "../utils/getDayOfWeek";
const WeekData = ({ data, index }) => {
  const { day } = data;
  console.log(day);
  const indexDay = new Date(data.date);
  const currentDayOfWeek = indexDay.getDay();
  console.log(dayOfWeek(currentDayOfWeek + 1));
  return (
    <div className="h-28 mx-auto bg-white w-11/12 flex justify-around items-center rounded-md shadow-md mt-3">
      <p>{dayOfWeek(currentDayOfWeek + 1).slice(0, 3)}</p>
      <div className="border-r-2 border-blue-300">
        <img className="pr-2" src={day.condition.icon} />
      </div>
      <div>
        <p>H: {day.maxtemp_f} °F</p>
        <p>L: {day.mintemp_f} °F</p>
      </div>
    </div>
  );
};

export default WeekData;
