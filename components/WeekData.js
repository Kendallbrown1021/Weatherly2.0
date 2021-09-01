import React from "react";

const WeekData = ({ data }) => {
  const { current, forecast } = data.data;
  return (
    <div className="h-1/4 mx-auto bg-white w-11/12 flex justify-around items-center ">
      <div>
        <img src={forecast.forecastday[1].day.condition.icon} />
      </div>
      <div>
        <p>{forecast.forecastday[0].day.maxtemp_f} °F</p>
        <p>{forecast.forecastday[0].day.mintemp_f} °F</p>
      </div>
    </div>
  );
};

export default WeekData;
