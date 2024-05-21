import React from 'react';
import styles from'./LoginForm.module.css';
import { FaUser, FaLock}  from "react-icons/fa";

const LoginForm = () => {
    return (
        <body>
            <div style={{ backgroundImage: `url(${require('./Components/Assets/ほうほうと景色.jpg')})`}}></div>
            <div className={styles.wrapper}>
                <form action=''>
                    <h1>ポケモン図鑑へよこそ</h1>
                    <div className={styles.inputbox}>
                        <input type='text' placeholder='ユーザーネーム' required/>
                        <FaUser className='icon' /> 
                    </div>
                    <div className='input-box'>
                        <input type='text' placeholder='パスワード' required/>
                        <FaLock className='icon'/>
                    </div>

                    <button type='submit'>ログイン</button>

                    <div className='register-link'> 
                        <p>新規登録は<a href='#'>こちら</a></p>
                    </div>
                </form>
            </div>
        </body>
    )
}

export default LoginForm;