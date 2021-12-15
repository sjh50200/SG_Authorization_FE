import React, { useState } from 'react';
import { onTextHandler } from '../../util/Handler';
import './LoginPage.scss';

function LoginPage() {

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="loginBox">
            <form className="loginForm">
                <input type="text" value={id}
                    onChange={(e) => { onTextHandler(e, setId) }} placeholder='아이디' />
                <br />
                <input type="password" value={password}
                    onChange={(e) => { onTextHandler(e, setPassword) }} placeholder='비밀번호' />
                <br />
                <button className="submitButton" type="submit">로그인</button>
            </form>
        </div>
    )
}

export default LoginPage;
