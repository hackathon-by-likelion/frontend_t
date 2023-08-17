import "./FinalCheck.css";
import { BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

function FinalCheck() {
  return (
    <div className="a_final_frame">
      <div className="a_menubar">
        <div className="a_back">
          <BsChevronLeft />
        </div>
        <div className="a_choose">승차권 정보 확인</div>
      </div>
      <div className="a_content">
        <div className="a_first">
          <div>2023년 8월 19일 (토)</div>
          <br></br>
          <div>
            [무궁화호 1201] 서울 05:53→천안 07:04<br></br>
            <div>일반실 3호차 9</div>
            <div className="a_impact">
              <div>
                결제기한: 19시 15분<br></br>10분 이내 미결제시 승차권이 자동으로
                취소됩니다.
              </div>
            </div>
          </div>
          <div className="a_button1-container">
            <button className="a_button1">예약취소</button>
            <button className="a_button1">장바구니</button>
          </div>
        </div>
        <div className="a_second">
          <div>
            • 결제하지 않으면 예약이 취소됩니다.<br></br>• 승차권을 발급받은
            스마트폰에서만 확인할 수 있습니다.<br></br>• 할인승차권 이용시에는
            관련 신분증 또는 증명서를 소지하셔야 합니다.
          </div>
        </div>
        <div className="a_third">
          <div>꼭 알아두세요!</div>
          <br></br>
          <div className="a_third_content">
            <div>
              • 승차권 환불(반환) 위약금 확인하기<br></br>• 휴대품 세부 승차기준
              <br></br>• 코레일톡에서 구매한 승차권은 역창구에서 변경 시 할인이
              취소 될 수 있습니다.<br></br>•할인은 운임에만 적용하고 요금은
              미적용 (특실/우등실은 운임과 요금으로 구분)되며, 최저운임 이하로
              할인하지 않습니다.<br></br>• 승차 시 해당열차 승차권을 소지해야
              하며, 사진이나 캡쳐한 화면은 유효한 승차권이 아닙니다.
              <br></br>• 반려동물은 다른 고객에게 불편을 주지 않도록
              케이스(이동장)에 반드시 넣어주시기 바라면, 신체 일부가 밖으로
              나오지 않도록 해야 합니다. <br></br> • 반려동물의 동반좌석이
              필요한 경우에는 정상운임을 내고 좌석을 지정받아 이용할 수
              있습니다.
            </div>
          </div>
        </div>
        <div className="a_button2-container">
          <button className="a_button2 ">제휴상품</button>
          <Link to="/credit">
            <button className="a_button2 ">결제하기</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FinalCheck;
