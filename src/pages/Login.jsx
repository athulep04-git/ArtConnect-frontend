import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { loginAPI } from "../services/allAPIs";

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async() => {
    const {email,password}=userData
    if(!email||!password){
      alert("please fill details")
      return
    }
    try{
      const response=await loginAPI(userData)
      console.log(response);
      if(response.status==200){
        localStorage.setItem("token",response.data.token)
        localStorage.setItem("user",JSON.stringify(response.data.user
        ))
        alert("Login success")
        navigate('/')
      }
      else{
        alert("login error")
      }
    }
    catch(err){
      console.log(err);
      alert(
    err.response.data) 
    }  
  };
  const navigate=useNavigate()
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-violet-600 to-pink-500 px-5 py-10">
      
      <div className="w-full max-w-6xl rounded-[30px] overflow-hidden shadow-2xl bg-white/10 backdrop-blur-lg grid lg:grid-cols-2">

        
        <div className="bg-gradient-to-br from-indigo-500 to-pink-500 text-white p-12 flex flex-col justify-center">
          
          <h1 className="text-5xl font-bold mb-4">
            ArtConnect
          </h1>

          <p className="text-lg text-gray-100 mb-8">
            Create and commission beautiful custom artwork from talented artists.
          </p>

          <div className="flex gap-4 flex-wrap">
            <img
              src="https://images.unsplash.com/photo-1541961017774-22349e4a1262"
              alt="art1"
              className="w-32 h-32 rounded-2xl object-cover shadow-xl"
            />

            <img
              src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b"
              alt="art2"
              className="w-32 h-32 rounded-2xl object-cover shadow-xl"
            />
          </div>

        </div>

        
        <div className="bg-white p-12 flex flex-col justify-center">

          <h2 className="text-4xl font-bold text-center mb-8">
            Welcome Back
          </h2>

          <form >

            <input
              type="email"
              placeholder="Email"
              value={userData.email}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  email: e.target.value,
                })
              }
              className="w-full p-4 mb-4 border border-gray-300 rounded-xl outline-none focus:border-violet-500"
            />

            <input
              type="password"
              placeholder="Password"
              value={userData.password}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  password: e.target.value,
                })
              }
              className="w-full p-4 mb-5 border border-gray-300 rounded-xl outline-none focus:border-violet-500"
            />

            <button
              type="button"
              className="w-full py-4 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold hover:-translate-y-1 hover:shadow-xl transition duration-300"
              onClick={handleLogin}
            >
              Login
            </button>

          </form>

          <p className="text-center mt-5 text-gray-600">
            Don&apos;t have an account?{" "}
            <Link
              to="/register"
              className="text-violet-600 font-semibold hover:underline"
            >
              Register
            </Link>
          </p>

        </div>
      </div>
    </section>
  );
}

export default Login;