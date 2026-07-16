"use client";

import dynamic from "next/dynamic";
import { MapProps } from "../types/map-type";

const MapView = dynamic(() => import("./MapView"), {
  ssr: false,
});

export default function Map({ center }: MapProps) {
  return <MapView center={center} />;
}
