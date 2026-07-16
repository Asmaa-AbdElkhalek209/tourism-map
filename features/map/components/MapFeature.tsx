"use client";

import { useState } from "react";

import Map from "@/features/map/components/Map";
import SearchBox from "@/features/map/components/SearchBox";
import Toolbar from "@/features/map/components/Toolbar";
import HotelFilter from "@/features/map/components/HotelFilter";
import HotelList from "./HotelList";

import { hotels as mockHotels } from "@/features/map/data/hotels";
import { Hotel } from "@/features/map/types/hotel";

import { searchLocation } from "@/features/map/services/searchLocation";

export default function MapFeature() {
  const [center, setCenter] = useState<[number, number]>([
    30.0722502, 31.2861828,
  ]);

  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [filter, setFilter] = useState("All");

  const handleSearch = async (value: string) => {
    const data = await searchLocation(value);

    if (!data.length) return;

    setCenter([Number(data[0].lat), Number(data[0].lon)]);
  };

  const handleShowHotels = () => {
    setHotels(mockHotels);
  };

  const handleViewHotel = (hotel: Hotel) => {
    setCenter(hotel.location);
  };

  const filteredHotels =
    filter === "All" ? hotels : hotels.filter((hotel) => hotel.type === filter);

  return (
    <div className="w-full p-5">
      <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center">
        <Toolbar onShowHotels={handleShowHotels} />
        {hotels.length > 0 && (
          <HotelFilter value={filter} onChange={setFilter} />
        )}

        <SearchBox onSearch={handleSearch} />
      </div>

      <div className="mt-6 flex flex-col gap-5 lg:flex-row">
        {filteredHotels.length > 0 && (
          <HotelList hotels={filteredHotels} onView={handleViewHotel} />
        )}

        <div className="flex-1">
          <Map center={center} hotels={filteredHotels} />
        </div>
      </div>
    </div>
  );
}
