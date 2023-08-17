import React from "react";
import "./ReserveStation.css"; // Import your CSS file for styling

const ReserveStation = ({ onSelect, closeModal }) => {
  const departureStations = [
    "서울",
    "용산",
    "대전",
    "동대구",
    "대구",
    "부산",
    "수서",
    "공덕",
    "천안",
    "광명",
    "인천공항",
    "울산",
    "포항",
    "안양",
    "수원",
    "신경주",
    "여수",
    "평창",
  ]

  return (
    <div className="modal-container">
      <div className="modal-content-grid">
        <div className="station-container station-grid">
          {departureStations.map((station, index) => (
            <button
              className="station-button"
              key={index}
              onClick={() => onSelect(station)}
            >
              {station}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReserveStation;
