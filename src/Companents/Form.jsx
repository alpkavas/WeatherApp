import { useState } from "react";

function Form({ city, setIscity }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    city(value);
    setValue("");
    setIscity(true);
  };

  return (
    <div className="App">
      <div className="content">
        <h2>WeatherApp</h2>
        <h2>WeatherApp</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputDiv">
          <input
            type="text"
            onChange={e => setValue(e.target.value)}
            placeholder="Search a city"
            value={value}
          />
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
