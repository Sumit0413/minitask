function Appli({ data }) {
  const { image, SongName, Artist } = data; // Destructure all required properties

  return (
    <div className="bg-zinc-200 w-80 h-56 rounded-xl mt-20 ml-5">
      <div className="flex justify-center gap-8 pt-6">
        {/* Image Container */}
        <div className="bg-orange-500 w-32 h-32 rounded-xl overflow-hidden">
          <img
            src={image}
            alt={SongName}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Song and Artist Details */}
        <div>
          <h2 className="text-2xl pt-6 font-semibold">{SongName}</h2>
          <h3 className="text-gray-600">{Artist}</h3>
        </div>
      </div>
      {/* Button */}
      <button className="bg-orange-500 text-white rounded-full w-32 h-10 mt-6 ml-20">
        Add to Favorite
      </button>
    </div>
  );
}

export default Appli;
