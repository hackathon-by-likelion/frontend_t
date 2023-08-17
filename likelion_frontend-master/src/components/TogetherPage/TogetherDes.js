import React, { useState } from "react";
import "./TogetherDes.css";
import { BsArrowRightShort } from "react-icons/bs";
import TogetherStation from "./TogetherStation";

const TogetherDes = (props) => {
  const [showStartingModal, setShowStartingModal] = useState(false);
  const [showDestinateModal, setShowDestinateModal] = useState(false);
  const [starting, setStarting] = useState("인천공항");
  const [destinate, setDestinate] = useState("여수");
  const [showStart, setShowStart] = useState(false);
  const [showDestinate, setShowDestinate] = useState(false);

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
  const toggleStart = () => {
    //출발 말풍선
    setShowStart(!showStart);
  };
  const toggleDestinate = () => {
    //도착 말풍선
    setShowDestinate(!showDestinate);
  };

  return (
    <div className="together_main">
      <div className="together_left">
        <p>출발</p>
        <button
          className="together_start_button"
          onClick={handleStartingClick}
          onMouseEnter={toggleStart}
          onMouseLeave={toggleStart}
        >
          {starting}
          {showStart &&(
            <div className="start_tooltip">클릭 후 서울을 선택하세요</div>
          )}
        </button>
        {showStartingModal && (
          <div className="together_modal-overlay">
            <div className="t_modal">
              <TogetherStation
                onSelect={handleSelectStarting}
                closeModal={() => setShowStartingModal(false)}
              />
            </div>
          </div>
        )}
      </div>
      <div className="together_middle">
        <BsArrowRightShort size={20} color="blue" />
      </div>
      <div className="together_right">
        <p>도착</p>
        <button
          className="together_destinate_button"
          onClick={handleDestinateClick}
          onMouseEnter={toggleDestinate}
          onMouseLeave={toggleDestinate}
        >
          {destinate}
          {showDestinate &&(
            <div className="destinate_tooltip">클릭 후 천안을 선택하세요</div>
          )}
        </button>
        {showDestinateModal && (
          <div className="t_modal-overlay">
            <div className="t_modal">
              <TogetherStation
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

export default TogetherDes;
