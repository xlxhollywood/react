import axios from 'axios';

// 로그인 API 요청 함수
export const login = async (username, password) => {
  try {
    const response = await axios.post('/accounts/login/', {
      username,
      password,
    });
    return response.data; // 성공 시 응답 데이터 반환
  } catch (error) {
    console.error('로그인 오류:', error);
    throw error; // 에러 발생 시 상위 컴포넌트로 에러 전달
  }
};
