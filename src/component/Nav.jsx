import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Nav(props) {

    const navigate = useNavigate()
    const [dialog, setDialog] = useState('')
    const [imageProfile, setImageProfile] = useState(localStorage.getItem('image'))
    const [imageOnChange, setImageOnChange] = useState(imageProfile)
    const deleteAcount = () => {
        axios.delete(`https://66607b995425580055b41c4e.mockapi.io/character/${props.id}`)
        .then(function(res){
            console.log(res);
            localStorage.clear()
            setDialog('Account has deleted succussfully')
            document.getElementById('my_modal_1').showModal()
            setTimeout(() => {
                navigate('/')
            }, 3000);
        })
    }
    const logoutAcount = () => {
        localStorage.clear()
        navigate('/Login')
    }
    const showDialog = () => {
        setDialog(`Are you sure you want to delete this Account? (${localStorage.getItem('email')})`)
        document.getElementById('my_modal_1').showModal()
    }
    const showDialogLougout = () => {
        setDialog(`${localStorage.getItem('username')}, Are you sure you want to log out?`)
        document.getElementById('my_modal_1').showModal()
    }
    const addImage = () => {
        if(imageOnChange===''){
            setDialog(`Please Enter a valid url!`)
        document.getElementById('my_modal_1').showModal()
        } else {
            setImageProfile(imageOnChange)
            localStorage.setItem('image',imageOnChange)
            setDialog(`Image Edited successfuly`)
            document.getElementById('my_modal_1').showModal()
            axios.put(`https://66607b995425580055b41c4e.mockapi.io/character/${localStorage.getItem('id')}`,{
                'image': imageOnChange,
            })
            .then(function(res){
                console.log(res.data);
            })
    }
    }

    console.log(localStorage.getItem('image'));
  return (
    <div className="navbar bg-secondary text-secondary-content shadow-md shadow-primary-content z-10">
    <div className="flex-1 gap-8 pl-4">
        <div className="dropdown dropdown-start">
        <div className="btn btn-ghost btn-circle avatar offline placeholder" onClick={()=>document.getElementById('my_modal_2').showModal()}>
            <div className="w-40 rounded-full border border-black">
            <img
                alt="Tailwind CSS Navbar component"
                src={imageOnChange} />
            </div>
        </div>
        </div>
        {localStorage.getItem('username')!==null?
        <div className='flex flex-col'>
            <p className="text-xl">Hello {localStorage.getItem('username')}</p>
            <p>{localStorage.getItem('email')}</p>
        </div>:null
        }
        
    </div>

    <div className="flex-none gap-4">
    
        <label className="swap swap-rotate">
        <input type="checkbox" className="theme-controller" value="dracula"/>

        {/* sun icon */}
        <svg
            className="swap-off h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
        </svg>

        {/* moon icon */}
        <svg
            className="swap-on h-10 w-10 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
        </svg>
        </label>
        {
            localStorage.getItem('email')===null?null:
            <div className='dropdown dropdown-end' tabIndex={0} role="button">
            <label>
            <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512">
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            </label>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><button onClick={()=>navigate('/')}>Home</button></li>
                <li><button className="justify-between" onClick={()=>showDialog()}>Delete Account</button></li>
                <li><button onClick={()=>showDialogLougout()}>Logout</button></li>
                <li><button onClick={()=>document.getElementById('my_modal_2').showModal()}>Add Profile Image</button></li>

                
            </ul>
            </div>
            }
    </div>
    <dialog id="my_modal_1" className="modal">
    <div className="modal-box">
        <h3 className="font-bold text-lg">Warning!</h3>
        <p className="py-4">{dialog}</p>
        <div className="modal-action">
        <form method="dialog">
            {
            dialog===`Are you sure you want to delete this Account? (${localStorage.getItem('email')})`?<button className="btn btn-error mr-2" onClick={()=>deleteAcount()}>Delete</button>:
            dialog===`${localStorage.getItem('username')}, Are you sure you want to log out?`?<button className="btn btn-error mr-2" onClick={()=>logoutAcount()}>Logout</button>:null
        }
            <button onClick={()=>setImageOnChange(localStorage.getItem('image'))} className="btn">Close</button>
        </form>
        </div>
    </div>
    </dialog>

    <dialog id="my_modal_2" className="modal">
    <div className="modal-box">
        <h3 className="font-bold text-lg">Edit Image</h3>
        <input className="py-4 w-full border px-2" type="text" value={imageOnChange} onChange={(e)=>setImageOnChange(e.target.value)} />
        <div className="modal-action">
        <form method="dialog">
            <button className="btn btn-error mr-2" onClick={()=>addImage()}>Edit</button>
            <button className="btn" onClick={()=>setImageOnChange(localStorage.getItem('image'))}>Cancele</button>
        </form>
        </div>
    </div>
    </dialog>
    </div>
  )
}

export default Nav