import { useState } from "react";
import "./TogetherMain.css";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import TogetherDes from "./TogetherDes";
import TogetherDate from "./TogetherDate";
import TogetherPer from "./TogetherPer";

const TogetherMain = () => {
  const [check, setCheck] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false); //편도
  const [showNoTooltip, setShowNoTooltip] = useState(false); //왕복
  const [showSeat, setShowSeat] = useState(false); //열차 조회
  const [showNoMessage, setShowNoMessage] = useState(false) //간편구매등록 

  const handleOneWay = () => {
    setCheck("oneway");
    console.log("편도");
  };
  const handleRoundWay = () => {
    setCheck("roundway");
    console.log("왕복");
  };
  const handleSelect = () => {
    console.log("열차 조회하기");
  };
  const handleNonSelect = () => {
    console.log("잘못 누른 버튼");
  };
  const handleReturn = () => {
    console.log("처음으로");
  };
  const toggleTooltip = () => {
    //편도 말풍선
    setShowTooltip(!showTooltip);
  };
  const toggleNoTooltip = () => {
    //왕복 말풍선
    setShowNoTooltip(!showNoTooltip);
  };
  const handleSeat = () => {
    //열차 조회하기 말풍선
    setShowSeat(!showSeat);
  };
  const noSelect=()=>{
    setShowNoMessage(!showNoMessage);
  }  

  return (
    <div className="together_frame">
      <div className="together_frame_top">
        <p>
          승차권 예매 <FaBars className="icon" size={20} color="white" />
        </p>
        <div className="together_frame_top_button">
          <button
            className={check === "oneway" ? "selected" : ""}
            onClick={handleOneWay}
            onMouseEnter={toggleTooltip}
            onMouseLeave={toggleTooltip}
          >
            편도
            {showTooltip && (
              <div className="tooltip">맞습니다! 클릭하세요~</div>
            )}
          </button>
          <button
            className={check === "roundway" ? "selected" : ""}
            onClick={handleRoundWay}
            onMouseEnter={toggleNoTooltip}
            onMouseLeave={toggleNoTooltip}
          >
            왕복
            {showNoTooltip && (
              <div className="no_tooltip">이 버튼이 아니에요ㅜㅜ</div>
            )}
          </button>
        </div>
        <div className="together_frame_des">
          <TogetherDes />
        </div>
        <div className="together_frame_date">
          <TogetherDate />
        </div>
        <div className="reserve_frame_bottom">
          <TogetherPer />
        </div>
        <div className="together_select">
          <button onClick={handleNonSelect}
          onMouseEnter={noSelect} // 열차 조회하기 말풍선 표시
          onMouseLeave={noSelect}>간편구매 등록
          {showNoMessage&&(
            <div className="no_show_message">이 버튼이 아니에요!</div>
          )}
          </button>
          <Link to="/together_check">
          <button
            onClick={handleSelect}
            onMouseEnter={handleSeat} // 열차 조회하기 말풍선 표시
            onMouseLeave={handleSeat} // 열차 조회하기 말풍선 숨김
          >
            열차 조회하기
            {showSeat && (
              <div className="seat_tooltip">조건들이 맞으면 누르세요!</div>
            )}
          </button>
        </Link>
          <Link to="/">
            <button className="return" onClick={handleReturn}>
              처음으로
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TogetherMain;
