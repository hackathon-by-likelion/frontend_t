import React from 'react';
import './Bill.css';


function Bill() {
 
  return (
    <div className="b_bill">

      <div className="b_menubar">
        <div className="b_check">승차권 확인</div>
        <div className="b_close">✕</div>
      </div>
      
      <div className="b_section">
         <span className="b_section_1">승차권 (1)</span>
         <span>정기권 패스</span>
      </div>

      <div className="b_sticks">
       <div className="b_stick impact"></div>
       <div className="b_stick"></div>
      </div>

      <div className="b_location">
          <div className="b_location_1">
            <span>서울</span> <span className="b_direction">➝</span> <span>천안</span>
          </div>
          <div className="b_location_2">
            <span className="b_time1">05:53</span><span className='time2'>07:04</span>
          </div>
      </div>

        <div className="b_train_info">
            <span className="b_train">무궁화호 1215</span> <button className='tt'>열차시각</button>
        </div>
              
        <div className="b_table-container">
          <table className="b_custom-table">
            <tbody>
              <tr className='b_custom_1'>
                <td>타는곳번호</td>
                <td>호차번호</td>
                <td>좌석번호</td>
                <td>운임영수증</td>
              </tr>
              <tr>
                <td className='b_sel1'>↺<br></br>15분전에<br></br>표시됩니다</td> 
                <td className='b_sel2'>2호차</td>
                <td className='b_sel3'>9</td>
                <td className='b_image-container1'><img src={process.env.PUBLIC_URL + "/qrcode.jpg"} alt="Notice" className="qr-image" /></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="b_image-container2">
            <img src={process.env.PUBLIC_URL + "/bill.jpg"} alt="notice" className="picture-image" />
        </div>
               
         <div className="b_date">
            <div className="b_final">2023-08-19</div>
         </div>
          
        <div className="b_button-container">
          <button className="b_button">전달하기</button> 
          <button className='b_button'>반환하기</button>
          <button className='b_button'>여행변경</button>     
        </div>
      
   </div>
  );
}

export default Bill;