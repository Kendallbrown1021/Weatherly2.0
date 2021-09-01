import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";

import CurrentCityData from "../components/CurrentCityData";
import WeekData from "../components/WeekData";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [cityName, setCityName] = useState("");
  const [cityData, setCityData] = useState(null);
  const [weekData, setWeekData] = useState(null);

  const getCurrentData = async (cityName) => {
    console.log(cityName);
    try {
      const response = await axios.get(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${cityName}&aqi=no`
      );
      setCityData(response);
    } catch (err) {
      console.log(err);
    }
  };

  const getWeeklyInfo = async () => {
    try {
      const week = await axios.get(
        `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_API_KEY}&q=${cityName}&days=5&aqi=no&alerts=no`
      );
      setWeekData(week);
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    getWeeklyInfo(cityName);
    setCityName("");
    console.log(cityData);
  };
  console.log(cityData);
  console.log(weekData);
  return (
    <div className=" min-h-screen p-3 bg-blue-100">
      <Head>
        <title>Weatherly 2.0</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="h-screen  m-1 rounded-xl p-3 flex-col font-roboto ">
        <div className=" h-2/5 bg-blue-400 rounded-md shadow-md mb-5 ">
          <form className="relative" onSubmit={submitHandler}>
            <input
              type="text"
              className="mt-3  p-2  ml-10 rounded-md shadow-md text-center placeholder-blue-700 placeholder-opacity-50 focus:placeholder-transparent focus:outline-none text-blue-400"
              placeholder="Enter City"
              onChange={(event) => setCityName(event.target.value)}
            />
            <button
              type="submit"
              className="relative left-2 bg-white w-10 h-10 rounded-md shadow-sm"
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </form>
          {!weekData ? (
            <h1 className=" text-center bg-white p-1 w-4/6 h-1/4 rounded-md mt-3  ml-10 shadow-lg  align-middle text-2xl  ">
              {" "}
              Please enter <br /> a city
            </h1>
          ) : (
            <CurrentCityData data={weekData} />
          )}
        </div>
        <div className="h-3/5 bg-blue-400 p-3 rounded-md shadow-md">
          {!weekData ? (
            <h1 className="bg-white p-5 w-4/6 rounded-md  mx-auto  text-center shadow-lg   ">
              {" "}
              No Data Available
            </h1>
          ) : (
            <WeekData data={weekData} />
          )}
        </div>
      </main>
    </div>
  );
}
