import React, { useState } from "react";
import "./ReserveDes.css";
import { BsArrowRightShort } from "react-icons/bs";
import ReserveStation from "./ReserveStation";

const ReserveDes = (props) => {
  const [showStartingModal, setShowStartingModal] = useState(false);
  const [showDestinateModal, setShowDestinateModal] = useState(false);
  const [starting, setStarting] = useState("인천공항");
  const [destinate, setDestinate] = useState("여수");

  const handleStartingClick = () => {
    setShowStartingModal(true);
    setShowDestinateModal(false);
  };

  const handleDestinateClick = () => {
    setShowDestinateModal(true);
    setShowStartingModal(false);
  };

  const handleSelectStarting = (station) => {
    setStarting(station);
    setShowStartingModal(false);
  };

  const handleSelectDestinate = (station) => {
    setDestinate(station);
    setShowDestinateModal(false);
  };

  return (
    <div className="main">
      <div className="left">
        <p>출발</p>
        <button className="start_button" onClick={handleStartingClick}>
          {starting}
        </button>
        {showStartingModal && (
          <div className="modal-overlay">
            <div className="modal">
              <ReserveStation
                onSelect={handleSelectStarting}
                closeModal={() => setShowStartingModal(false)}
              />
            </div>
          </div>
        )}
      </div>
      <div className="middle">
        <BsArrowRightShort size={20} color="blue" />
      </div>
      <div className="right">
        <p>도착</p>
        <button className="destinate_button" onClick={handleDestinateClick}>
          {destinate}
        </button>
        {showDestinateModal && (
          <div className="modal-overlay">
            <div className="modal">
              <ReserveStation
                onSelect={handleSelectDestinate}
                closeModal={() => setShowDestinateModal(false)}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReserveDes;
