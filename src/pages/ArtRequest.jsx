import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
function ArtRequest() {
const navigate = useNavigate()
useEffect(() => {
  const token =sessionStorage.getItem("token")
  if(!token){
    navigate("/login")
    return
  }
}, [])
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-pink-50 py-20 px-5">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold">
            Request Custom Artwork
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Fill the form below to commission your personalized artwork
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">

       
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">

              <h3 className="text-2xl font-semibold text-gray-700 mb-6">
                Artwork Details
              </h3>

        
              <div className="mb-5">
                <label className="block font-medium mb-2">
                  Artwork Type
                </label>

                <select className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400">
                  <option>Portrait</option>
                  <option>Landscape</option>
                  <option>Watercolor</option>
                  <option>Sketch</option>
                  <option>Digital Art</option>
                </select>
              </div>

         
              <div className="mb-5">
                <label className="block font-medium mb-2">
                  Description
                </label>

                <textarea
                  rows="4"
                  placeholder="Describe your artwork idea..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

     
              <div className="mb-5">
                <label className="block font-medium mb-2">
                  Your Budget (₹)
                </label>

                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

           
              <div className="mb-5">
                <label className="block font-medium mb-2">
                  Deadline
                </label>

                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

       
              <div className="mb-8">
                <label className="block font-medium mb-2">
                  Reference Image
                </label>

                <input
                  type="file"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3"
                />
              </div>

          
              <h3 className="text-2xl font-semibold text-gray-700 mb-6">
                Shipping Information
              </h3>

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <textarea
                rows="3"
                placeholder="Street Address"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 mb-4 outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="City"
                  className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <input
                  type="text"
                  placeholder="State"
                  className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <input
                  type="text"
                  placeholder="Pincode"
                  className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
                />

                <input
                  type="text"
                  placeholder="Country"
                  className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

       
              <button className="mt-8 bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:-translate-y-1 hover:shadow-xl transition duration-300">
                Submit Request
              </button>
            </div>
          </div>

      
          <div className="lg:col-span-4">
            <div className="bg-white rounded-3xl shadow-xl p-8 h-fit">

              <h3 className="text-2xl font-bold mb-5">
                How it Works
              </h3>

              <ul className="space-y-4 text-gray-600 list-disc pl-5">
                <li>Submit your artwork request</li>
                <li>Artist reviews and sends price</li>
                <li>You confirm and make payment</li>
                <li>Artwork is created and shipped</li>
              </ul>

              <hr className="my-6" />

              <h4 className="text-xl font-semibold mb-3">
                Delivery Info
              </h4>

              <p className="text-gray-600">
                Your artwork will be safely packed and delivered via courier.
              </p>

              <div className="text-center mt-8">
                <Link
                  to="/myrequests"
                  className="inline-block bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:-translate-y-1 hover:shadow-xl transition duration-300"
                >
                  View My Requests →
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default ArtRequest;