import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";

export default function AdminCalender() {
  const [dateState, setDateState] = useState(new Date());
  const changeDate = (e) => {
    setDateState(e);
  };
  return (
    <div style={{ width: "220px" }}>
      <p>
        Today:
        <b>{moment(dateState).format("MMMM Do YYYY")}</b>
      </p>
      <Calendar value={dateState} onChange={changeDate} />
    </div>
  );
}
