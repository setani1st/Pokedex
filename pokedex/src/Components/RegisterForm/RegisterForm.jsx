import React from 'react';
import './RegisterForm.css';
import { FaUser, FaLock}  from "react-icons/fa";

const RegisterForm = () => {
    return (
        <div className='wrapper'>
            <form action=''>
                <h1>新規登録</h1>
                <div className='input-box'>
                    <input type='text' placeholder='ユーザーネーム' required/>
                    <FaUser className='icon' /> 
                </div>
                <div className='input-box'>
                    <input type='text' placeholder='パスワード' required/>
                    <FaLock className='icon'/>
                </div>

                <button type='submit'>登録</button>

            </form>
        </div>
    )
}

export default RegisterForm;