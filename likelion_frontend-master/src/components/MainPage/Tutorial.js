import { useState } from "react";
import "./Tutorial.css";
import { Link } from "react-router-dom";

const Tutorial = (props) => {
  const [movement, setMovement] = useState(false);

  const handleWhatIs = () => {
    setMovement(true);
    console.log("코레일 톡이란? 버튼이 클릭되었습니다.");
  };
  const handlePracticeClick = () => {
    setMovement(false);
    console.log("연습해보기 버튼이 클릭되었습니다.");
  };


  return (
    <div className="main_frame">
      <img
        src={process.env.PUBLIC_URL + "/picture1.jpg"}
        width="415px"
        height="150px"
      />
      <div className="tutorial_title">
        <p>키오스크 격차 해소</p>
      </div>
      <div className="sub_title">
        <h2>
          키오스크
          <br></br>학습 어플리케이션
        </h2>
      </div>
      <div className="first_button">
        <button onClick={handleWhatIs}>코레일 톡이란?</button>
      </div>
      <div className="practice_button">
        <Link to="/tutorial_level">
          <button onClick={handlePracticeClick}>연습해보기</button>
        </Link>
      </div>
    </div>
  );
};

export default Tutorial;
