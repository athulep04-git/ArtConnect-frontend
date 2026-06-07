import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyRequestsAPI } from "../services/allAPIs";

function MyRequests() {
  const [allRequests, setAllRequests] =
    useState([]);

  const navigate =
    useNavigate();

  const getMyRequests =
    async () => {

    const token =
      sessionStorage.getItem(
        "token"
      );

    if (!token) {
      navigate("/login");
      return;
    }

    const reqHeader = {
      Authorization:
        `Bearer ${token}`,
    };

    try {
      const response =
        await getMyRequestsAPI(
          reqHeader
        );

      console.log(response);

      if (
        response.status === 200
      ) {
        setAllRequests(
          response.data
        );
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMyRequests();
  }, []);

  const getStatusColor =
    (status) => {

    switch (
      status?.toLowerCase()
    ) {

      case "pending":
        return "bg-yellow-100 text-yellow-700";

      case "approved":
        return "bg-blue-100 text-blue-700";

      case "rejected":
        return "bg-red-100 text-red-700";

      case "in progress":
        return "bg-violet-100 text-violet-700";

      case "completed":
        return "bg-green-100 text-green-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <section className="min-h-screen bg-slate-100 py-10 px-5">
      <div className="max-w-7xl mx-auto">

        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            My Requests
          </h1>

          <p className="text-gray-500 mt-2">
            Track your custom artwork requests
          </p>
        </div>

        {allRequests?.length > 0 ? (

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

            {allRequests.map(
              (item) => (

              <div
                key={item._id}
                className="bg-white rounded-[30px] shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300"
              >

                <img
                  src={
                    item.referenceImage
                  }
                  alt="reference"
                  className="w-full h-[220px] object-cover"
                />

                <div className="p-6">

                  <div className="flex justify-between items-center mb-4">

                    <h2 className="text-xl font-bold">
                      {item.artType}
                    </h2>

                    <span
                      className={`px-4 py-2 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}
                    >
                      {item.status}
                    </span>

                  </div>

                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-3 text-sm">

                    <div className="flex justify-between">
                      <span className="text-gray-500">
                        Budget
                      </span>

                      <span className="font-semibold">
                        ₹{item.budget}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-500">
                        Final Price
                      </span>

                      <span className="font-semibold text-violet-600">
                        ₹{item.price}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-500">
                        Deadline
                      </span>

                      <span>
                        {new Date(
                          item.deadline
                        ).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-gray-500">
                        Payment
                      </span>

                      <span
                        className={`font-medium ${
                          item.paymentStatus ===
                          "paid"
                            ? "text-green-600"
                            : "text-red-500"
                        }`}
                      >
                        {
                          item.paymentStatus
                        }
                      </span>
                    </div>

                  </div>

                  {item.status ===
                    "approved" &&
                    item.price > 0 &&
                    item.paymentStatus ===
                      "pending" && (

                    <button className="w-full mt-5 bg-gradient-to-r from-indigo-500 to-pink-500 text-white py-3 rounded-2xl font-medium">
                      Pay ₹{item.price}
                    </button>
                  )}

                </div>
              </div>
            ))}
          </div>

        ) : (

          <div className="bg-white rounded-[30px] shadow-lg p-12 text-center">
            <h2 className="text-2xl font-bold text-gray-700">
              No Requests Found
            </h2>

            <p className="text-gray-500 mt-2">
              Start by creating your first artwork request
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default MyRequests;