const GOOGLE_CLIENT_ID =
  '456402998987-j78715oai514o36tn2cjkbqfhfp1jn1g.apps.googleusercontent.com';
const BACKEND_CALLBACK_URL = 'http://localhost:5000/auth/google/callback'; // 백엔드 콜백 URL

const GoogleLogin = () => {
  const handleLogin = () => {
    const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${BACKEND_CALLBACK_URL}&scope=openid%20email%20profile`;

    window.location.href = googleLoginUrl;
  };

  return (
    <button
      onClick={handleLogin}
      className='rounded-3xl bg-blue-400 p-3 font-bold text-white duration-200 hover:scale-110'
    >
      Login with Google
    </button>
  );
};

export default GoogleLogin;
