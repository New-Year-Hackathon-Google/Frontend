const GOOGLE_CLIENT_ID =
  '456402998987-j78715oai514o36tn2cjkbqfhfp1jn1g.apps.googleusercontent.com';
const BACKEND_CALLBACK_URL = 'http://localhost:5000/auth/google/callback'; // 백엔드 콜백 URL

const GoogleLogin = () => {
  const handleLogin = () => {
    // 구글 인증 URL 생성
    const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${BACKEND_CALLBACK_URL}&scope=openid%20email%20profile`;

    // 구글 로그인 페이지로 리디렉션
    window.location.href = googleLoginUrl;
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

export default GoogleLogin;
