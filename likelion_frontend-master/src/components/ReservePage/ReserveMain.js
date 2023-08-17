import { useState } from "react";
import ReserveDate from "./ReserveDate";
import ReserveDes from "./ReserveDes";
import "./ReserveMain.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReservePer from "./ReservePer";

const ReserveMain = () => {
  const [check, setCheck] = useState(null);

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

  return (
    <div className="reserve_frame">
      <div className="reserve_frame_top">
        <p>
          승차권 예매 <FaBars className="icon" size={20} color="white" />
        </p>
        <div className="reserve_frame_top_button">
          <button
            className={check === "oneway" ? "selected" : ""}
            onClick={handleOneWay}
          >
            편도
          </button>
          <button
            className={check === "roundway" ? "selected" : ""}
            onClick={handleRoundWay}
          >
            왕복
          </button>
        </div>
        <div className="reserve_frame_des">
          <ReserveDes />
        </div>
        <div className="reserve_frame_date">
          <ReserveDate />
        </div>
        <div className="reserve_frame_bottom">
          <ReservePer />
        </div>
        <div className="reserve_select">
          <button onClick={handleNonSelect}>간편구매 등록</button>
          <Link to="/check_seat_page">
            <button onClick={handleSelect}>열차 조회하기</button>
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

export default ReserveMain;
