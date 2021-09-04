import React from "react";
import Image from "next/image";
import { dayOfWeek } from "../utils/getDayOfWeek";
const CurrentCityData = ({ data }) => {
  const { current, forecast } = data.data;
  const indexDay = new Date(forecast.forecastday[0].date);
  const currentDayOfWeek = indexDay.getDay();
  console.log(dayOfWeek(currentDayOfWeek + 1));
  console.log(data);

  return (
    <div className="h-60 bg-white w-11/12 mx-auto  rounded-md shadow-lg  pt-2 ">
      <p className="text-2xl ">{dayOfWeek(currentDayOfWeek + 1)}</p>
      <div className="object-contain h-20 w-20 mx-auto  ">
        <img
          className=" h-full w-full mx-auto object-fill "
          src={current.condition.icon}
          alt="Weather Icon"
        />
      </div>
      <p className="font-medium text-center text-2xl">{current.temp_f} °F</p>
      <div className="text-center w-2/3 mx-auto text-2xl mt-3">
        <p className="">{current.condition.text}</p>
      </div>
      <div className="flex justify-between w-3/5 mx-auto text-xl font-medium mt-2">
        <p>{forecast.forecastday[0].day.maxtemp_f} °F</p>
        <p>{forecast.forecastday[0].day.mintemp_f} °F</p>
      </div>
    </div>
  );
};

export default CurrentCityData;
