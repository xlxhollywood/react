// src/components/Card.js
import React from 'react';
import './Card.css'; // 스타일 파일 생성

const Card = ({ title, description, price, company }) => {
  return (
    <div className="card-container">
      <div className="card-title">{title}</div>
      <div className="card-description">{description}</div>
      <div className="card-price">{price}</div>
      <div className="card-company">{company}</div>
    </div>
  );
};

export default Card;
