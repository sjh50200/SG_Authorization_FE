import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { onSubmitHandler, onTextHandler } from '../../util/Handler';
import './LoginPage.scss';

function LoginPage() {

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="loginBox">
            {/* <form className="loginForm"> */}
            <div className="loginForm">
                <input type="text" value={id}
                    onChange={(e) => {
                        onTextHandler(e, setId)
                    }} placeholder='아이디' />
                <br />
                <input type="password" value={password}
                    onChange={(e) => {
                        onTextHandler(e, setPassword)
                    }} placeholder='비밀번호' />
                <br />
                <button className="submitButton" onClick={(e) => { onSubmitHandler(e, id, password) }}>
                    로그인
                </button>
            </div>
            {/* </form> */}
            <div className="utilBox">
                <Link to="signup">
                    회원가입
                </Link>
            </div>
        </div>
    )
}

export default LoginPage;
