"use client";

type HotelFilterProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function HotelFilter({ value, onChange }: HotelFilterProps) {
  return (
    <div className="mb-5 flex items-center gap-3">
      <label className="font-semibold text-gray-700">النوع</label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-[#B8E3E8] bg-white px-4 py-2 outline-none focus:border-[#1fa7b9]"
      >
        <option value="All">الكل</option>
        <option value="Hotel">Hotels</option>
        <option value="Resort">Resorts</option>
      </select>
    </div>
  );
}
