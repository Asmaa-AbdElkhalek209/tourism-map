"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
import "../lib/fixLeafletIcon";
const MapView = () => {
  const companyLocation: [number, number] = [30.0444, 31.2357];
  return (
    <MapContainer
      center={companyLocation}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={companyLocation}>
        <Popup>
          <div>
            <h3>برج مصر لسياحة</h3>
            <p>Cairo, Egypt</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;

//  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" //دي الـ URL اللي Leaflet بيجيب منه صور الخريطة
//center={[30.0444, 31.2357]} //ده الـ Latitude والـ Longitude ارقام ثابته للوكيشن بعد كدا هجبها من api
// TileLayer;

// الخريطة نفسها عبارة عن صور صغيرة جدًا اسمها Tiles.

// لما تعملي Zoom، المكتبة بتحميل Tiles جديدة.

// فـ TileLayer هو اللي بيجيب الصور دي من OpenStreetMap.
