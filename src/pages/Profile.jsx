import { useEffect, useState } from "react";
import { getProfileAPI } from "../services/allAPIs";

function Profile() {
  const [profile, setProfile] = useState({});

  const getProfile = async () => {
    const token = sessionStorage.getItem("token");

    if (!token) return;

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await getProfileAPI(reqHeader);

      if (response.status === 200) {
        setProfile(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <section className="min-h-screen bg-slate-100 py-10 px-5">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg p-8">

        <div className="flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="profile"
            className="w-32 h-32 rounded-full border-4 border-indigo-500 mb-5"
          />

          <h1 className="text-3xl font-bold">
            {profile?.username}
          </h1>

          <p className="text-gray-500 mt-1">
            {profile?.email}
          </p>

          <span className="mt-3 px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full capitalize">
            {profile?.role}
          </span>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-5">

          <div className="bg-slate-100 p-5 rounded-2xl">
            <h3 className="font-semibold text-gray-600">
              Username
            </h3>

            <p className="text-lg font-medium mt-2">
              {profile?.username}
            </p>
          </div>

          <div className="bg-slate-100 p-5 rounded-2xl">
            <h3 className="font-semibold text-gray-600">
              Email
            </h3>

            <p className="text-lg font-medium mt-2">
              {profile?.email}
            </p>
          </div>

          <div className="bg-slate-100 p-5 rounded-2xl">
            <h3 className="font-semibold text-gray-600">
              Role
            </h3>

            <p className="text-lg font-medium mt-2 capitalize">
              {profile?.role}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Profile;