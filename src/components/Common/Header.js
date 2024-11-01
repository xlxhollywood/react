import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Common.css'; // 공통 스타일 파일
import '../Pages/FilterBar.css';
import { BsPerson } from "react-icons/bs";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 드롭다운 토글 핸들러
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
      <div className="dropdown">
        {/* 햄버거 메뉴 버튼 */}
        <button
          className="btn dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          aria-expanded="false"
          aria-controls="navbarNavDropdown"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          onClick={handleDropdownToggle}
        >
          {/* 햄버거 아이콘 (SVG) */}
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="33" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </button>
        {/* 드롭다운 메뉴 */}
        <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
          <li>
            <Link className="dropdown-item" to="/create-match">
              매칭 글쓰기
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/review">
              리뷰 쓰기
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/rating">
              등급
            </Link>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <Link className="dropdown-item dropdown-item-danger" to="/profile">
              내 정보
            </Link>
          </li>
        </ul>
      </div>

      {/* 헤더 로고 및 제목 */}
      <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <span className="fs-4">Maze</span>
      </Link>

      {/* 검색바 */}
      <div className="filter-btn search" id="no-hover"> 
        <i className="bi bi-search"></i> 
        <input type="text" id="textform" placeholder="테마명, 지역, 팀으로 찾기" />
      </div>  

      {/* 사용자 아이콘 */}
      <Link to="/login" id="my-icon" style={{ cursor: 'pointer', textDecoration: 'none' }}>
        <BsPerson size={25} color="#707070" />
      </Link>
    </header>
  );
};

export default Header;
