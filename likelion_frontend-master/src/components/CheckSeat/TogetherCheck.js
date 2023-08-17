import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./TogetherCheck.css";

const nochoiceImage = (
  <img
    src={process.env.PUBLIC_URL + "/nochoice.jpg"} // 이미지 경로 설정
    alt="열차"
    className="train-image"
  />
);
const choiceImage = (
  <img
    src={process.env.PUBLIC_URL + "/choice.jpg"} // 이미지 경로 설정
    alt="열차"
    className="train-image"
  />
);

const TogetherCheck = () => {
  const [image, setImage] = useState(nochoiceImage);
  const [showButtons, setShowButtons] = useState(true);
  const [searchTrain, setSearchTrain] = useState(false); //열차편
  const [seatCheck, setSeatCheck] = useState(false); //최종 버튼

  const handleImageClick = () => {
    console.log("이미지가 변경돼야됨");
    setShowButtons(false); // 이미지 변경 시 버튼 숨기기
    // 이미지 변경
    if (image === nochoiceImage) {
      setImage(choiceImage);
    } else {
      setImage(nochoiceImage);
    }
  };

  const handleButtonClick = () => {
    // 버튼 클릭 시 이미지 변경
    setImage(choiceImage);
  };

  const nextSeatHandler = () => {
    console.log('다음페이지로');
  };

  const handleTrain = () => {
    //열차편 말풍선
    setSearchTrain(!searchTrain);
  };

  const handleSearch = () => {
    //열차 조회하기 말풍선
    setSeatCheck(!seatCheck);
  };

  return (
    <div className="tg_train-inquiry-container">
      <div className="tg_image-container">
        <div className="tg_title">열차 조회</div>
        <div>
          {image}
          {showButtons && (
            <button onClick={handleImageClick} className="tg_image-button"></button>
          )}
          {image === choiceImage && (
            <Link to="/checked_page">
              <button onClick={nextSeatHandler} className="tg_seat-button"></button>
            </Link>
          )}
          <button className="tg_change_image" onClick={handleButtonClick}> </button>
        </div>
      </div>
    </div>
  );
};

export default TogetherCheck;
