import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { INIT_STATE } from '../../_redux/types';

function HomePage() {
    const userRole = useSelector((state) => state.user.auth);
    
    return (userRole === INIT_STATE.auth) ?  
    (
        <div>
            홈페이지입니다.
            <Link to="login">
                로그인
            </Link>
        </div>
    ) : 
    (
        <div>
            홈페이지입니다.
            <Link to="MyPage">
                마이페이지
            </Link>
        </div>
    );
}

export default HomePage;
