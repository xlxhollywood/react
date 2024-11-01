import React from 'react';
import './ScheduleTable.css'; // 테이블 스타일링 파일

const ScheduleTable = () => {
  return (
    <div class="table-responsive small" id="table">
    <table class="table  table-sm">
      <thead>
        <tr>
          <th scope="col">시간</th>
          <th scope="col">테마 이름</th>
          <th scope="col">위치</th>
          <th scope="col">지점명</th>
          <th scope="col">난이도</th>
          <th scope="col">인원</th>
          <th scope="col">소요시간</th>
          <th scope="col">가능 여부</th>
        </tr>
      </thead>
      <tbody>
        <tr class="clickable">
          <td>16:00</td>
          <td>대호시장 살인사건</td>
          <td>서울시 강남구</td>
          <td>비트 포비아</td>
          <td>⭐️⭐️⭐️</td>
          <td>👤👤👤</td>
          <td>60분</td>
          <td><button class="btn btn-primary d-inline-flex align-items-center" type="button">
            신청하기
          </button></td>
        </tr>
        <tr>
          <td>16:15</td>
          <td>마음을 그려드립니다</td>
          <td>서울시 강남구</td>
          <td>비트 포비아</td>
          <td>⭐️⭐️⭐️⭐️</td>
          <td>👤👤👤</td>
          <td>60분</td>
          <td><button class="btn btn-primary d-inline-flex align-items-center" type="button">
            신청하기
          </button></td>
        </tr>
        <tr>
          <td>16:15</td>
          <td>강남 목욕탕</td>
          <td>서울시 강남구</td>
          <td>비트 포비아</td>
          <td>⭐️⭐️</td>
          <td>👤👤</td>
          <td>65분</td>
          <td><button class="btn btn-primary d-inline-flex align-items-center red" type="button">
            마감 임박
          </button></td>
        </tr>
        <tr>
          <td>17:00</td>
          <td>라스트 코어</td>
          <td>서울시 마포구</td>
          <td>지구별 방탈출</td>
          <td>⭐️⭐️⭐️⭐️</td>
          <td>👤👤👤👤</td>
          <td>90분</td>
          <td><button class="btn btn-primary d-inline-flex align-items-center" type="button">
            신청하기
          </button></td>
          
        </tr>
        <tr>
          <td>17:00</td>
          <td>아몬 : 새벽을 여는 소년</td>
          <td>서울시 마포구</td>
          <td>지구별 방탈출</td>
          <td>⭐️⭐️⭐️⭐️</td>
          <td>👤👤</td>
          <td>70분</td>
          <td><button class="btn btn-primary d-inline-flex align-items-center" type="button">
            신청하기
          </button></td>
        </tr>
        <tr>
          <td>18:00</td>
          <td>퀘스트 : 여정의 시작</td>
          <td>서울시 마포구</td>
          <td>지구별 방탈출</td>
          <td>⭐️⭐️⭐️</td>
          <td>❌</td>
          <td>50분</td>
          <td><button class="btn btn-primary d-inline-flex align-items-center gray" type="button">
          <span className="spaced-text">마</span>
          <span className="spaced-text">감</span>
          </button></td>
        </tr>
        <tr>
          <td>18:15</td>
          <td>냥이점집</td>
          <td>서울시 광진구</td>
          <td>룸 익스케이프</td>
          <td>⭐️</td>
          <td>👤👤👤</td>
          <td>60분</td>
          <td><button class="btn btn-primary d-inline-flex align-items-center" type="button">
            신청하기
          </button></td>
        </tr>
        <tr>
          <td>19:00</td>
          <td>어느 구두쇠의 전시회장</td>
          <td>서울시 광진구</td>
          <td>룸 익스케이프</td>
          <td>⭐️⭐️⭐️</td>
          <td>❌</td>
          <td>60분</td>
          <td><button class="btn btn-primary d-inline-flex align-items-center gray" type="button">
          <span className="spaced-text">마</span>
          <span className="spaced-text">감</span>
          </button></td>
        </tr>
        <tr>
          <td>19:30</td>
          <td>트레져쉽: 신화 속의 존재</td>
          <td>서울시 광진구</td>
          <td>룸 익스케이프</td>
          <td>⭐️⭐️⭐️⭐️</td>
          <td>👤</td>
          <td>60분</td>
          <td><button class="btn btn-primary d-inline-flex align-items-center red" type="button">
            마감 임박
          </button></td>
        </tr>
       
      
     
      </tbody>
    </table>
  </div>
  );
};

export default ScheduleTable;
