import { TiWeatherPartlySunny } from "react-icons/Ti";
import { GiWindTurbine } from "react-icons/Gi";
import { WiHumidity, WiHot } from "react-icons/Wi";
import { HiOutlineArrowTrendingDown } from "react-icons/Hi2";

function Info({ info, isCity }) {
  if (!isCity || !info || !info.main) {
    return null;
  }
  return (
    <div className="info">
      <div className="textInfo">
        <div className="city">
          <p>
            {info.name}, {info.sys.country}
          </p>
          <p id="celc">{info.main.temp} C°</p>
        </div>
        <div className="description">
          <span id="icon">
            <TiWeatherPartlySunny size={60} />
          </span>
          <p>{info.weather[0].description.toUpperCase()} </p>
        </div>
        <div className="icons">
          <span className="iconWind">
            <GiWindTurbine size={30} alt="speed" />
          </span>
          <p>{info.wind.speed}</p>
          <span className="iconWind">
            <WiHumidity size={30} />
          </span>
          <p>{info.main.humidity} %</p>
          <span className="iconWind">
            <HiOutlineArrowTrendingDown size={30} />
          </span>
          <p>{info.main.temp_min} C°</p>
        </div>
        <div id="feelsLike">
          <p>Hissedilen: {info.main.feels_like} C°</p>
          <span className="iconFeels">
            <WiHot size={40} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Info;
