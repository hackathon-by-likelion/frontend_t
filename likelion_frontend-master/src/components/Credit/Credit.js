import React from "react";
import "./Credit.css";
import { Link } from "react-router-dom";

const Credit = () => {
  return (
    <div className="credit_main">
      <div className="c_menubar">
        <div className="c_pay">결제</div>
        <div className="c_close">✕</div>
      </div>
      <div className="c_content">
        <div className="c_first">
          <div>2023년 8월 19일 (토)</div>
          <div>무궁화호 1201</div>
        </div>
        <div className="c_second">
          <div className="c_second_1">
            <span>서울</span> <span className="c_arrow">➝</span> <span>천안</span>
          </div>
          <div className="c_second_2">
            <span className="c_num1">05:53</span>
            <span className="c_num2">07:04</span>
          </div>
        </div>
        <div className="c_third">
          <div>2호차 9</div>
        </div>
        <div className="c_fourth">
          <div className="c_ride_price">
            <span className="c_left">승차권</span>{" "}
            <span className="c_right">6,300원</span>
          </div>
          <div className="c_discount_price">
            <span className="c_left">할인 적용 전</span>
            <span className="c_right">6,300원 (총 0원 할인)</span>
          </div>
          <div className="c_image-container">
            <img
              src={process.env.PUBLIC_URL + "/credit.jpg"} // 이미지 경로 설정
              alt="c_notice"
              className="c_capture-image"
            />
          </div>
          <div className="c_amount">
            <div className="c_total">총 1개</div>
            <div className="c_price">6,300원</div>
          </div>
        </div>
        <div className="c_button-container">
          <button className="c_button">예약취소</button>
          <Link to="/card">
            <button className="c_button">다음</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Credit;
