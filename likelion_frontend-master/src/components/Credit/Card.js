import React, { useState, useEffect } from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card() {
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
  const [expiryMonth, setExpiryMonth] = useState("");
  const [expiryYear, setExpiryYear] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [installment, setInstallment] = useState("일시불");
  const [isFrequentCard, setIsFrequentCard] = useState(false);
  const [agreementBox, setAgreementBox] = useState(false);

  useEffect(() => {
    const isCardNumberValid = cardNumber.join("") === "1234567812345678";
    const isExpiryValid = expiryMonth === "99" && expiryYear === "99";
    const isPasswordValid = password === "00";
    const isVerificationCodeValid = verificationCode === "999999";

    setIsFormValid(
      isCardNumberValid &&
        isExpiryValid &&
        isPasswordValid &&
        isVerificationCodeValid &&
        agreementBox // Use agreementBox directly in the condition
    );
  }, [
    cardNumber,
    expiryMonth,
    expiryYear,
    password,
    verificationCode,
    agreementBox,
  ]);

  return (
    <div className="card_main">
      <div className="c_menubar">
        <div className="c_pay">결제</div>
        <div className="c_close">✕</div>
      </div>

      <div className="c_content">
        <div className="c_first">
          <span className="c_first_1">카드결제</span> <span>간편결제</span>
        </div>

        <div className="c_separators">
          <div className="c_separator purple"></div>
          <div className="c_separator"></div>
        </div>

        <div className="c_second">
          <div className="c_ride_price">
            <span className="c_left">승차권</span>{" "}
            <span className="c_right">6,300원</span>
          </div>
          <div className="c_discount_price">
            <span className="c_left">할인 적용 전</span>
            <span className="c_right">6,300원 (총 0원 할인)</span>
          </div>
        </div>

        <div className="c_third">
          <div>포인트 사용</div>
          <div>KTX 마일리지</div>
          <div className="c_down">﹀</div>
        </div>

        <div className="c_fourth">
          <div>신용(체크) 카드 결제</div>
          <div className="c_down">﹀</div>
        </div>

        <div className="c_retry">↺ 다시 입력</div>

        <div className="c_card_number_input">
          <label>카드번호</label>
          <div className="c_card_number_container">
            {cardNumber.map((number, index) => (
              <input
                key={index}
                type="text"
                maxLength="4"
                value={number}
                onChange={(e) =>
                  setCardNumber([
                    ...cardNumber.slice(0, index),
                    e.target.value,
                    ...cardNumber.slice(index + 1),
                  ])
                }
              />
            ))}
          </div>
        </div>

        <div className="c_expiry_input">
          <label>유효기간</label>
          <div className="c_expiry_container">
            <input
              type="text"
              maxLength="2"
              value={expiryMonth}
              onChange={(e) => setExpiryMonth(e.target.value)}
            />
            <span>월</span>
            <input
              type="text"
              maxLength="2"
              value={expiryYear}
              onChange={(e) => setExpiryYear(e.target.value)}
            />
            <span>년</span>
          </div>
        </div>

        <div className="c_password_input">
          <label>비밀번호</label>
          <div className="c_password_container">
            <input
              type="c_password"
              maxLength="2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>**</span>
          </div>
        </div>

        <div className="c_verification_input">
          <label>인증번호</label>
          <div className="c_verification_container">
            <input
              type="text"
              maxLength="6"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />{" "}
            <span>주민번호 앞 6자리</span>
          </div>
        </div>

        <div className="c_installment_input">
          <label>할부기간</label>
          <div className="c_installment_container">
            <select
              value={installment}
              onChange={(e) => setInstallment(e.target.value)}
            >
              <option value="일시불">일시불</option>
              <option value="2개월">2개월</option>
              <option value="3개월">3개월</option>
            </select>
          </div>
        </div>

        <div className="c_frequent_card_input">
          <label>자주쓰는 카드</label>
          <div className="c_frequent_card_container">
            <input
              type="checkbox"
              checked={isFrequentCard}
              onChange={(e) => setIsFrequentCard(e.target.checked)}
            />
            <span>이 카드를 자주쓰는 카드로 등록하기</span>
          </div>
        </div>

        <div className="c_memo">
          해당 항목을 체크하시면 발권 완료 후 바로 자주쓰는 카드등록 화면으로
          이동합니다.
        </div>

        <div className="c_agreement_input">
          <input
            type="checkbox"
            checked={agreementBox}
            onChange={(e) => setAgreementBox(e.target.checked)}
          />
          <span>개인정보 수집 및 이용 동의</span>
        </div>

        <div className="c_amount">
          <div className="c_total">총 1개</div>
          <div className="c_price">6,300원</div>
        </div>

        <div className="c_button-container">
          <Link to="/bill">
            <button
              className={`button ${isFormValid ? "active" : ""}`}
              disabled={!isFormValid}
              style={{
                backgroundColor: isFormValid ? "blue" : "gray",
                padding: "20px 30px",
                color: "white",
                fontSize: "30px"
              }}
            >
              결제/발권
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
