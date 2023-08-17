import React, { useState } from "react";
import "./ReserveDate.css";
import { SlArrowDown } from "react-icons/sl";
import DatePicker from "react-datepicker"; // Import the date picker component
import "react-datepicker/dist/react-datepicker.css";

const ReserveDate = (props) => {
  const date = new Date();
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 15); // 15 days from now

  const month = date.toLocaleString("ko-KR", { month: "long" });
  const day = date.toLocaleString("ko-KR", { day: "2-digit" });
  const year = date.getFullYear();
  var week = new Array("일", "월", "화", "수", "목", "금", "토");
  var today = new Date().getDay();
  var todayLabel = week[today];
  const hour = date.getHours();
  const minutes = date.getMinutes();

  const [selectDate, setSelectDate] = useState(null); // State to hold selected date

  // Calculate date information from selectedDate
  const selectedMonth =
  selectDate?.toLocaleString("ko-KR", { month: "long" }) || "";
  const selectedDay =
  selectDate?.toLocaleString("ko-KR", { day: "2-digit" }) || "";
  const selectedYear = selectDate?.getFullYear() || "";
  const selectedDayOfWeek = selectDate
    ? week[selectDate.getDay()]
    : todayLabel;

    

  return (
    <div className="reserve_date">
      <p>출발일</p>
      <div className="reserve-date_sub">
        {selectDate ? (
          <p>
            {selectedYear}년 {selectedMonth} {selectedDay} ({selectedDayOfWeek})
          </p>
        ) : (
          <p>
            {year}년 {month} {day} ({todayLabel}) {hour}:{minutes}
          </p>
        )}
      </div>
      <div className="reserve_calendar">
        <DatePicker
          selected={selectDate} // Set the selected date
          onChange={(date) => setSelectDate(date)} // Handle date selection
          dateFormat="yyyy년 MM월 dd일 (eee)" // Format of the displayed date
          minDate={date} // Set minimum date to today
          maxDate={futureDate} // Set maximum date to today
          className="calendar_button" // Apply CSS class to style the input
          customInput={
            <button className="calendar_button">
              <SlArrowDown size={15} color="blue" />
            </button>
          }
        />
      </div>
    </div>
  );
};

export default ReserveDate;
