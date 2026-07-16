"use client";
import Map from "@/features/map/components/Map";
import SearchBox from "@/features/map/components/SearchBox";
import { searchLocation } from "@/features/map/services/searchLocation";
import { useState } from "react";

export default function MapFeature() {
  const [position, setPosition] = useState<[number, number]>([
    30.0722502, 31.2861828,
  ]);

  const handleSearch = async (value: string) => {
    const data = await searchLocation(value);

    if (!data.length) return;

    setPosition([Number(data[0].lat), Number(data[0].lon)]);
  };

  return (
    <>
      <SearchBox onSearch={handleSearch} />
      <Map center={position} />
    </>
  );
}
