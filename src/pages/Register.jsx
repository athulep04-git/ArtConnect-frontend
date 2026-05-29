import { Link ,useNavigate} from "react-router-dom";
import { useState } from "react";
import { registerAPI } from "../services/allAPIs";

function Register() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleRegister = async() => {
    const {username,email,phone,password}=userData
    if(!username||!email||!phone||!password){
      alert("please fill details")
    }
    try{
      const response=await registerAPI(userData)
      console.log(response);
      if(response.status==200){
        alert(response.data.message)
        navigate('/login')
      }
      else{
        alert(response.data.message)
      }
    }
    catch(err){
      console.log(err);
      
    }
  };
  const navigate = useNavigate();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-violet-600 to-pink-500 px-5 py-10">
      
      <div className="w-full max-w-6xl rounded-[30px] overflow-hidden shadow-2xl bg-white/10 backdrop-blur-lg grid lg:grid-cols-2">


        <div className="bg-gradient-to-br from-indigo-500 to-pink-500 text-white p-12 flex flex-col justify-center">

          <h1 className="text-5xl font-bold mb-4">
            Join ArtConnect
          </h1>

          <p className="text-lg text-gray-100 mb-8">
            Start requesting unique artwork tailored to your imagination.
          </p>

          <div className="flex gap-4 flex-wrap">
            <img
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
              alt="art1"
              className="w-32 h-32 rounded-2xl object-cover shadow-xl"
            />

            <img
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
              alt="art2"
              className="w-32 h-32 rounded-2xl object-cover shadow-xl"
            />
          </div>

        </div>


        <div className="bg-white p-12 flex flex-col justify-center">

          <h2 className="text-4xl font-bold text-center mb-8">
            Create Account
          </h2>

          <form >

            <input
              type="text"
              placeholder="Username"
              value={userData.username}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  username: e.target.value
                })
              }
              className="w-full p-4 mb-4 border border-gray-300 rounded-xl outline-none focus:border-violet-500"
            />

            <input
              type="email"
              placeholder="Email"
              value={userData.email}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  email: e.target.value
                })
              }
              className="w-full p-4 mb-4 border border-gray-300 rounded-xl outline-none focus:border-violet-500"
            />

            <input
              type="text"
              placeholder="Phone"
              value={userData.phone}
              onChange={(e) =>
                setUserData({
                  ...userData,
                  phone: e.target.value
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
                  password: e.target.value
                })
              }
              className="w-full p-4 mb-5 border border-gray-300 rounded-xl outline-none focus:border-violet-500"
            />

            <button
              type="button"
              className="w-full py-4 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold hover:-translate-y-1 hover:shadow-xl transition duration-300"
              onClick={handleRegister}
            >
              Register
            </button>

          </form>

          <p className="text-center mt-5 text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-violet-600 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

        </div>
      </div>
    </section>
  );
}

export default Register;