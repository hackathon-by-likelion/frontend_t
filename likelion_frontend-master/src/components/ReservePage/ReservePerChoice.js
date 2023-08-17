import React, { useState } from "react";
import "./ReservePerChoice.css"; // 분리된 CSS 파일을 가져오기

const PracticePage = ({onSelectPerson}) => {
  const [quantities, setQuantities] = useState({
    adult: 1,
    child: 0,
    infant: 0,
    route: 0,
    severeDisability: 0,
    mildDisability: 0,
  });

  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleIncrement = (category) => {
    if (expanded && totalPeople < 9 && quantities[category] < 9) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [category]: prevQuantities[category] + 1,
      }));
    }
  };

  const handleDecrement = (category) => {
    if (expanded && quantities[category] > 0) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [category]: prevQuantities[category] - 1,
      }));
    }
  };

  const handleConfirm = () => {
    // 선택된 값 계산 로직을 여기에 작성합니다
    const selectedPerson = `총 ${totalPeople}명`; // 여기에 실제 로직을 적용하세요
    onSelectPerson(selectedPerson); // 선택된 값을 부모 컴포넌트로 전달합니다
  };


  const totalPeople = Object.values(quantities).reduce(
    (total, quantity) => total + quantity,
    0
  );

  return (
    <div className="practice-page">
      <div className="content-wrapper">
        <div className="top-info">
          <div>총 {totalPeople}명<br /></div>
          <button className="expand-button" onClick={handleToggle}>
            {expanded ? "▲" : "▼"}
          </button>
        </div>
        <div className={expanded ? "expanded-content expanded" : "expanded-content"}>
          <div className="quantity-control">
            {Object.keys(quantities).map((category) => (
              <div className="category-wrapper" key={category}>
                <span className="category-name">
                  {category === "adult" && "어른(만 13세 이상)"}
                  {category === "child" && "어린이(만 6-12세)"}
                  {category === "infant" && "유아(만 6세 미만)"}
                  {category === "route" && "경로(만 65세 이상)"}
                  {category === "severeDisability" && "중증 장애인"}
                  {category === "mildDisability" && "경증 장애인"}
                </span>
                <div className="quantity-buttons">
                  <button
                    className="quantity-button"
                    onClick={() => handleDecrement(category)}
                    disabled={!expanded || quantities[category] <= 0}
                  >
                    -
                  </button>
                  <span className="quantity-text">{quantities[category]}</span>
                  <button
                    className="quantity-button"
                    onClick={() => handleIncrement(category)}
                    disabled={!expanded || totalPeople >= 9 || quantities[category] >= 9}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="select" onClick={handleConfirm}>좌석선택</button>
      </div>
    </div>
  );
};

export default PracticePage;
