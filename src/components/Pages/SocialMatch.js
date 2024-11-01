import React, { useEffect } from 'react';
import './NavBar.css'; // 스타일 파일 import
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS 가져오기
import '../SocialMatch.css'; // 카로셀 관련 CSS 가져오기
import carousel1 from '../../assets/images/carousel1.png';
import carousel2 from '../../assets/images/carousel2.png';
import carousel3 from '../../assets/images/carousel3.png';
import lock from '../../assets/images/lock.png';
import medal from '../../assets/images/medal.png';
import news from '../../assets/images/news.png';
import review from '../../assets/images/review.png';
import people from '../../assets/images/people.png';
import FilterBar from './FilterBar'; // 필터 컴포넌트 불러오기
import DateSelector from './DateSelector';
import ScheduleTable from './ScheduleTable'; // 테이블 컴포넌트 불러오기
import { Link } from 'react-router-dom';

// Bootstrap JavaScript 가져오기
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const SocialMatch = () => {
  useEffect(() => {
    // Bootstrap의 JavaScript 활성화를 위한 추가 설정 (필요할 경우)
    // const bootstrap = require('bootstrap');
  }, []);

  return (
    <div id="carousel_container" className="container">
    <div className="crew">
        <div className="inner-crew">소셜 매칭</div> 
        <div className="inner=crew" id="invite">초대</div> 
    </div>
    <div className="nav">
      <div className="nav-item">
        <Link to="/quick-reservation" className="nav-link">
          <img src={lock} alt="빠른 예약" className="nav-icon" />
          <div className="nav-text">빠른 예약</div>
        </Link>
      </div>
      <div className="nav-item">
        <img src={people} alt="소셜 매치" className="nav-icon" />
        <div className="nav-text">크루</div>
      </div>      
      <div className="nav-item">
        <Link to="/news" className="nav-link">
          <img src={news} alt="뉴스" className="nav-icon" />
          <div className="nav-text">뉴스</div>
        </Link>
      </div>
      <div className="nav-item">
        <img src={medal} alt="티어" className="nav-icon" />
        <div className="nav-text">티어</div>
      </div>
      <div className="nav-item">
        <img src={review} alt="티어" className="nav-icon" />
        <div className="nav-text">리뷰</div>
      </div>
    </div>
      <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
        {/* 슬라이드 인디케이터 */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" aria-label="Slide 1" className="active"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        {/* 슬라이드 내용 */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={carousel1} className="d-block w-100" alt="First slide" />
            <div className="container">
              <div className="carousel-caption text-start">
                {/* 슬라이드 텍스트가 필요하다면 여기에 작성 */}
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousel2} className="d-block w-100" alt="Second slide" />
            <div className="container">
              <div className="carousel-caption">
                {/* 슬라이드 텍스트가 필요하다면 여기에 작성 */}
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={carousel3} className="d-block w-100" alt="Third slide" />
            <div className="container">
              <div className="carousel-caption text-end">
                {/* 슬라이드 텍스트가 필요하다면 여기에 작성 */}
              </div>
            </div>
          </div>
        </div>
        {/* 이전/다음 버튼 */}
        <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <DateSelector />
      <FilterBar />
      <ScheduleTable />

    </div>

    
  );
};

export default SocialMatch;
