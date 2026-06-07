import { useEffect, useState } from "react";
import {
  addArtworkAPI,
  deleteArtworkAPI,
  getAllRequestsAPI,
  getArtworksAPI,
  getUsersAPI,
  updateArtworkAPI,
} from "../../services/allAPIs";

function AdminPage() {
  const [activePage, setActivePage] = useState("dashboard");
  const [showModal, setShowModal] = useState(false);
  const [allArtworks, setAllArtworks] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [editId, setEditId] = useState("");
  const [allRequests, setAllRequests] = useState([]);
  const [artworkData, setArtworkData] = useState({
    title: "",
    description: "",
    category: "",
    image: "",
    startingPrice: "",
    isAvailable: "",
  });
  const getAllArtworks = async () => {
    try {
      const response = await getArtworksAPI();
      console.log(response);
      if (response.status === 200) {
        setAllArtworks(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const getAllUsers = async () => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await getUsersAPI(reqHeader);
      console.log(response);
      if (response.status === 200) {
        setAllUsers(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getAllRequests = async () => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await getAllRequestsAPI(reqHeader);
      console.log(response);
      if (response.status === 200) {
        setAllRequests(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleAddArtwork = async () => {
    const { title, description, category, image, startingPrice } = artworkData;

    if (!title || !description || !category || !image || !startingPrice) {
      alert("Please fill all fields");
      return;
    }

    const token = sessionStorage.getItem("token");

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const formData = new FormData();

    formData.append("title", artworkData.title);

    formData.append("description", artworkData.description);

    formData.append("category", artworkData.category);

    formData.append("startingPrice", artworkData.startingPrice);

    formData.append("isAvailable", artworkData.isAvailable);

    formData.append("image", artworkData.image);

    try {
      const response = await addArtworkAPI(formData, reqHeader);

      console.log(response);

      if (response.status === 200) {
        alert("Artwork added successfully");

        setShowModal(false);

        getAllArtworks();

        setArtworkData({
          title: "",
          description: "",
          category: "",
          image: "",
          startingPrice: "",
          isAvailable: "",
        });
      }
    } catch (err) {
      console.log(err);
      alert("Failed to add artwork");
    }
  };
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Delete artwork?");
    if (!confirmDelete) {
      return;
    }
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await deleteArtworkAPI(id, reqHeader);
      console.log(response);
      if (response.status === 200) {
        alert("Artwork deleted");
        getAllArtworks();
      }
    } catch (err) {
      console.log(err);
      alert("Delete failed");
    }
  };
  const handleUpdateArtwork = async () => {
    const token = sessionStorage.getItem("token");

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };

    const formData = new FormData();

    formData.append("title", artworkData.title);

    formData.append("description", artworkData.description);

    formData.append("category", artworkData.category);

    formData.append("startingPrice", artworkData.startingPrice);

    formData.append("isAvailable", artworkData.isAvailable);

    if (artworkData.image instanceof File) {
      formData.append("image", artworkData.image);
    }

    try {
      const response = await updateArtworkAPI(editId, formData, reqHeader);

      console.log(response);

      if (response.status === 200) {
        alert("Artwork updated");

        setShowModal(false);

        setEditId("");

        getAllArtworks();

        setArtworkData({
          title: "",
          description: "",
          category: "",
          image: "",
          startingPrice: "",
          isAvailable: "",
        });
      }
    } catch (err) {
      console.log(err);

      alert("Update failed");
    }
  };
  useEffect(() => {
    getAllUsers();
    getAllArtworks();
    getAllRequests();
  }, []);
  return (
    <section className="min-h-screen bg-slate-100 flex">
      <aside className="w-[260px] bg-gradient-to-b from-violet-600 via-indigo-600 to-pink-500 min-h-screen shadow-xl p-5 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[28px] p-6 text-center shadow-lg">
          <div className="w-20 h-20 bg-white rounded-full mx-auto flex items-center justify-center text-4xl shadow-md">
            🎨
          </div>

          <h2 className="text-2xl font-bold text-white mt-4">Admin Panel</h2>

          <p className="text-indigo-100 text-sm mt-1">ArtConnect</p>
        </div>

        <nav className="mt-10 space-y-3">
          <button
            onClick={() => setActivePage("dashboard")}
            className={`w-full flex items-center gap-4 text-base font-medium px-5 py-4 rounded-2xl transition ${
              activePage === "dashboard"
                ? "bg-white text-violet-700 shadow-md"
                : "text-white hover:bg-white/10"
            }`}
          >
            📊 Dashboard
          </button>

          <button
            onClick={() => setActivePage("artworks")}
            className={`w-full flex items-center gap-4 text-base font-medium px-5 py-4 rounded-2xl transition ${
              activePage === "artworks"
                ? "bg-white text-violet-700 shadow-md"
                : "text-white hover:bg-white/10"
            }`}
          >
            🖼 Artworks
          </button>

          <button
            onClick={() => setActivePage("users")}
            className={`w-full flex items-center gap-4 text-base font-medium px-5 py-4 rounded-2xl transition ${
              activePage === "users"
                ? "bg-white text-violet-700 shadow-md"
                : "text-white hover:bg-white/10"
            }`}
          >
            👥 Users
          </button>

          <button
            onClick={() => setActivePage("requests")}
            className={`w-full flex items-center gap-4 text-base font-medium px-5 py-4 rounded-2xl transition ${
              activePage === "requests"
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
          <h1 className="text-4xl font-bold capitalize">{activePage}</h1>

          <p className="mt-2 text-base text-indigo-100">Manage platform data</p>
        </div>
        {activePage === "dashboard" && (
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">
            <div className="bg-blue-500 rounded-[25px] p-5 text-white shadow-lg">
              <h4 className="text-sm font-medium opacity-90">TOTAL ARTWORKS</h4>

              <h1 className="text-4xl font-bold mt-3">{allArtworks.length}</h1>
            </div>

            <div className="bg-green-600 rounded-[25px] p-5 text-white shadow-lg">
              <h4 className="text-sm font-medium opacity-90">AVAILABLE</h4>

              <h1 className="text-4xl font-bold mt-3">
                {allArtworks.filter((item) => item.isAvailable).length}
              </h1>
            </div>

            <div className="bg-red-500 rounded-[25px] p-5 text-white shadow-lg">
              <h4 className="text-sm font-medium opacity-90">UNAVAILABLE</h4>

              <h1 className="text-4xl font-bold mt-3">
                {allArtworks.filter((item) => !item.isAvailable).length}
              </h1>
            </div>

            <div className="bg-slate-600 rounded-[25px] p-5 text-white shadow-lg">
              <h4 className="text-sm font-medium opacity-90">USERS</h4>

              <h1 className="text-4xl font-bold mt-3">{allUsers.length}</h1>
            </div>
          </div>
        )}
        {activePage === "artworks" && (
          <div className="bg-white rounded-[30px] shadow-xl mt-8 p-7">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Artwork Management
              </h2>

              <button
                onClick={() => {
                  setEditId("");

                  setArtworkData({
                    title: "",
                    description: "",
                    category: "",
                    image: "",
                    startingPrice: "",
                    isAvailable: true,
                  });

                  setShowModal(true);
                }}
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
                  {allArtworks?.length > 0 ? (
                    allArtworks.map((item) => (
                      <tr
                        key={item._id}
                        className="border-b hover:bg-slate-50 transition"
                      >
                        <td className="p-4">
                          <img
                            src={item.image}
                            alt="artwork"
                            className="w-16 h-16 rounded-2xl object-cover"
                          />
                        </td>

                        <td className="p-4 font-medium">{item.title}</td>

                        <td className="p-4">{item.category}</td>

                        <td className="p-4 text-pink-500 font-semibold">
                          ₹{item.startingPrice}
                        </td>

                        <td className="p-4">
                          <span
                            className={`px-4 py-2 rounded-full text-xs font-medium ${
                              item.isAvailable
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {item.isAvailable ? "Available" : "Unavailable"}
                          </span>
                        </td>

                        <td className="p-4">
                          <div className="flex justify-center gap-3">
                            <button
                              onClick={() => {
                                setShowModal(true);
                                setEditId(item._id);
                                setArtworkData({
                                  title: item.title,
                                  description: item.description,
                                  category: item.category,
                                  image: item.image,
                                  startingPrice: item.startingPrice,
                                  isAvailable: item.isAvailable,
                                });
                              }}
                              className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-xl"
                            >
                              ✏️ Edit
                            </button>

                            <button
                              onClick={() => handleDelete(item._id)}
                              className="bg-red-100 text-red-600 px-4 py-2 rounded-xl"
                            >
                              🗑 Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="text-center p-6">
                        No artworks found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activePage === "users" && (
          <div className="bg-white rounded-[30px] shadow-xl mt-8 p-7">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Users Management
              </h2>

              <div className="bg-violet-100 text-violet-700 px-4 py-2 rounded-xl font-medium">
                Total Users: {allUsers.length}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-4 text-sm font-semibold text-gray-700">
                      #
                    </th>

                    <th className="p-4 text-sm font-semibold text-gray-700">
                      Username
                    </th>

                    <th className="p-4 text-sm font-semibold text-gray-700">
                      Email
                    </th>

                    <th className="p-4 text-sm font-semibold text-gray-700">
                      Phone
                    </th>

                    <th className="p-4 text-sm font-semibold text-gray-700">
                      Role
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {allUsers?.length > 0 ? (
                    allUsers.map((user, index) => (
                      <tr
                        key={user._id}
                        className="border-b hover:bg-slate-50 transition"
                      >
                        <td className="p-4">{index + 1}</td>

                        <td className="p-4 font-medium">{user.username}</td>

                        <td className="p-4">{user.email}</td>

                        <td className="p-4">{user.phone}</td>

                        <td className="p-4">
                          <span
                            className={`px-4 py-2 rounded-full text-xs font-medium ${
                              user.role === "artist"
                                ? "bg-violet-100 text-violet-700"
                                : "bg-slate-100 text-slate-700"
                            }`}
                          >
                            {user.role}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center p-6 text-gray-500">
                        No users found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {activePage === "requests" && (
          <div className="bg-white rounded-[30px] shadow-xl mt-8 p-7">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Request Management
              </h2>

              <div className="bg-violet-100 text-violet-700 px-4 py-2 rounded-xl font-medium">
                Total Requests: {allRequests.length}
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-4">Image</th>

                    <th className="p-4">User</th>

                    <th className="p-4">Art Type</th>

                    <th className="p-4">Budget</th>

                    <th className="p-4">Deadline</th>

                    <th className="p-4">Status</th>

                    <th className="p-4">Payment</th>
                  </tr>
                </thead>

                <tbody>
                  {allRequests?.length > 0 ? (
                    allRequests.map((item, index) => (
                      <tr
                        key={item._id}
                        className="border-b hover:bg-slate-50 transition"
                      >
                        <td className="p-4">
                          <img
                            src={item.referenceImage}
                            alt="request"
                            className="w-16 h-16 rounded-2xl object-cover"
                          />
                        </td>

                        <td className="p-4">
                          <h4 className="font-medium">
                            {item.userId?.username}
                          </h4>

                          <p className="text-sm text-gray-500">
                            {item.userId?.email}
                          </p>
                        </td>

                        <td className="p-4 font-medium">{item.artType}</td>

                        <td className="p-4 text-pink-500 font-semibold">
                          ₹{item.budget}
                        </td>

                        <td className="p-4">
                          {new Date(item.deadline).toLocaleDateString()}
                        </td>

                        <td className="p-4">
                          <span
                            className={`px-4 py-2 rounded-full text-xs font-medium ${
                              item.status === "pending"
                                ? "bg-yellow-100 text-yellow-700"
                                : item.status === "approved"
                                  ? "bg-blue-100 text-blue-700"
                                  : item.status === "completed"
                                    ? "bg-green-100 text-green-700"
                                    : item.status === "rejected"
                                      ? "bg-red-100 text-red-700"
                                      : "bg-violet-100 text-violet-700"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>

                        <td className="p-4">
                          <span
                            className={`px-4 py-2 rounded-full text-xs font-medium ${
                              item.paymentStatus === "paid"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {item.paymentStatus}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="text-center p-6 text-gray-500">
                        No requests found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
      {showModal && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 px-5">
          <div className="bg-white w-full max-w-2xl rounded-[30px] p-8 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">
                {editId ? "Edit Artwork" : "Add Artwork"}
              </h2>

              <button onClick={() => setShowModal(false)} className="text-2xl">
                ✕
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Title"
                value={artworkData.title}
                onChange={(e) =>
                  setArtworkData({ ...artworkData, title: e.target.value })
                }
                className="border p-4 rounded-xl outline-none focus:border-violet-500"
              />

              <input
                type="text"
                placeholder="Category"
                value={artworkData.category}
                onChange={(e) =>
                  setArtworkData({ ...artworkData, category: e.target.value })
                }
                className="border p-4 rounded-xl outline-none focus:border-violet-500"
              />

              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setArtworkData({
                    ...artworkData,
                    image: e.target.files[0],
                  })
                }
                className="border p-4 rounded-xl outline-none focus:border-violet-500 md:col-span-2"
              />

              <textarea
                placeholder="Description"
                rows="4"
                value={artworkData.description}
                onChange={(e) =>
                  setArtworkData({
                    ...artworkData,
                    description: e.target.value,
                  })
                }
                className="border p-4 rounded-xl outline-none focus:border-violet-500 md:col-span-2 resize-none"
              />

              <input
                type="number"
                placeholder="Starting Price"
                value={artworkData.startingPrice}
                onChange={(e) =>
                  setArtworkData({
                    ...artworkData,
                    startingPrice: e.target.value,
                  })
                }
                className="border p-4 rounded-xl outline-none focus:border-violet-500"
              />

              <select
                value={artworkData.isAvailable}
                onChange={(e) =>
                  setArtworkData({
                    ...artworkData,
                    isAvailable: e.target.value === "true",
                  })
                }
                className="border p-4 rounded-xl outline-none focus:border-violet-500"
              >
                <option value={true}>Available</option>

                <option value={false}>Unavailable</option>
              </select>
            </div>

            <button
              className="w-full mt-6 bg-gradient-to-r from-violet-600 to-pink-500 text-white py-4 rounded-2xl font-semibold hover:scale-[1.02] transition"
              onClick={editId ? handleUpdateArtwork : handleAddArtwork}
            >
              {editId ? "Update Artwork" : "Add Artwork"}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default AdminPage;
