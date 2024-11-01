// src/components/RegionFilter.js
import React, { useState } from 'react';
import './RegionFilter.css'; // 스타일 파일


const RegionFilter = () => {
  // 선택된 주요 지역 상태 관리
  const [selectedRegion, setSelectedRegion] = useState(null);

  // 각 지역에 대한 하위 구 목록 정의
  const regionData = {
    서울: ['강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'],
    '경기/인천': ['수원시', '성남시', '의정부시', '안양시', '부천시', '광명시', '평택시', '동두천시', '안산시', '고양시', '과천시', '구리시', '남양주시', '오산시', '시흥시', '군포시', '의왕시', '하남시', '용인시', '파주시', '이천시', '안성시', '김포시', '화성시', '광주시', '양주시', '포천시', '여주시'],
    충청: ['청주시', '천안시', '공주시', '보령시', '아산시', '서산시', '논산시', '계룡시', '당진시', '제천시', '단양군', '음성군', '옥천군', '영동군'],
    경상: ['부산광역시', '대구광역시', '울산광역시', '창원시', '김해시', '양산시', '진주시', '통영시', '거제시'],
    전라: ['전주시', '군산시', '익산시', '정읍시', '남원시', '광양시', '순천시', '여수시'],
    강원: ['춘천시', '원주시', '강릉시', '동해시', '태백시', '속초시', '삼척시'],
    제주: ['제주시', '서귀포시'],
  };

  // 지역 클릭 시 하위 구 목록을 보여주도록 상태 업데이트
  const handleRegionClick = (region) => {
    setSelectedRegion(selectedRegion === region ? null : region); // 이미 선택된 지역을 클릭하면 닫기
  };

  return (
    <div className="region-filter-container">
      <h2 className="region-filter-title">지역 선택</h2>
      <ul className="region-list">
        {/* 주요 지역 목록 */}
        {Object.keys(regionData).map((region) => (
          <li
            key={region}
            onClick={() => handleRegionClick(region)}
            className={selectedRegion === region ? 'active' : ''} // 선택된 주요 지역에만 active 클래스 적용
          >
            {region}
            {/* 선택된 지역의 하위 구 목록을 보여줌 */}
            {selectedRegion === region && (
              <ul className="sub-region-list">
                {regionData[region].map((subRegion) => (
                  <li key={subRegion}>{subRegion}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      </div>
  );
};

export default RegionFilter;
