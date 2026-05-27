import { Link } from "react-router-dom";

function Pagenotfound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-violet-600 to-pink-500 px-5">
      <div className="max-w-3xl w-full bg-white/10 backdrop-blur-lg rounded-[30px] shadow-2xl p-10 text-center border border-white/20">
        <img
          src="https://media.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
          alt="404 Not Found"
          className="w-full max-w-md mx-auto rounded-3xl shadow-xl mb-8"
        />

        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
          404
        </h1>

        <h2 className="text-3xl font-semibold text-white mb-3">
          Oops! Canvas Missing 🎨
        </h2>

        <p className="text-gray-200 text-lg mb-8 max-w-xl mx-auto">
          The artwork you’re looking for seems to have wandered off the gallery.
          Let’s get you back to ArtConnect.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="px-8 py-3 rounded-full bg-white text-violet-700 font-semibold hover:scale-105 transition"
          >
            Back Home
          </Link>

          <Link
            to="/gallery"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-semibold hover:scale-105 transition shadow-lg"
          >
            Explore Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Pagenotfound;