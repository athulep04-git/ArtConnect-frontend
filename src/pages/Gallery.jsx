import { useEffect, useState } from "react";
import { getArtworksAPI } from "../services/allAPIs";
import { useNavigate } from "react-router-dom";

function Gallery() {
  const [allArtworks,setAllArtworks]=useState([])
  const navigate=useNavigate()
  const getAllArtworks=async()=>{
    try{
      const response=await getArtworksAPI()
      console.log(response);
      if(response.status==200){
        setAllArtworks(response.data)
      }
    }
    catch(err){
      console.log(err);
      
    }
  }
  useEffect(() => {
  const token =sessionStorage.getItem("token")
  if(!token){
    navigate("/login")
    return
  }
  getAllArtworks()
}, [])
  
  
  return (
    <section className="min-h-screen bg-slate-100 p-6 md:p-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

  
        <aside className="w-full lg:w-[260px] bg-white p-6 rounded-3xl shadow-lg h-fit">

          <div className="flex justify-between items-center mb-6">
            <h5 className="font-bold text-lg">
              Filters
            </h5>

            <button className="text-indigo-500 text-sm hover:underline">
              Reset All
            </button>
          </div>

  
          <div className="mb-8">
            <label className="font-bold block mb-3">
              Medium
            </label>

            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-full bg-indigo-500 text-white">
                All Works
              </button>

              <button className="px-4 py-2 rounded-full bg-indigo-100 hover:bg-indigo-200 transition">
                Portrait
              </button>

              <button className="px-4 py-2 rounded-full bg-indigo-100 hover:bg-indigo-200 transition">
                Landscape
              </button>

              <button className="px-4 py-2 rounded-full bg-indigo-100 hover:bg-indigo-200 transition">
                Watercolor
              </button>

              <button className="px-4 py-2 rounded-full bg-indigo-100 hover:bg-indigo-200 transition">
                Sketch
              </button>
            </div>
          </div>

          <div>
            <label className="font-bold block mb-3">
              Orientation
            </label>

            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-full bg-indigo-100 hover:bg-indigo-200 transition">
                Portrait
              </button>

              <button className="px-4 py-2 rounded-full bg-indigo-500 text-white">
                Landscape
              </button>

              <button className="px-4 py-2 rounded-full bg-indigo-100 hover:bg-indigo-200 transition">
                Square
              </button>
            </div>
          </div>
        </aside>

   
        <main className="flex-1">

          <div className="mb-8">
            <h2 className="text-4xl font-bold">
              ArtConnect Gallery
            </h2>

            <p className="text-gray-500 mt-2">
              Explore our latest artworks
            </p>
          </div>

   
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {allArtworks?.length>0?
          allArtworks.map((item)=>(
            <div
            key={item._id} 
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-3 hover:shadow-2xl transition duration-300 cursor-pointer"
             onClick={() =>navigate(`/artwork/${item._id}`)}>
              <img
                src={item.image}
                alt="artwork"
                className="w-full h-[320px] object-cover"
              />
            </div>
          ))
          
        :
        <h2>no artworks</h2>
        }
            
          </div>
        </main>
      </div>
    </section>
  );
}

export default Gallery;