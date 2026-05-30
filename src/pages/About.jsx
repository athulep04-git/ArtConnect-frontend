function About() {
  return (
    <>

      {/* Hero Section */}
      <section
        className="bg-cover bg-center py-32 px-5 text-center text-white relative"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1541961017774-22349e4a1262')",
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold">
            About ArtConnect
          </h1>

          <p className="text-xl mt-5 text-gray-200">
            Connecting imagination with artistic excellence through custom artwork commissions
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">

          <img
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f"
            alt="about"
            className="w-full rounded-3xl shadow-2xl"
          />

          <div>
            <h2 className="text-4xl font-bold mb-5">
              Bringing Your Ideas to Life
            </h2>

            <p className="text-gray-600 leading-8 mb-4">
              ArtConnect is a platform where clients can request custom artwork directly from a professional artist.
              Whether it's portraits, landscapes, or watercolor paintings, every piece is created with passion and precision.
            </p>

            <p className="text-gray-600 leading-8">
              Our goal is to make commissioning artwork simple, transparent, and enjoyable.
            </p>
          </div>

        </div>
      </section>

      {/* Artist Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-5">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">
              Meet the Artist
            </h2>

            <p className="text-gray-500 mt-3">
              Passion, creativity, and dedication behind every artwork
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-center">

            {/* Artist */}
            <div className="text-center">
              <img
                src="https://media.licdn.com/dms/image/v2/D5635AQHbDeOemUCwIg/profile-framedphoto-shrink_400_400/B56Z5FGTkaJwAg-/0/1779275742083?e=1780743600&v=beta&t=RQP_S51hA4eziv9WhSd7v34R6lor_xOSJoJDkGK1bIg"
                alt="artist"
                className="w-52 h-52 rounded-full object-cover border-[5px] border-white shadow-2xl mx-auto"
              />

              <h4 className="text-2xl font-bold mt-5">
                Athul Krishna
              </h4>

              <p className="text-gray-500">
                Freelance Visual Artist
              </p>
            </div>

            {/* Specialties */}
            <div className="bg-white rounded-3xl shadow-xl p-8 h-full">
              <h4 className="text-2xl font-bold mb-5">
                🎨 Specialties
              </h4>

              <ul className="space-y-3 text-gray-600">
                <li>Portrait Drawing</li>
                <li>Landscape Painting</li>
                <li>Watercolor Art</li>
                <li>Digital Illustration</li>
              </ul>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-3xl shadow-xl p-8 h-full">
              <h4 className="text-2xl font-bold mb-5">
                ⭐ Experience
              </h4>

              <ul className="space-y-3 text-gray-600">
                <li>3+ Years Experience</li>
                <li>100+ Completed Artworks</li>
                <li>50+ Happy Clients</li>
                <li>Freelance Commission Artist</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 gap-8">

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600">
              To provide a seamless platform for clients to commission meaningful artwork.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600">
              To become a trusted hub connecting artists and art lovers worldwide.
            </p>
          </div>

        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">

          <h2 className="text-4xl font-bold text-center mb-14">
            How ArtConnect Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                step: "1",
                title: "Submit Request",
                desc: "Clients submit artwork requirements and reference images",
              },
              {
                step: "2",
                title: "Approve & Pay",
                desc: "Artist reviews, sets price, and client confirms payment",
              },
              {
                step: "3",
                title: "Receive Artwork",
                desc: "Artwork is created and delivered professionally",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl p-8 text-center hover:-translate-y-3 transition duration-300"
              >
                <h1 className="text-6xl font-bold text-indigo-500 mb-4">
                  {item.step}
                </h1>

                <h5 className="text-2xl font-bold mb-3">
                  {item.title}
                </h5>

                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

    </>
  );
}

export default About;