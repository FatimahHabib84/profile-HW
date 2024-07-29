import React from 'react'
import HeroImg from '../assets/hero-img.jpg'
import { useNavigate } from 'react-router-dom'


function Home() {
    const navigate = useNavigate()


  return (
    <div
    className="hero min-h-screen bg-center"
    style={{
        backgroundImage: `url(${HeroImg})`,
    }}>
    <div className="hero-overlay bg-yellow-100 bg-opacity-50"></div>
    <div className="hero-content text-primary-content text-center">
        <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">King Faisal Univercity</h1>
        <p className="mb-5 font-semibold">
            Welcome to the univercity application, a place where you can show your informations, and deal with transactions easily. please sign up, or log in to your account
        </p>
        <div className='flex flex-row gap-8 justify-center'>
            <button className="btn btn-primary font-bold text-primary-content" onClick={()=>{navigate('/Signup')}}>Signup</button>
            <button className="btn btn-primary font-bold text-primary-content" onClick={()=>{navigate('/Login')}}>Login</button>
            {localStorage.getItem('username')===null?null:<button className="btn btn-primary font-bold text-primary-content" onClick={()=>{navigate(`/Profile/${localStorage.getItem('id')}`)}}>Profile</button>
        }
        </div>
        </div>
    </div>

    </div>
)
}

export default Home