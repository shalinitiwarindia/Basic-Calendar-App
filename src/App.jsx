import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles.css"; 

function App() {
  const [date, changeDate] = useState(new Date());

  function changeValue(val) {
    changeDate(val);
  }

  return (
    <div className="app-container">
      <h3 className="header">Calendar in React JS</h3>
      <div className="calendar-container">
        <Calendar onChange={changeValue} value={date} />
      </div>
      <p className="selected-date">
        The selected date is: <span>{date.toLocaleDateString()}</span>
      </p>
    </div>
  );
}

export default App;
