// src/components/Pages/DateSelector.js
import React from 'react';
import './DateSelector.css'; // 필요한 CSS 파일이 있다면 임포트

const DateSelector = () => {
  return (
    <div className="date-selector">
      {/* 이전 화살표 */}
      <div className="arrow">‹</div>

      {/* 날짜들 */}
      <div className="date">
        <div className="selected">
          <div>
            <div>10</div>
            <div className="day-text">&nbsp;화</div>
          </div>
        </div>
      </div>

      <div className="date">
        <div className="weekday">11</div>
        <div className="day-text">수</div>
      </div>

      <div className="date">
        <div className="weekday">12</div>
        <div className="day-text">목</div>
      </div>

      <div className="date">
        <div className="weekday">13</div>
        <div className="day-text">금</div>
      </div>

      <div className="date">
        <div className="saturday">14</div>
        <div className="day-text">토</div>
      </div>

      <div className="date">
        <div className="weekend">15</div>
        <div className="day-text">일</div>
      </div>

      <div className="date">
        <div className="weekday">16</div>
        <div className="day-text">월</div>
      </div>

      {/* 다음 화살표 */}
      <div className="arrow">›</div>
    </div>
  );
};

export default DateSelector;
