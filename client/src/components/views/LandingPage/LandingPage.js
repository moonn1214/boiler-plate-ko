import React, { useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Auth from '../../../hoc/auth';

function LandingPage() {
    
    useEffect(() => {
        axios.get('/api/hello').then(response => console.log(response.data))
    }, [])

    const navigate = useNavigate();

    const onClickLoginHandler = () => {
        navigate('/login')
    }

    const onClickLogoutHandler = () => {
        axios.get('/api/users/logout').then(
            response => {
                if(response.data.success) {
                    navigate('/login')
                } else {
                    alert('Error')
                }
            }
        )
    }

    const onClickRegisterHandler = () => {
        navigate('/register')
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh', flexDirection: 'column'
        }}>
            <h2>시작 페이지</h2>

            <button onClick={onClickLoginHandler}>
                로그인
            </button>

            <button onClick={onClickLogoutHandler}>
                로그아웃
            </button>

            <button onClick={onClickRegisterHandler}>
                회원가입
            </button>
        </div>
    )
}

export default Auth(LandingPage, null)