import React from 'react';
import './FilterBar.css'; // 위에서 발췌한 CSS를 이 파일에 저장

const FilterBar = () => {
  return (
    <div className="filter-container">
      <div className="filter-btn" id="location">지역 <i className="bi bi-chevron-down"></i></div>
      <div className="filter-btn">시간 <i className="bi bi-chevron-down"></i></div>
      <div className="filter-btn">난이도 <i className="bi bi-chevron-down"></i></div>
      <div className="filter-btn">활동성 <i className="bi bi-chevron-down"></i></div>
      <div className="filter-btn">공포 <i className="bi bi-chevron-down"></i></div>
      <div className="filter-btn">신청 가능</div>
      {/* <div className="filter-btn" id="no-hover"> 검색 부분 */} 
        {/* <i className="bi bi-search"></i> */}
        {/* <input type="text" id="textform" placeholder="검색어 입력" /> */}
      {/* </div>            */}
    </div>
  );
};

export default FilterBar;
