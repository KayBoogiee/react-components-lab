import './WeatherForecast.css'

const WeatherForecast = ({ day, imgAlt, conditions, time }) => {
  return (
    <div className="weather">
      <h2>{day}</h2>
      <img src="" alt={imgAlt} />
      <p><span>conditions: </span>{conditions}</p>
      <p><span>time: </span>{time}</p>
    </div>
  );
};

export default WeatherForecast;
