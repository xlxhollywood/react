import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Link 컴포넌트 추가
import { login } from '../../api/auth'; // 로그인 API 함수 임포트
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // 에러 상태 관리
  const navigate = useNavigate(); // 페이지 이동을 위한 네비게이트 훅

  // 폼 제출 시 실행되는 핸들러 함수
  const handleSubmit = async (event) => {
    event.preventDefault(); // 기본 폼 제출 동작 방지
    setError(null); // 에러 초기화

    try {
      // 로그인 API 호출
      const result = await login(username, password);
      console.log('로그인 성공:', result);

      // 로그인 성공 시 메인 페이지로 이동
      navigate('/');
    } catch (error) {
      // 에러 발생 시 에러 메시지 설정
      setError('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="auth-login">
      <div className="auth-login__container">
        <form className="auth-login__body" onSubmit={handleSubmit}>
          <fieldset style={{ width: '100%' }}>
            <div className="auth-login__form">
              <div className="auth-login__input">
                <label className="auth-login__input--title">이메일</label>
                <input
                  type="text"
                  name="username"
                  autoFocus
                  required
                  id="id_username"
                  placeholder="이메일 주소를 입력하세요"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} // 입력값 상태 관리
                />
              </div>

              <div className="auth-login__input">
                <label className="auth-login__input--title">비밀번호</label>
                <input
                  type="password"
                  name="password"
                  required
                  id="id_password"
                  placeholder="비밀번호를 입력하세요"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // 입력값 상태 관리
                />
              </div>

              {/* Checkbox for saving ID */}
              <input type="checkbox" name="saveID" id="saveID" />
              <label htmlFor="saveID">
                <p className="auth-login__save-id">아이디 저장</p>
              </label>

              {/* 에러 메시지 표시 */}
              {error && <p className="auth-login__error">{error}</p>}

              {/* Submit Button */}
              <button type="submit" className="auth-login__button--login">
                로그인
              </button>

              {/* Additional Links */}
              <div className="auth-login__button--extra">
                <a href="/accounts/findme/certification/">아이디/비밀번호 찾기</a>

                {/* Link 컴포넌트로 회원 가입 링크 설정 */}
                <Link to="/register" className="auth-login__link">
                  회원 가입
                </Link>
              </div>
            </div>
          </fieldset>

          {/* Divider */}
          <div className="auth-login__divider"></div>

          {/* Kakao Login Button */}
          <button
            type="button"
            className="auth-login__button--kakao"
            onClick={() => alert('카카오 로그인')}
          >
            <img
              src="https://d31wz4d3hgve8q.cloudfront.net/static/img/ic_kakao.svg"
              alt="카카오 아이콘"
            />
            카카오 로그인
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
