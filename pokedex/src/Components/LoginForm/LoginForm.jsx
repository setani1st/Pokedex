import React from 'react';
import './LoginForm.css'; // Importação do CSS

import { FaUser, FaLock } from 'react-icons/fa';

const LoginForm = () => {
    return (
        <div className="background-login">
            <div className="wrapper">
                <form action=''>
                    <h1>ポケモン図鑑へよこそ</h1>
                    <div className="inputbox">
                        <input type='text' placeholder='メール' required />
                        <FaUser className='icon' />
                    </div>
                    <div className="inputbox">
                        <input type='password' placeholder='パスワード' required />
                        <FaLock className='icon' />
                    </div>
                    <button type='submit'>ログイン</button>
                    <div className="registerlink">
                        <p>新規登録は<a href='#'>こちら</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
