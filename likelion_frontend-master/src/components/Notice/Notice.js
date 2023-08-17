import React from "react";
import "./Notice.css";
import { Link } from "react-router-dom";

const Notice = ({ closeModal }) => {
  return (
    <div className="notice_modal-overlay">
      <div className="notice_modal">
        <div className="notice_modal-content">
          <h1>코레일 어플 가이드!</h1>
          <p>안녕하세요 멋사 햌헠톸에서 만든 코레일 어플 가이드입니다*^^*</p>
          <br />
          <p>화면을 보시고 저희가 제시해드리는 가이드를 잘 따라오세요.</p>
          <br />
          <p>
            저희 목표는 "편도"로 오늘 기준으로 3일 뒤 "서울"에서 "천안"으로 가는
            열차를 예매할 거에요.
          </p>
          <br />
          <p>열차 정보는 "무궁화호 1201", 시간은 "05:53" 서울에서 출발해 "07:04" 천안 도착 열차에요</p>
          <br/>
          <p>시작하기 버튼을 눌러서 한번 해볼까요?</p>
          <Link to="/together_main">
            <button className="but" onClick={closeModal}>시작하기</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Notice;
