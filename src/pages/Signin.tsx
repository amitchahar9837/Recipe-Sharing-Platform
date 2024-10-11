import { Link } from "react-router-dom"
import HatLogo from '../assets/HatLogo.png'
import {useState} from 'react'
import AuthBtn from "../components/AuthBtn"

interface AuthData {
    email: string;
    password: string;
  }
const Signin: React.FC = () => {
    const [data, setData] = useState<AuthData>({ email: "", password: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    return (
        <div className="container  max-h-screen">
            <div className="w-full h-full flex gap-2">
                <div className="h-screen md:w-[50%] w-[100%] ">
                    <div className="w-full h-full px-6 py-4 flex flex-col justify-center gap-12">
                        <div>
                            <h2 className="text-4xl font-bold">Hello,</h2>
                            <h3 className="text-3xl font-semibold">Welcome Back!</h3>
                        </div>
                        <form className="flex flex-col gap-10">
                            <div className="flex flex-col gap-2">
                                <label className="text-xl">Email</label>
                                <input value={data.email} name="email" onChange={handleChange} type="text" placeholder="Enter Email" className="w-full border-2 px-2 py-3 border-gray-500 rounded-lg" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-xl">Password</label>
                                <input value={data.password} name="password" onChange={handleChange} type="password" placeholder="Enter Password" className="w-full border-2 px-2 py-3 border-gray-500 rounded-lg" />
                                <Link to={'/'} className="text-[#ff9c00] font-medium mt-2">Forgot Password?</Link>
                            </div>
                            <AuthBtn text="Submit" />

                            <div className="text-center">Don't have an account? <Link to={'/signup'} className="text-[#ff9c00] font-medium">Sign Up</Link></div>
                        </form>
                    </div>
                </div>
                <div className="w-[50%] h-screen relative md:block hidden">
                    <img src={"https://firebasestorage.googleapis.com/v0/b/recipe-sharing-platform-24ed6.appspot.com/o/AuthBG.jpg?alt=media&token=1e5a39dc-83bb-49ad-8df1-073d8d667bb9"} alt="" className="h-full w-full object-cover" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-[#000000] to-[rgba(0,0,0,0)]"></div>
                    <div className="absolute z-10 top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center gap-3">
                        <img src={HatLogo} alt="" />
                    <h2 className="text-white font-semibold text-5xl text-center font-poppins">Get <br/> Cooking</h2>
                    <h3 className="text-white font-medium text-lg">Simple way to find Tasty Recipe</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin