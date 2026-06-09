function Home() {
  return (
    <>


      <section
        className="min-h-[90vh] bg-cover bg-center flex items-center relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1513364776144-60967b0f800f')",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">

          <div className="text-white">
            <span className="inline-block bg-gradient-to-r from-indigo-500 to-pink-500 px-5 py-2 rounded-full text-sm font-semibold mb-4">
              ✨ BY EXPERT ARTIST
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Art That Connects <br />

              <span className="bg-gradient-to-r from-pink-500 to-blue-600 bg-clip-text text-transparent">
                Hearts
              </span>
            </h1>

            <p className="mt-5 text-lg text-gray-200 max-w-lg">
              Commission beautiful, hand-crafted artwork tailored to your imagination.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-indigo-500 to-pink-500 px-6 py-3 rounded-full text-white font-medium hover:scale-105 transition">
                Commission Artwork →
              </button>

              <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
                Explore Gallery
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968"
              alt="Hero"
              className="rounded-3xl shadow-2xl w-full max-w-md"
            />
          </div>
        </div>
      </section>


      <section className="bg-gradient-to-br from-indigo-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold mb-12">
            Experience Art Seamlessly
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div>
              <div className="w-18 h-18 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-3xl text-white">
                🔍
              </div>

              <h4 className="font-bold text-xl mt-5">
                Discover
              </h4>

              <p className="text-gray-600 mt-2">
                Explore curated artwork
              </p>
            </div>

            <div>
              <div className="w-18 h-18 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-3xl text-white">
                💬
              </div>

              <h4 className="font-bold text-xl mt-5">
                Connect
              </h4>

              <p className="text-gray-600 mt-2">
                Collaborate with artist
              </p>
            </div>

            <div>
              <div className="w-18 h-18 mx-auto rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center text-3xl text-white">
                🎨
              </div>

              <h4 className="font-bold text-xl mt-5">
                Create
              </h4>

              <p className="text-gray-600 mt-2">
                Bring imagination to life
              </p>
            </div>

          </div>
        </div>
      </section>

     <section className="py-20">
  <div className="max-w-7xl mx-auto px-4">

    <h2 className="text-center text-4xl font-bold mb-12">
      Featured Works
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="rounded-3xl overflow-hidden shadow-lg hover:-translate-y-3 transition duration-300">
        <img
          src="src\assets\1.jpg"
          alt="Portrait"
          className="h-[300px] w-full object-cover"
        />

        <div className="p-5 text-center bg-white">
          <h3 className="text-xl font-bold">
            Portrait
          </h3>
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden shadow-lg hover:-translate-y-3 transition duration-300">
        <img
          src="src\assets\3.jpg"
          alt="wall art"
          className="h-[300px] w-full object-cover"
        />

        <div className="p-5 text-center bg-white">
          <h3 className="text-xl font-bold">
            Wall art
          </h3>
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden shadow-lg hover:-translate-y-3 transition duration-300">
        <img
          src="src\assets\2.jpg"
          alt="Watercolor"
          className="h-[300px] w-full object-cover"
        />

        <div className="p-5 text-center bg-white">
          <h3 className="text-xl font-bold">
            Watercolor
          </h3>
        </div>
      </div>

    </div>
  </div>
</section>

    
      <section className="bg-gradient-to-br from-indigo-50 via-pink-50 to-white py-20">
  <div className="max-w-7xl mx-auto px-4">

    <div className="text-center mb-14">
      <h2 className="text-4xl font-bold">
        What Our Clients Say
      </h2>

      <p className="text-gray-500 mt-2">
        Trusted by art lovers around the world
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-lg p-6 text-center hover:-translate-y-3 transition">
        <img
          src="https://i.pravatar.cc/120?img=32"
          alt="Sarah"
          className="w-20 h-20 rounded-full border-4 border-indigo-500 object-cover mx-auto mb-4"
        />

        <p className="italic text-gray-600">
          "Absolutely stunning portrait. The detailing and emotion captured were beyond my expectations."
        </p>

        <h4 className="font-bold mt-4">
          Sarah Johnson
        </h4>

        <small className="text-gray-500">
          Portrait Client
        </small>

        <div className="text-yellow-500 text-xl mt-2">
          ★★★★★
        </div>
      </div>

      <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-lg p-6 text-center hover:-translate-y-3 transition">
        <img
          src="https://i.pravatar.cc/120?img=12"
          alt="David"
          className="w-20 h-20 rounded-full border-4 border-indigo-500 object-cover mx-auto mb-4"
        />

        <p className="italic text-gray-600">
          "Professional service and incredible landscape artwork. Highly recommend ArtConnect."
        </p>

        <h4 className="font-bold mt-4">
          David Miller
        </h4>

        <small className="text-gray-500">
          Landscape Client
        </small>

        <div className="text-yellow-500 text-xl mt-2">
          ★★★★★
        </div>
      </div>

      <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-lg p-6 text-center hover:-translate-y-3 transition">
        <img
          src="https://i.pravatar.cc/120?img=45"
          alt="Emma"
          className="w-20 h-20 rounded-full border-4 border-indigo-500 object-cover mx-auto mb-4"
        />

        <p className="italic text-gray-600">
          "The watercolor artwork was breathtaking. Will definitely commission again."
        </p>

        <h4 className="font-bold mt-4">
          Emma Wilson
        </h4>

        <small className="text-gray-500">
          Watercolor Client
        </small>

        <div className="text-yellow-500 text-xl mt-2">
          ★★★★★
        </div>
      </div>

    </div>
  </div>
</section>

      <section className="bg-gradient-to-r from-indigo-500 to-pink-500 py-20 text-center text-white">
        <h2 className="text-4xl font-bold">
          Ready to Commission Your Artwork?
        </h2>

        <button className="bg-white text-black px-8 py-3 rounded-full mt-6 font-medium hover:bg-gray-200 transition">
          Get Started
        </button>
      </section>

    </>
  );
}

export default Home;