import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Auth = () => {
  useEffect(() => {
    const params = new URL(window.location.href).searchParams;
    const code = params.get('code');
    const type = params.get('type');

    if (code && type) {
      // 요청 본문 데이터
      const data = {
        service_provider: type,
        authorization_code: code
      };
      console.log(data);

      // POST 요청 보내기
      axios
        .post('https://api.melodiary.site/api/users', data, {
          withCredentials: true
        })
        .then((response: { data: any }) => {
          console.log('Successfully received jwt:', response.data);
        })
        .catch((error: any) => {
          console.error('Error:', error);
        });
    }
  }, []);

  return (
    <AuthWrapper>
      <h1>Authorization Code Received</h1>
    </AuthWrapper>
  );
};

const AuthWrapper = styled.div`
  margin: 100px;
`;

export default Auth;
