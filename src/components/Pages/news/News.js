import React, { useState } from 'react';
import './News.css'; // 스타일 파일 import
import news1 from '../../../assets/images/news1.png';
import { MdModeEdit } from "react-icons/md"; // 수정 아이콘
import { FaRegTrashAlt } from "react-icons/fa"; // 삭제 아이콘

const News = () => {
  // 뉴스 목록과 입력 상태 관리
  const [newsList, setNewsList] = useState([
    {
      id: 1,
      title: "비트포비아 101 새로운 테마 11월 오픈 ...",
      content: "비트포비아 101 홍대점에서 새로운 테마 '삐릿-뽀'가 곧 오픈된다. 이번 테마는 공포 요소가 전혀 없고, 아기자기하고 귀여운 분위기를 특징으로 한다. 남녀노소 누구나 편하게 즐길 수 있는 테마로, 특히 친구나 연인, 가족들과 함께 색다른 경험을 원하는 사람들에게 제격이다. 삐릿-뽀는 다채로운 퍼즐과 독창적인 스토리로 구성되어 있으며, 플레이어들은 귀여운 캐릭터들과 함께 모험을 펼치게 된다. 이용 가격은 30,000원 대로, 합리적인 가격에 특별한 추억을 만들 수 있다.",
    }
  ]);

  const [newNews, setNewNews] = useState({ title: '', content: '' });
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리
  const [isEditing, setIsEditing] = useState(false); // 수정 상태 관리
  const [currentId, setCurrentId] = useState(null); // 수정할 뉴스 ID

  // 입력 변경 처리
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewNews({ ...newNews, [name]: value });
  };

  // 새로운 뉴스 추가
  const handleAdd = () => {
    if (newNews.title && newNews.content) {
      setNewsList([...newsList, { ...newNews, id: Date.now() }]);
      setNewNews({ title: '', content: '' }); // 입력 초기화
      setIsModalOpen(false); // 뉴스 추가 후 모달 닫기
    }
  };

  // 뉴스 수정 준비
  const handleEdit = (id) => {
    const newsToEdit = newsList.find((news) => news.id === id);
    setNewNews({ title: newsToEdit.title, content: newsToEdit.content });
    setCurrentId(id);
    setIsEditing(true);
    setIsModalOpen(true); // 수정 시 모달 열기
  };

  // 뉴스 수정 완료
  const handleUpdate = () => {
    setNewsList(
      newsList.map((news) =>
        news.id === currentId ? { ...news, title: newNews.title, content: newNews.content } : news
      )
    );
    setNewNews({ title: '', content: '' }); // 입력 초기화
    setIsModalOpen(false); // 수정 후 모달 닫기
    setIsEditing(false);
    setCurrentId(null);
  };

  // 뉴스 삭제
  const handleDelete = (id) => {
    setNewsList(newsList.filter((news) => news.id !== id));
  };

  // 모달 열기 및 닫기 핸들러
  const openModal = () => {
    setNewNews({ title: '', content: '' }); // 입력 초기화
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setNewNews({ title: '', content: '' });
    setIsModalOpen(false);
    setIsEditing(false);
  };

  return (
    <div id="news-container">
      {/* 뉴스 목록 출력 */}
      {newsList.map((news) => (
        <div key={news.id} className="news-container-block">
          <div className="news-actions">
            {/* 수정 아이콘 */}
            <MdModeEdit
              onClick={() => handleEdit(news.id)}
              style={{ cursor: 'pointer', fontSize: '12px'}}
            />
            {/* 삭제 아이콘 */}
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
              <img className="news-img" src={news1} alt="news-img" />
            </div>
          </div>
          <hr />
        </div>
      ))}

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
