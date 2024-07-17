import { useEffect, useState } from "react";
import SearchBar from "./Search";
import Error from "./Error";
import { ToastContainer, toast } from "react-toastify";
import { ProgressBar } from "react-loader-spinner";
import "react-toastify/dist/ReactToastify.css";
import cloudy from "../assets/cloudy.svg";
import sun from "../assets/sun.svg";
import rain from "../assets/rain.svg";
import moon from "../assets/moon.svg";
import thunderstorms from "../assets/thunderstorms.svg";
import snow from "../assets/snow.svg";
import haze from "../assets/haze.svg";
import fog from "../assets/fog.svg";
import mist from "../assets/mist.svg";

let DateTime = luxon.DateTime;
const apiKey = import.meta.env.VITE_API_KEY;

function Weather() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function getData(search) {
    if (search === "") {
      toast.error("Please enter a city name!", {
        icon: true,
        position: "top-right",
        draggable: false,
        style: { background: "#475569", color: "#f8fafc" },
        closeOnClick: true,
      });
      return;
    }
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();
      if (!response.ok) {
        toast.error("City not found!", {
          position: "top-right",
          draggable: false,
          style: {
            background: "#475569",
            color: "#f8fafc",
          },
          closeOnClick: true,
        });
        setLoading(false);
        setError(true);
        return;
      }
      setLoading(false);
      setError(false);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData("London");
  }, []);

  function handleSearch() {
    getData(search);
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      getData(search);
    }
  }

  function getDate() {
    return DateTime.now().setLocale("en-us").toLocaleString(DateTime.DATE_FULL);
  }

  function getIcon(data) {
    let weatherIcon = null;
    if (data?.weather[0].main === "Clear") {
      if (data?.weather[0].icon === "01n") {
        weatherIcon = moon;
      }
      if (data?.weather[0].icon === "01d") {
        weatherIcon = sun;
      }
    } else if (
      data?.weather[0].main === "Rain" ||
      data?.weather[0].main === "Drizzle"
    ) {
      weatherIcon = rain;
    } else if (data?.weather[0].main === "Thunderstorm") {
      weatherIcon = thunderstorms;
    } else if (data?.weather[0].main === "Snow") {
      weatherIcon = snow;
    } else if (data?.weather[0].main === "Haze") {
      weatherIcon = haze;
    } else if (data?.weather[0].main === "Fog") {
      weatherIcon = fog;
    } else if (data?.weather[0].main === "Mist") {
      weatherIcon = mist;
    } else {
      weatherIcon = cloudy;
    }
    return weatherIcon;
  }

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        handleKeyPress={handleKeyPress}
      />
      {loading ? (
        <ProgressBar
          className="mt-6"
          visible={true}
          height="80"
          width="80"
          barColor="#F8FAFC"
          borderColor="#F8FAFC"
          ariaLabel="progress-bar-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      ) : error ? (
        <Error />
      ) : (
        <>
          <img src={getIcon(data)} className="h-64 w-64 mt-3" alt="Image" />
          <div className="flex flex-col items-center p-8 rounded-md w-600 sm:px-12 text-gray-800">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-50 px-3">
                {data?.name}, <span>{data?.sys.country}</span>
              </h1>
              <p className="text-2xl text-gray-600 px-3 py-3 mb-3">
                {getDate()}
              </p>
            </div>
            <div className="mb-2 text-3xl font-semibold text-gray-50">
              {Math.round(data?.main?.temp) + "°C"}
              <span className="mx-1 font-normal"> / </span>{" "}
              {Math.round((data?.main?.temp * 9) / 5) + 32 + "°F"}
            </div>
            <p className="text-gray-600 text-center text-2xl capitalize">
              {data?.weather[0].description}
            </p>
          </div>
        </>
      )}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        draggable={false}
        closeButton={false}
        style={{
          "--toastify-color-progress-error": "#cbd5e1",
          "--toastify-icon-color-error": "#cbd5e1",
        }}
      />
    </>
  );
}

export default Weather;
