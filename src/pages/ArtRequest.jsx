import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { addRequestAPI } from "../services/allAPIs";
function ArtRequest() {
  const navigate = useNavigate();
  const [requestData, setRequestData] = useState({
    artType: "",
    description: "",
    budget: "",
    deadline: "",
    referenceImage: "",
    address: "",
  });
  useEffect(() => {
    const token = sessionStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }
  }, []);
  const handleSendRequest = async () => {
    const { artType, description, budget, deadline, address } = requestData;

    if (!artType || !description || !budget || !deadline || !address) {
      alert("Please fill all fields");
      return;
    }

    const token = sessionStorage.getItem("token");

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };
    const reqBody = new FormData();
    reqBody.append("artType", requestData.artType);
    reqBody.append("description", requestData.description);
    reqBody.append("budget", requestData.budget);
    reqBody.append("deadline", requestData.deadline);
    reqBody.append("address", requestData.address);

    if (requestData.referenceImage) {
      reqBody.append("referenceImage", requestData.referenceImage);
    }
    try {
      const response = await addRequestAPI(reqBody, reqHeader);
      console.log(response);
      if (response.status === 200) {
        alert("Request sent successfully");
        setRequestData({
          artType: "",
          description: "",
          budget: "",
          deadline: "",
          referenceImage: "",
          address: "",
        });
      }
    } catch (err) {
      console.log(err);
      alert("Request failed");
    }
  };
  return (
    <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-violet-50 to-pink-50 py-16 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h1 className="text-5xl font-bold text-gray-800">
            Request Custom Artwork
          </h1>

          <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
            Tell us your artwork idea and our artist will review it, set
            pricing, and bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[35px] shadow-xl p-8 md:p-10 border border-gray-100">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-white text-xl">
                  🎨
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Artwork Details
                  </h3>

                  <p className="text-gray-500 text-sm">
                    Fill in your request information
                  </p>
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-semibold text-gray-700 mb-2">
                  Artwork Type
                </label>

                <select
                  value={requestData.artType}
                  onChange={(e) =>
                    setRequestData({
                      ...requestData,
                      artType: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-violet-400 bg-white"
                >
                  <option value="">Select artwork type</option>

                  <option>Portrait</option>

                  <option>Landscape</option>

                  <option>Watercolor</option>

                  <option>Sketch</option>

                  <option>Digital Art</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block font-semibold text-gray-700 mb-2">
                  Description
                </label>

                <textarea
                  rows="5"
                  placeholder="Describe your artwork idea..."
                  value={requestData.description}
                  onChange={(e) =>
                    setRequestData({
                      ...requestData,
                      description: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-violet-400 resize-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5 mb-6">
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Budget (₹)
                  </label>

                  <input
                    type="number"
                    placeholder="Enter budget"
                    value={requestData.budget}
                    onChange={(e) =>
                      setRequestData({
                        ...requestData,
                        budget: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-violet-400"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Deadline
                  </label>

                  <input
                    type="date"
                    value={requestData.deadline}
                    onChange={(e) =>
                      setRequestData({
                        ...requestData,
                        deadline: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-violet-400"
                  />
                </div>
              </div>

              <div className="mb-8">
                <label className="block font-semibold text-gray-700 mb-2">
                  Reference Image
                </label>

                <div className="border-2 border-dashed border-violet-300 rounded-[28px] p-8 text-center bg-violet-50 hover:bg-violet-100 transition cursor-pointer">
                  <div className="text-5xl mb-4">🖼️</div>

                  <p className="font-semibold text-gray-700">
                    Upload reference image
                  </p>

                  <p className="text-sm text-gray-500 mt-1">PNG, JPG, JPEG</p>

                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>
                      setRequestData({
                        ...requestData,
                        referenceImage: e.target.files[0],
                      })
                    }
                    className="mt-5"
                  />
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-5">
                  Delivery Address
                </h3>

                <textarea
                  rows="4"
                  placeholder="Enter your full address"
                  value={requestData.address}
                  onChange={(e) =>
                    setRequestData({
                      ...requestData,
                      address: e.target.value,
                    })
                  }
                  className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-violet-400 resize-none"
                />
              </div>

              <button
                onClick={handleSendRequest}
                className="w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-pink-500 text-white py-4 rounded-2xl font-semibold text-lg hover:-translate-y-1 hover:shadow-xl transition duration-300"
              >
                Submit Request
              </button>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white rounded-[35px] shadow-xl p-8 sticky top-28 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                How It Works
              </h3>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold shrink-0">
                    1
                  </div>

                  <div>
                    <h4 className="font-semibold">Submit Request</h4>

                    <p className="text-gray-500 text-sm">
                      Share your artwork requirements
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-violet-500 text-white flex items-center justify-center font-bold shrink-0">
                    2
                  </div>

                  <div>
                    <h4 className="font-semibold">Artist Review</h4>

                    <p className="text-gray-500 text-sm">
                      Artist checks details and pricing
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold shrink-0">
                    3
                  </div>

                  <div>
                    <h4 className="font-semibold">Approval & Payment</h4>

                    <p className="text-gray-500 text-sm">
                      Confirm order and pay securely
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold shrink-0">
                    4
                  </div>

                  <div>
                    <h4 className="font-semibold">Artwork Delivered</h4>

                    <p className="text-gray-500 text-sm">
                      Receive your artwork safely
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-violet-50 rounded-[25px] p-5 mt-8 border border-violet-100">
                <h4 className="font-bold text-lg mb-2 text-gray-800">
                  Delivery Info
                </h4>

                <p className="text-sm text-gray-600 leading-6">
                  Your artwork will be packed carefully and shipped securely to
                  your location.
                </p>
              </div>

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
