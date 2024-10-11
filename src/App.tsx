import { Route, Routes } from "react-router-dom";
import { Home, Signin, Signup } from "./pages";

export default function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    </>
  )
}