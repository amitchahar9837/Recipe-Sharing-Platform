import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const AuthBtn: React.FC<{text: string}> = ({text}) => {
  return (
    <button type="submit" className="flex justify-center items-center gap-5 text-white bg-[#129575] border-none outline-none rounded-md py-3 font-medium text-lg  ">{text} <FaArrowRight /> </button>
  )
}

export default AuthBtn