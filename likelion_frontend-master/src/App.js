import "./App.css";
import { Route, Routes } from "react-router-dom";
import Tutorial from "./components/MainPage/Tutorial";
import TutorialLevel from "./components/MainPage/TutorialLevel";
import ReserveMain from "./components/ReservePage/ReserveMain";
import TogetherMain from "./components/TogetherPage/TogetherMain";
import Notice from "./components/Notice/Notice";
import CheckPage from "./components/CheckSeat/CheckPage";
import Checked from "./components/CheckSeat/Checked";
import TogetherCheck from "./components/CheckSeat/TogetherCheck";
import First from "./components/CheckSeat/First";
import FinalCheck from "./components/CheckSeat/FinalCheck";
import Credit from "./components/Credit/Credit";
import Card from "./components/Credit/Card";
import Bill from "./components/Credit/Bill";


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Tutorial />} />
        <Route path="/tutorial_level" element={<TutorialLevel />} />
        <Route path="/reserve_main" element={<ReserveMain />} />
        <Route path="/together_main" element={<TogetherMain />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/check_seat_page" element={<CheckPage />} />
        {/*위 주소는 열차 조회하기 눌렀을때 넘어가는 주소*/}
        <Route path="/checked_page" element={<Checked/>}/>
        <Route path="/together_check" element={<TogetherCheck/>}/>
        <Route path="/first" element={<First/>}/>
        <Route path="/alert" element={<FinalCheck/>}/>
        <Route path="/credit" element={<Credit/>}/>
        <Route path="/card" element={<Card/>}/>
        <Route path="/bill" element={<Bill/>}/>
      </Routes>
    </div>
  );
};

export default App;
