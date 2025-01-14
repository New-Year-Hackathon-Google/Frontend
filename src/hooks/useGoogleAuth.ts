import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

// 서버 응답 타입 정의
interface LoginResponse {
  token: string; // 서버에서 반환하는 JWT
}

export function useGoogleAuth() {
  return useMutation<LoginResponse, Error, string>({
    // Google ID Token을 서버로 전달
    mutationFn: (idToken) =>
      axios
        .post<LoginResponse>('http://localhost:5000/api/auth/google', {
          token: idToken,
        })
        .then((res) => res.data),
    onSuccess: (response) => {
      // 서버에서 받은 토큰을 로컬 스토리지에 저장
      localStorage.setItem('authToken', response.token);
      console.log('Google login successful:', response);
    },
    onError: (error) => {
      const errorMessage =
        error.message || 'Google login failed. Please try again.';
      alert(`Error: ${errorMessage}`);
      console.error('Google login error:', error.message);
    },
  });
}
