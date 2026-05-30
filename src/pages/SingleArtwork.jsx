import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleArtworkAPI } from "../services/allAPIs";

function SingleArtwork() {
  const { id } = useParams();
  const [artwork, setArtwork] =useState(null);
  const getArtwork =async()=> {
      try {
        const response =await getSingleArtworkAPI(id);
        console.log(response);
        if (response.status ===200) {
          setArtwork(response.data);
        }
      }
      catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    getArtwork();
  }, []);

  return (
    <section className="min-h-screen bg-slate-100 py-16 px-5">
      <div className="max-w-7xl mx-auto">

        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 mb-8 text-indigo-600 font-medium hover:underline"
        >
          ← Back to Gallery
        </Link>

        {!artwork ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <h1 className="text-3xl font-bold text-gray-500">
              Loading Artwork...
            </h1>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-10 bg-white rounded-[35px] shadow-2xl overflow-hidden">

            <div className="relative overflow-hidden">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-full min-h-[650px] object-cover hover:scale-105 transition duration-500"
              />

              <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg text-sm font-semibold text-indigo-600">
                {artwork.category}
              </div>
            </div>

            <div className="p-10 lg:p-14 flex flex-col justify-center">

              <span
                className={`px-5 py-2 rounded-full text-sm font-medium w-fit mb-5 ${
                  artwork.isAvailable? "bg-green-100 text-green-700": "bg-red-100 text-red-700"
                }`}
              >
                {artwork.isAvailable
                  ? "Available"
                  : "Unavailable"}
              </span>

              <h1 className="text-5xl font-bold text-gray-900 mb-5 leading-tight">
                {artwork.title}
              </h1>

              <p className="text-gray-600 text-lg leading-8 mb-8">
                {artwork.description}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">

                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                  <h4 className="text-sm text-gray-500 mb-2">
                    Category
                  </h4>

                  <p className="font-semibold text-lg">
                    {artwork.category}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                  <h4 className="text-sm text-gray-500 mb-2">
                    Starting Price
                  </h4>

                  <p className="font-semibold text-lg text-pink-500">
                    ₹{artwork.startingPrice}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                  <h4 className="text-sm text-gray-500 mb-2">
                    Availability
                  </h4>

                  <p className="font-semibold text-lg">
                    {artwork.isAvailable? "Available": "Unavailable"}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                  <h4 className="text-sm text-gray-500 mb-2">
                    Posted On
                  </h4>

                  <p className="font-semibold text-lg">
                    {new Date(artwork.createdAt).toLocaleDateString()}
                  </p>
                </div>

              </div>

              <div className="flex flex-wrap gap-4">

                <button className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:scale-105 transition shadow-lg">
                  Request Similar Artwork
                </button>

                <button className="bg-slate-200 text-gray-800 px-8 py-4 rounded-full font-semibold hover:bg-slate-300 transition">
                  Contact Artist
                </button>

              </div>

            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default SingleArtwork;