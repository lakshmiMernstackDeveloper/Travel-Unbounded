export default function DestinationCard({ dest }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border">
      <div className="relative h-48 w-full">
        <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800">{dest.name}</h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{dest.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-orange-600 font-bold">Starting ₹{dest.price}</span>
          <button className="bg-orange-100 text-orange-600 px-4 py-1 rounded text-sm font-semibold hover:bg-orange-600 hover:text-white transition">
            Enquire
          </button>
        </div>
      </div>
    </div>
  );
}