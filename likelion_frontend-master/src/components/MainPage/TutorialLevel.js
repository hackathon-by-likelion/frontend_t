import "./TutorialLevel.css";
import { Link } from "react-router-dom";

const TutorialLevel = () => {
  const handleAlone = () => {
    console.log("혼자해보기 클릭");
  };
  const handleTogether = () => {
    console.log("같이 해보기 클릭");
  };
  const handleBack = () => {
    console.log("돌아가기 키 클릭");
  };
  return (
    <div className="level_frame">
      <img
        src={process.env.PUBLIC_URL + "/picture1.jpg"}
        width="415px"
        height="150px"
      />
      <div className="level_title">
        <h1>단계 선택</h1>
      </div>
      <div className="button_alone">
        <Link to="/reserve_main">
          <button onClick={handleAlone}>혼자 해보기</button>
        </Link>
      </div>
      <div className="button_together">
        <Link to="/notice">
          <button onClick={handleTogether}>같이 해보기</button>
        </Link>
      </div>
      <div className="back">
        <Link to="/">
          <button onClick={handleBack}> 돌아가기 </button>
        </Link>
      </div>
    </div>
  );
};

export default TutorialLevel;
