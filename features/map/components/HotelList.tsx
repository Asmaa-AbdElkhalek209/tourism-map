import { Hotel } from "../types/hotel";
import HotelCard from "./HotelCard";

type Props = {
  hotels: Hotel[];
  onView: (hotel: Hotel) => void;
};

export default function HotelList({ hotels, onView }: Props) {
  if (!hotels.length) {
    return (
      <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed">
        <div className="text-center">
          <p className="text-5xl">🏨</p>
          <h3 className="mt-3 font-semibold">No Hotels</h3>
          <p className="text-gray-500">
            Click Hotels to display available hotels.
          </p>
        </div>
      </div>
    );
  }
  return (
    <aside
      className="
        w-full
        lg:w-85
        xl:w-95
        shrink-0
      "
    >
      <div
        className="
          max-h-150
          overflow-y-auto
          rounded-2xl
          bg-[#F8FCFC]
          p-4
          shadow-lg
        "
      >
        <div className="space-y-4">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} onView={onView} />
          ))}
        </div>
      </div>
    </aside>
  );
}
