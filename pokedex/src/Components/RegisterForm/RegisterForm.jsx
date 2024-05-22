import React, { useState } from 'react';
import './RegisterForm.css'; // Importação do CSS
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    //const[id,idchange]=useState("");
    const[email,emailchange]=useState("");
    const[password,passwordchange]=useState("");

    const navigate = useNavigate();
    const IsValidate=()=>{
        let isproceed = true;
        let passwordError = 'パスワード';
        let emailError = 'メール';
        let nothingError = '何か';
        
        if(email==null || email===　''){
            isproceed = false;
            emailError += 'を入力してください';
        }
        if(password==null || password===　''){
            isproceed = false;
            passwordError += 'を入力してください';
        }
        if(!isproceed){
            toast.warning( nothingError += 'を入力してください')
        }else{
            if(/^[a-zA-z0-9]+@[a-zA-z0-9]+\.[A-za-z]+$/.test(email)){

            }else{
                isproceed = false;
                toast.warning('正当なメールを入力してください')
            }
        }
        return isproceed;
    }
    
    const handlesubmit=(e)=>{
        e.preventDefault();
        let states={email, password};
        if(IsValidate()){
        //console.log(states);
        fetch("http://localhost:8000/user",{
            method:"POST",
            headers: {'content-type':'application/json'},
            body:JSON.stringify(states)
        }).then((res)=>{
            toast.success('登録完成');
            navigate('/login');
        }).catch((err)=>{
            toast.error('エラーが発生しました:'+ err.message);
        });

    }
}

    return (
        <div className="background">
            <div className="wrapper">
                <form onSubmit={handlesubmit}>
                    <h1>新規登録</h1>
                    <div className="inputbox">
                        <input value={email} onChange={e=>emailchange(e.target.value)}type='mail' placeholder='メール'  />
                        <FaUser className='icon' />
                    </div>
                    <div className="inputbox">
                        <input type='password' value={password} onChange={e=>passwordchange(e.target.value)} placeholder='パスワード'  />
                        <FaLock className='icon' />
                    </div>
                    <button type='submit'>登録</button>
                   
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
