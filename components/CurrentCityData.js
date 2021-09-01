import React from "react";
import Image from "next/image";

const CurrentCityData = ({ data }) => {
  console.log(data);
  const { current, forecast } = data.data;
  return (
    <div className="h-3/4 bg-white w-11/12 mx-auto mt-3 rounded-md shadow-lg  pt-4 ">
      <div className="object-contain h-24 w-24 mx-auto  ">
        <img
          className=" h-full w-full mx-auto object-fill "
          src={current.condition.icon}
          alt="Weather Icon"
        />
      </div>
      <p className="font-medium text-center text-4xl">{current.temp_f} °F</p>
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
