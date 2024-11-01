import React from 'react';
import top1 from '../../../assets/images/top1.png';
import top2 from '../../../assets/images/top2.png';
import top3 from '../../../assets/images/top3.png';
import top4 from '../../../assets/images/top4.png';
import top5 from '../../../assets/images/top5.png';
import review1 from '../../../assets/images/review1.png';
import review2 from '../../../assets/images/review2.png';
import review3 from '../../../assets/images/review3.png';
import review4 from '../../../assets/images/review4.png';
import review5 from '../../../assets/images/review5.png';
import review6 from '../../../assets/images/review6.png';
import review7 from '../../../assets/images/review7.png';
import review8 from '../../../assets/images/review8.png';
import review9 from '../../../assets/images/review9.png';
import './QuickReservation.css'; // 스타일 파일 import
import RegionFilter from './RegionFilter';
import FilterBar from '../../Pages/FilterBar.js'


const QuickReservation = () => {
  return (
    
    <div className="quick-reservation-container">
      {/* 경로 및 제목 */}
      <div className="notice">⭐️ &nbsp;방탈출 예약과 후기를 한 번에 ! 생생한 경험과 후기를 남겨주세요.</div>
      {/* 메인 제목 */}
      

      {/* 인기 카테고리 섹션 */}
      <section className="quick-reservation-section">
        <div className="quick-reservation-header" >
          <h2 className="quick-reservation-subtitle">이 달의 테마 Top5</h2>
          <img
            alt="HOT 아이콘"
            height="20"
            src="https://static.cdn.kmong.com/assets/desktop/modules/main-themes/HOT-icon@3x.png"
            width="38"
          />
        </div>
        <div class="grid-container-rank">
          <div><img src={top1} alt="Top rank" style={{ width: '170px', height: '220px' }} /> 
            <div className="rank-contents">
              <p className="rank-cafe">키이스케이프</p>
              <p className="rank-title">머니머니패키지</p>
            </div>
          </div>
          <div><img src={top2} alt="Top rank" style={{ width: '170px', height: '220px' }} />
            <div className="rank-contents">
              <p className="rank-cafe">비트 포비아</p>
              <p className="rank-title">For Free</p>
            </div> 
          </div>
          <div><img src={top3} alt="Top rank" style={{ width: '170px', height: '220px' }} />
            <div className="rank-contents">
              <p className="rank-cafe">단편선</p>
              <p className="rank-title">머니머니부동산</p>
            </div> 
          </div>
          <div><img src={top4} alt="Top rank" style={{ width: '170px', height: '220px' }} />
            <div className="rank-contents">
              <p className="rank-cafe">키이스케이프</p>
              <p className="rank-title">내 방</p>
            </div> 
          </div>
          <div><img src={top5} alt="Top rank" style={{ width: '170px', height: '220px' }} />
            <div className="rank-contents">
              <p className="rank-cafe">지구별 방탈출</p>
              <p className="rank-title">NOSTALGIA VISTA</p>
            </div> 
          </div>
        </div>
      </section>  

      <div className='flex'>  
        <div className="non-flex">
          <FilterBar />
          <div className='grid-container'>            
              <div className='grid-item'>
                <img className="grid-review" src={review1} alt="Top rank" style={{ width: '220px', height: '220px' }} />         
                <p className="review-address">홍대 엑스케이프 </p>
                <p className="review-title">더 다이스룸</p>
                <span className="review-star">⭐️3.5</span> <span className="review-count">(15)</span>
                <div className="review-price">25,000 원</div>
              </div>
              <div className='grid-item'>
                <img className="grid-review" src={review2} alt="Top rank" style={{ width: '220px', height: '220px' }} />         
                <p className="review-address">홍대 지구별 방탈출 </p>
                <p className="review-title">멸종위기 탐사대</p>
                <span className="review-star">⭐️4.2</span> <span className="review-count">(15)</span>
                <div className="review-price">32,000 원</div>
              </div>
              <div className='grid-item'>
                <img className="grid-review" src={review3} alt="Top rank" style={{ width: '220px', height: '220px' }} />         
                <p className="review-address">키이스케이프 로그인2 </p>
                <p className="review-title">Back To The Scene</p>
                <span className="review-star">⭐️4.6</span> <span className="review-count">(15)</span>
                <div className="review-price">35,000 원</div>
              </div>
              <div className='grid-item'>
                <img className="grid-review" src={review4} alt="Top rank" style={{ width: '220px', height: '220px' }} />         
                <p className="review-address">포인트나인 강남 1호점 </p>
                <p className="review-title">EP3: 눈 먼 귀금속상인의 후회</p>
                <span className="review-star">⭐️4.7</span> <span className="review-count">(15)</span>
                <div className="review-price">33,000 원</div>
              </div>
              <div className='grid-item'>
                <img className="grid-review" src={review5} alt="Top rank" style={{ width: '220px', height: '220px' }} />         
                <p className="review-address">강남 이룸메이트 </p>
                <p className="review-title">고령화사회</p>
                <span className="review-star">⭐️3.9</span> <span className="review-count">(15)</span>
                <div className="review-price">28,000 원</div>
              </div>
              <div className='grid-item'>
                <img className="grid-review" src={review6} alt="Top rank" style={{ width: '220px', height: '220px' }} />         
                <p className="review-address">룸즈에이 </p>
                <p className="review-title">낭랑카페</p>
                <span className="review-star">⭐️3.5</span> <span className="review-count">(15)</span>
                <div className="review-price">28,000 원</div>
              </div>
              <div className='grid-item'>
                <img className="grid-review" src={review7} alt="Top rank" style={{ width: '220px', height: '220px' }} />         
                <p className="review-address">룸즈에이 </p>
                <p className="review-title">킹스맨 : 시크릿 에이전트</p>
                <span className="review-star">⭐️2.8</span> <span className="review-count">(15)</span>
                <div className="review-price">28,000 원</div>
              </div>
              <div className='grid-item'>
                <img className="grid-review" src={review8} alt="Top rank" style={{ width: '220px', height: '220px' }} />         
                <p className="review-address">단편선 </p>
                <p className="review-title">그림자 없는 상자</p>
                <span className="review-star">⭐️4.8</span> <span className="review-count">(15)</span>
                <div className="review-price">30,000 원</div>
              </div>
              <div className='grid-item'>
                <img className="grid-review" src={review9} alt="Top rank" style={{ width: '220px', height: '220px' }} />         
                <p className="review-address">비트포비아 던전101 </p>
                <p className="review-title">전래동 자살사건</p>
                <span className="review-star">⭐️4.8</span> <span className="review-count">(15)</span>
                <div className="review-price">32,000 원</div>
              </div>
          </div>
        </div>
        <RegionFilter />  
      </div>    
    </div>
  );
};

export default QuickReservation;
