import React, { useEffect, useState } from 'react';
import './LoginForm.css'; // Importação do CSS
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { FaUser, FaLock } from 'react-icons/fa';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    useEffect(()=>{
        sessionStorage.clear();
    }, [])

    const validate = () => {
        let result = true;
        if (email === '' || email === null) {
            result = false;
            toast.warning('正当なメールを入力してください');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('正当なパスワードを入力してください');
        }
        return result;
    };

    const ProceedLogin = async (e) => {
        e.preventDefault();
        if (validate()) {
            try {
                const response = await fetch('http://localhost:8000/user');
                const users = await response.json();
                const user = users.find(user => user.email === email);
                if (!user) {
                    toast.error('ユーザーが見つかりません');
                } else {
                    if (user.password === password) {
                        toast.success('ようこそ!');
                        sessionStorage.setItem('email', email);
                        navigate('/');
                    } else {
                        toast.error('パスワードが間違っています');
                    }
                }
            } catch (err) {
                toast.error('ログインする場合にはエラーが発生しました: ' + err);
            }
        }
    };
    return (
        <div className="background-login">
            <div className="wrapper">
                <form onSubmit={ProceedLogin}>
                    <h1>ポケモン図鑑へよこそ</h1>
                    <div className="inputbox">
                        <input value={email} onChange={e=>setEmail(e.target.value)} type='text' placeholder='メール'/>
                        <FaUser className='icon' />
                    </div>
                    <div className="inputbox">
                        <input value={password} onChange={e=>setPassword(e.target.value)} type='password' placeholder='パスワード'/>
                        <FaLock className='icon' />
                    </div>
                    <button type='submit'>ログイン</button>
                    <div className="registerlink">
                        <p>新規登録は<a href='/register'>こちら</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
