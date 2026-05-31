import { useState } from "react";
import { addArtworkAPI } from "../../services/allAPIs";

function AdminPage() {
  const [activePage, setActivePage] =
    useState("dashboard");
    const [showModal,
setShowModal] =
useState(false);

const [artworkData,
setArtworkData] =
useState({
  title: "",
  description: "",
  category: "",
  image: "",
  startingPrice: "",
  isAvailable: true
});
const handleAddArtwork = async () => {
  const {title,description,category,image,startingPrice}=artworkData;
  if (!title ||!description ||!category ||!image ||!startingPrice){
    alert("Please fill all fields");
    return;
  }
  const token =sessionStorage.getItem("token");
  const reqHeader = {
    Authorization: `Bearer ${token}`,
  };
  try {
    const response =await addArtworkAPI(artworkData,reqHeader);
    console.log(response);
    if (response.status === 200) {
      alert(
        "Artwork added successfully"
      );
      setShowModal(false);
      setArtworkData({
        title: "",
        description: "",
        category: "",
        image: "",
        startingPrice: "",
        isAvailable: true
      });
    }
  } catch (err) {
    console.log(err);
    alert("Failed to add artwork");
  }
};
  return (
    <section className="min-h-screen bg-slate-100 flex">

      <aside className="w-[260px] bg-gradient-to-b from-violet-600 via-indigo-600 to-pink-500 min-h-screen shadow-xl p-5 hidden lg:block">

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[28px] p-6 text-center shadow-lg">

          <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center text-4xl shadow-md">
            🎨
          </div>

          <h2 className="text-2xl font-bold text-white mt-4">
            Admin Panel
          </h2>

          <p className="text-indigo-100 text-sm mt-1">
            ArtConnect
          </p>

        </div>

        <nav className="mt-10 space-y-3">

          <button
            onClick={() =>
              setActivePage(
                "dashboard"
              )
            }
            className={`w-full flex items-center gap-4 text-base font-medium px-5 py-4 rounded-2xl transition ${
              activePage ===
              "dashboard"
                ? "bg-white text-violet-700 shadow-md"
                : "text-white hover:bg-white/10"
            }`}
          >
            📊 Dashboard
          </button>

          <button
            onClick={() =>
              setActivePage(
                "artworks"
              )
            }
            className={`w-full flex items-center gap-4 text-base font-medium px-5 py-4 rounded-2xl transition ${
              activePage ===
              "artworks"
                ? "bg-white text-violet-700 shadow-md"
                : "text-white hover:bg-white/10"
            }`}
          >
            🖼 Artworks
          </button>

          <button
            onClick={() =>
              setActivePage(
                "users"
              )
            }
            className={`w-full flex items-center gap-4 text-base font-medium px-5 py-4 rounded-2xl transition ${
              activePage ===
              "users"
                ? "bg-white text-violet-700 shadow-md"
                : "text-white hover:bg-white/10"
            }`}
          >
            👥 Users
          </button>

          <button
            onClick={() =>
              setActivePage(
                "requests"
              )
            }
            className={`w-full flex items-center gap-4 text-base font-medium px-5 py-4 rounded-2xl transition ${
              activePage ===
              "requests"
                ? "bg-white text-violet-700 shadow-md"
                : "text-white hover:bg-white/10"
            }`}
          >
            📦 Requests
          </button>

        </nav>
      </aside>

      <main className="flex-1 p-6 md:p-8">
        <div className="bg-gradient-to-r from-violet-600 via-indigo-600 to-pink-500 rounded-[25px] shadow-lg p-6 text-white">

          <h1 className="text-4xl font-bold capitalize">
            {activePage}
          </h1>

          <p className="mt-2 text-base text-indigo-100">
            Manage platform data
          </p>

        </div>
        {activePage ===
          "dashboard" && (

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">

            <div className="bg-blue-500 rounded-[25px] p-5 text-white shadow-lg">
              <h4 className="text-sm font-medium opacity-90">
                TOTAL ARTWORKS
              </h4>

              <h1 className="text-4xl font-bold mt-3">
                25
              </h1>
            </div>

            <div className="bg-green-600 rounded-[25px] p-5 text-white shadow-lg">
              <h4 className="text-sm font-medium opacity-90">
                AVAILABLE
              </h4>

              <h1 className="text-4xl font-bold mt-3">
                18
              </h1>
            </div>

            <div className="bg-red-500 rounded-[25px] p-5 text-white shadow-lg">
              <h4 className="text-sm font-medium opacity-90">
                UNAVAILABLE
              </h4>

              <h1 className="text-4xl font-bold mt-3">
                7
              </h1>
            </div>

            <div className="bg-slate-600 rounded-[25px] p-5 text-white shadow-lg">
              <h4 className="text-sm font-medium opacity-90">
                REQUESTS
              </h4>

              <h1 className="text-4xl font-bold mt-3">
                14
              </h1>
            </div>

          </div>
        )}
        {activePage ===
          "artworks" && (

          <div className="bg-white rounded-[30px] shadow-xl mt-8 p-7">

            <div className="flex justify-between items-center mb-6">

              <h2 className="text-2xl font-bold text-gray-900">
                Artwork Management
              </h2>

              <button
  onClick={() =>
    setShowModal(true)
  }
  className="bg-gradient-to-r from-violet-600 to-pink-500 text-white px-5 py-3 rounded-2xl font-medium hover:scale-105 transition shadow-lg"
  
>
  + Add Artwork
</button>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full text-left">

                <thead className="bg-slate-100 rounded-xl">

                  <tr>

                    <th className="p-4 text-sm font-semibold text-gray-700">
                      Image
                    </th>

                    <th className="p-4 text-sm font-semibold text-gray-700">
                      Title
                    </th>

                    <th className="p-4 text-sm font-semibold text-gray-700">
                      Category
                    </th>

                    <th className="p-4 text-sm font-semibold text-gray-700">
                      Price
                    </th>

                    <th className="p-4 text-sm font-semibold text-gray-700">
                      Status
                    </th>

                    <th className="p-4 text-center text-sm font-semibold text-gray-700">
                      Actions
                    </th>

                  </tr>

                </thead>

                <tbody>

                  <tr className="border-b hover:bg-slate-50 transition">

                    <td className="p-4">
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
                        alt=""
                        className="w-16 h-16 rounded-2xl object-cover"
                      />
                    </td>

                    <td className="p-4 font-medium">
                      Royal Portrait
                    </td>

                    <td className="p-4">
                      Portrait
                    </td>

                    <td className="p-4 text-pink-500 font-semibold">
                      ₹4,999
                    </td>

                    <td className="p-4">
                      <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-xs font-medium">
                        Available
                      </span>
                    </td>

                    <td className="p-4">

                      <div className="flex justify-center gap-3">

                        <button className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-xl hover:bg-indigo-200 transition text-sm font-medium">
                          ✏️ Edit
                        </button>

                        <button className="bg-red-100 text-red-600 px-4 py-2 rounded-xl hover:bg-red-200 transition text-sm font-medium">
                          🗑 Delete
                        </button>

                      </div>

                    </td>

                  </tr>

                </tbody>

              </table>

            </div>

          </div>
        )}

        {activePage ===
          "users" && (
          <div className="bg-white rounded-[30px] p-8 shadow-xl mt-8">
            <h2 className="text-2xl font-bold">
              Users Section
            </h2>
          </div>
        )}
        {activePage ===
          "requests" && (
          <div className="bg-white rounded-[30px] p-8 shadow-xl mt-8">
            <h2 className="text-2xl font-bold">
              Requests Section
            </h2>
          </div>
        )}

      </main>
        {showModal && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 px-5">

    <div className="bg-white w-full max-w-2xl rounded-[30px] p-8 shadow-2xl">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Add Artwork
        </h2>

        <button
          onClick={() =>
            setShowModal(false)
          }
          className="text-2xl"
        >
          ✕
        </button>

      </div>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          type="text"
          placeholder="Title"
          value={
            artworkData.title
          }
          onChange={(e) =>
            setArtworkData({
              ...artworkData,
              title:
                e.target.value,
            })
          }
          className="border p-4 rounded-xl outline-none focus:border-violet-500"
        />

        <input
          type="text"
          placeholder="Category"
          value={
            artworkData.category
          }
          onChange={(e) =>
            setArtworkData({
              ...artworkData,
              category:
                e.target.value,
            })
          }
          className="border p-4 rounded-xl outline-none focus:border-violet-500"
        />

        <input
          type="text"
          placeholder="Image URL"
          value={
            artworkData.image
          }
          onChange={(e) =>
            setArtworkData({
              ...artworkData,
              image:
                e.target.value,
            })
          }
          className="border p-4 rounded-xl outline-none focus:border-violet-500 md:col-span-2"
        />

        <textarea
          placeholder="Description"
          rows="4"
          value={
            artworkData.description
          }
          onChange={(e) =>
            setArtworkData({
              ...artworkData,
              description:
                e.target.value,
            })
          }
          className="border p-4 rounded-xl outline-none focus:border-violet-500 md:col-span-2 resize-none"
        />

        <input
          type="number"
          placeholder="Starting Price"
          value={
            artworkData.startingPrice
          }
          onChange={(e) =>
            setArtworkData({
              ...artworkData,
              startingPrice:
                e.target.value,
            })
          }
          className="border p-4 rounded-xl outline-none focus:border-violet-500"
        />

        <select
          value={
            artworkData.isAvailable
          }
          onChange={(e) =>
            setArtworkData({
              ...artworkData,
              isAvailable:
                e.target.value ===
                "true",
            })
          }
          className="border p-4 rounded-xl outline-none focus:border-violet-500"
        >
          <option value={true}>
            Available
          </option>

          <option value={false}>
            Unavailable
          </option>
        </select>

      </div>

      <button
        className="w-full mt-6 bg-gradient-to-r from-violet-600 to-pink-500 text-white py-4 rounded-2xl font-semibold hover:scale-[1.02] transition"
        onClick={handleAddArtwork}
      >
        Add Artwork
      </button>

    </div>

  </div>
)}
    </section>
  );
}

export default AdminPage;