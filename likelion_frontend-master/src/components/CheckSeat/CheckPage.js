import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./CheckPage.css";

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

const CheckPage = () => {
  const [image, setImage] = useState(nochoiceImage);
  const [showButtons, setShowButtons] = useState(true);

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

  const nextSeatHandler=()=>{
    console.log('다음페이지로')
  }

  return (
    <div className="train-inquiry-container">
      <div className="image-container">
        <div className="title">열차 조회</div>
        <div>
          {image}
          {showButtons && (
            <button onClick={handleImageClick} className="image-button"></button>
          )}
          {image === choiceImage && (
            <Link to="/checked_page">
              <button onClick={nextSeatHandler} className="seat-button"></button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckPage;
