import React, { useState } from 'react';
import './LoginPage.css'; // CSS 파일 import

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 로그인 처리 로직 작성
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <div className='logocontainer'>
        <img src='naver.svg' alt='Logo' />
      </div>
    <div className="login-container"> 
      
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit"><b>로그인</b></button>
      </form>
    </div>
    <div className='join'>
     <a href='#'>회원가입</a>
    </div>
    </div>
  );
};

export default LoginPage;