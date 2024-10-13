import AuthBtn from "../components/AuthBtn"
import { Link } from "react-router-dom"
import HatLogo from '../assets/HatLogo.png'
import {useState} from 'react'

interface AuthData {
    name:string;
    email: string;
    password: string;
    confirmPassword:string
  }
const Signup: React.FC = () => {
    const [data, setData] = useState<AuthData>({name:"", email: "", password: "", confirmPassword:'' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(data);
    }
    return (
        <div className="container h-fit">
            <div className="w-full h-full flex gap-2 pb-2">
                <div className="h-screen md:w-[50%] w-[100%] ">
                    <div className="w-full h-full px-6 py-4 flex flex-col justify-center gap-4">
                        <div>
                            <h2 className="text-4xl font-bold">Create an account</h2>
                            <h3 className="text-lg font-semibold">Let's help you set up your account,</h3>
                        </div>
                        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-2">
                                <label className="text-xl">Name</label>
                                <input value={data.name} name="name" onChange={handleChange} type="text" placeholder="Enter Name" className="w-full border-2 px-2 py-3 border-gray-500 rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xl">Email</label>
                                <input value={data.email} name="email" onChange={handleChange} type="text" placeholder="Enter Email" className="w-full border-2 px-2 py-3 border-gray-500 rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xl">Password</label>
                                <input value={data.password} name="password" onChange={handleChange} type="password" placeholder="Enter Password" className="w-full border-2 px-2 py-3 border-gray-500 rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xl">Confirm Password</label>
                                <input value={data.confirmPassword} name="confirmPassword" onChange={handleChange} type="password" placeholder="Enter Confirm Password" className="w-full border-2 px-2 py-3 border-gray-500 rounded-lg" />
                            </div>

                            <AuthBtn text="Submit" />

                            <div className="text-center">Already have an account? <Link to={'/signin'} className="text-[#ff9c00] font-medium">Sign In</Link></div>
                        </form>
                    </div>
                </div>
                <div className="w-[50%] h-screen relative md:block hidden">
                    <img src={"https://firebasestorage.googleapis.com/v0/b/recipe-sharing-platform-24ed6.appspot.com/o/AuthBG.jpg?alt=media&token=1e5a39dc-83bb-49ad-8df1-073d8d667bb9"} alt="" className="h-full w-full object-cover" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-[#000000] to-[rgba(0,0,0,0)]"></div>
                    <div className="absolute z-10 top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center gap-3">
                        <div className="flex flex-col gap-2 items-center mb-20">
                        <img src={HatLogo} alt="LOGO" className="" />
                        <h3 className="text-white font-medium text-lg">100K+ Premium Recipe</h3>
                        </div>
                    <h2 className="text-white font-semibold text-5xl text-center font-poppins mt-2">Get <br/> Cooking</h2>
                    <h3 className="text-white font-medium text-lg">Simple way to find Tasty Recipe</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup