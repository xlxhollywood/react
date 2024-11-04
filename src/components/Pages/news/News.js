import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './News.css'; // 스타일 파일 import
import news1 from '../../../assets/images/news1.png';
import { MdModeEdit } from "react-icons/md"; // 수정 아이콘
import { FaRegTrashAlt } from "react-icons/fa"; // 삭제 아이콘

const News = () => {
  const [newsList, setNewsList] = useState([]); // 뉴스 목록을 저장할 상태
  const [newNews, setNewNews] = useState({ title: '', content: '', imageUrl: '' });
  const [imagePreview, setImagePreview] = useState(null); // 이미지 미리 보기 상태
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  // 뉴스 목록 가져오기
  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/notice');
      console.log('응답 데이터:', response.data); // 응답 데이터를 콘솔에 출력해 확인
      setNewsList(response.data.notices || []); // notices 속성에서 뉴스 목록 가져오기
    } catch (error) {
      console.error('뉴스 목록 가져오기 실패:', error);
      setNewsList([]); // 오류 시 빈 배열 설정
    }
  };

  // 입력 변경 처리
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewNews({ ...newNews, [name]: value });
  };

  // 이미지 파일 선택 처리
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result); // 이미지 미리 보기 설정
        setNewNews({ ...newNews, imageUrl: reader.result }); // 이미지 URL 설정
      };
      reader.readAsDataURL(file);
    }
  };

  // 뉴스 추가
  const handleAdd = async () => {
    if (newNews.title && newNews.content) {
      try {
        await axios.post('http://localhost:8080/api/notice', newNews);
        fetchNews(); // 새로고침하여 업데이트된 뉴스 목록 가져오기
        setNewNews({ title: '', content: '', imageUrl: '' });
        setImagePreview(null); // 이미지 미리 보기 초기화
        setIsModalOpen(false);
      } catch (error) {
        console.error('뉴스 추가 실패:', error);
      }
    }
  };

  // 뉴스 수정 준비
  const handleEdit = (id) => {
    const newsToEdit = newsList.find((news) => news.id === id);
    if (!newsToEdit) return;
    setNewNews({ title: newsToEdit.title, content: newsToEdit.content, imageUrl: newsToEdit.imageUrl || '' });
    setImagePreview(newsToEdit.imageUrl || null); // 이미지 미리 보기 설정
    setCurrentId(id);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  // 뉴스 수정 완료
  const handleUpdate = async () => {
    if (!currentId || !newNews.title || !newNews.content) return;
    try {
      await axios.patch(`http://localhost:8080/api/${currentId}`, newNews);
      fetchNews();
      setNewNews({ title: '', content: '', imageUrl: '' });
      setImagePreview(null); // 이미지 미리 보기 초기화
      setIsModalOpen(false);
      setIsEditing(false);
      setCurrentId(null);
    } catch (error) {
      console.error('뉴스 수정 실패:', error);
    }
  };

  // 뉴스 삭제
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/${id}`);
      fetchNews();
    } catch (error) {
      console.error('뉴스 삭제 실패:', error);
    }
  };

  // 모달 열기 및 닫기 핸들러
  const openModal = () => {
    setNewNews({ title: '', content: '', imageUrl: '' });
    setImagePreview(null); // 이미지 미리 보기 초기화
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setNewNews({ title: '', content: '', imageUrl: '' });
    setImagePreview(null); // 이미지 미리 보기 초기화
    setIsModalOpen(false);
    setIsEditing(false);
  };

  return (
    <div id="news-container">
      {/* 뉴스 목록 출력 */}
      {newsList.length > 0 ? (
        newsList.map((news) => (
          <div key={news.id} className="news-container-block">
            <div className="news-actions">
              <MdModeEdit
                onClick={() => handleEdit(news.id)}
                style={{ cursor: 'pointer', fontSize: '12px' }}
              />
              <FaRegTrashAlt
                onClick={() => handleDelete(news.id)}
                style={{ cursor: 'pointer', fontSize: '12px' }}
              />
            </div>
            <div className="news-block">
              <div className="news-content">
                <h2>{news.title}</h2>
                <p>{news.content}</p>
              </div>
              <div className="news-img-block">
                <img className="news-img" src={news.imageUrl || news1} alt="news-img" />
              </div>
            </div>
            <hr />
          </div>
        ))
      ) : (
        <p>뉴스가 없습니다.</p>
      )}

      {/* 글쓰기 버튼 */}
      <div className='content-right'>
        <button onClick={openModal} className="open-modal-btn">글쓰기</button>
      </div>
      {/* 모달 */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{isEditing ? '뉴스 수정' : '새 뉴스 작성'}</h3>
            <input
              type="text"
              name="title"
              placeholder="뉴스 제목"
              value={newNews.title}
              onChange={handleChange}
            />
            <textarea
              name="content"
              placeholder="뉴스 내용"
              value={newNews.content}
              onChange={handleChange}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {imagePreview && <img src={imagePreview} alt="미리 보기" className="image-preview" />}
            {isEditing ? (
              <button onClick={handleUpdate}>수정 완료</button>
            ) : (
              <button onClick={handleAdd}>뉴스 추가</button>
            )}
            <button onClick={closeModal} className="close-modal-btn">닫기</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
