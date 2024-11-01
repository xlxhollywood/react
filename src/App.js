import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './styles/global.css';  // 전역 스타일 임포트
import Header from "./components/Common/Header";
import SocialMatch from "./components/Pages/SocialMatch";
import QuickReservation from "./components/Pages/quickreservation/QuickReservation";
import News from "./components/Pages/news/News";
import Notice from "./components/Pages/Notice";
import Login from './components/Pages/Login'; // 로그인 페이지 컴포넌트 불러오기
import FAQ from "./components/Pages/FAQ";

function App() {
  // 현재 위치를 가져오는 useLocation 훅 사용
  const location = useLocation();

  return (
    <div className="App">
      {/* 소셜 매치 페이지에서만 백그라운드 div를 렌더링 */}
      {location.pathname === '/' && (
        <div className="background-div"></div>
      )}

      {/* 헤더는 모든 페이지에서 공통으로 사용 */}
      <header className="container">
        <Header />
      </header>

      {/* 각 페이지의 내용은 Routes로 관리 */}
      <div className="container">
        <Routes>
          <Route path="/" element={<SocialMatch />} />
          <Route path="/quick-reservation" element={<QuickReservation />} />
          <Route path="/news" element={<News />} />
          <Route path="/notice" element={<Notice />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
