"use client";

import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { MapProps } from "../types/map-type";

// Move Map when position changes use (useMap)

export default function MapUpdater({ center }: MapProps) {
  const map = useMap();

  useEffect(() => {
    map.flyTo(center, map.getZoom(), {
      animate: true,
      duration: 1.5,
    });
  }, [center, map]);

  return null;
}
