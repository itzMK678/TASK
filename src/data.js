import bodyKit from "../src/assets/Kit.png";
import engine from "../src/assets/Engine.png";
import brake from "../src/assets/Brake.png";
import suspension from "../src/assets/Suspension.png";
import alloyWheel from "../src/assets/Rim.png";
import headlight from "../src/assets/Headlight.png";
import exhaust from "../src/assets/Exhaust.png";
import battery from "../src/assets/Battery.png";
import seatCover from "../src/assets/Seat.png";
import spoiler from "../src/assets/Spoiler.png";

// data.js

const products = [
  // =========================
  // BODY KITS
  // =========================
  {
    id: 1,
    name: "Sport Body Kit",
    type: "body-kits",
    image: bodyKit,
    city: "Lahore",
    vehicle: "Toyota Corolla",
    modelYear: "2020-2024",
    weight: "18 kg",
    discountPercent: 15,
    cutPrice: 85000,
    realPrice: 72250,
  },

  {
    id: 2,
    name: "Front Bumper Body Kit",
    type: "body-kits",
    image: bodyKit,
    city: "Karachi",
    vehicle: "Honda Civic",
    modelYear: "2019-2024",
    weight: "12 kg",
    discountPercent: 10,
    cutPrice: 45000,
    realPrice: 40500,
  },

  // =========================
  // ENGINE PARTS
  // =========================
  {
    id: 3,
    name: "Performance Air Intake",
    type: "engine-parts",
    image: engine,
    city: "Islamabad",
    vehicle: "Universal",
    modelYear: "2018-2025",
    weight: "4 kg",
    discountPercent: 12,
    cutPrice: 32000,
    realPrice: 28160,
  },

  {
    id: 4,
    name: "Engine Oil Filter",
    type: "engine-parts",
    image: engine,
    city: "Lahore",
    vehicle: "Toyota / Honda",
    modelYear: "2018-2025",
    weight: "0.5 kg",
    discountPercent: 8,
    cutPrice: 4500,
    realPrice: 4140,
  },

  {
    id: 5,
    name: "Performance Spark Plugs",
    type: "engine-parts",
    image: engine,
    city: "Rawalpindi",
    vehicle: "Universal",
    modelYear: "2015-2025",
    weight: "1 kg",
    discountPercent: 15,
    cutPrice: 8500,
    realPrice: 7225,
  },

  // =========================
  // BRAKES
  // =========================
  {
    id: 6,
    name: "Performance Brake Pads",
    type: "brakes",
    image: brake,
    city: "Faisalabad",
    vehicle: "Honda Civic",
    modelYear: "2019-2024",
    weight: "3 kg",
    discountPercent: 10,
    cutPrice: 18000,
    realPrice: 16200,
  },

  {
    id: 7,
    name: "Ventilated Brake Disc",
    type: "brakes",
    image: brake,
    city: "Karachi",
    vehicle: "Toyota Corolla",
    modelYear: "2020-2024",
    weight: "7 kg",
    discountPercent: 12,
    cutPrice: 28000,
    realPrice: 24640,
  },

  // =========================
  // SUSPENSION
  // =========================
  {
    id: 8,
    name: "Adjustable Coilover Suspension",
    type: "suspension",
    image: suspension,
    city: "Lahore",
    vehicle: "Universal",
    modelYear: "2018-2025",
    weight: "22 kg",
    discountPercent: 20,
    cutPrice: 95000,
    realPrice: 76000,
  },

  {
    id: 9,
    name: "Performance Shock Absorbers",
    type: "suspension",
    image: suspension,
    city: "Multan",
    vehicle: "Toyota Corolla",
    modelYear: "2019-2024",
    weight: "14 kg",
    discountPercent: 15,
    cutPrice: 55000,
    realPrice: 46750,
  },

  // =========================
  // WHEELS
  // =========================
  {
    id: 10,
    name: "18 Inch Alloy Wheels",
    type: "wheels",
    image: alloyWheel,
    city: "Islamabad",
    vehicle: "Universal",
    modelYear: "2018-2025",
    weight: "36 kg",
    discountPercent: 18,
    cutPrice: 120000,
    realPrice: 98400,
  },

  {
    id: 11,
    name: "Sport Racing Wheels",
    type: "wheels",
    image: alloyWheel,
    city: "Karachi",
    vehicle: "Universal",
    modelYear: "2018-2025",
    weight: "32 kg",
    discountPercent: 10,
    cutPrice: 100000,
    realPrice: 90000,
  },

  // =========================
  // LIGHTING
  // =========================
  {
    id: 12,
    name: "LED Headlight Kit",
    type: "lighting",
    image: headlight,
    city: "Lahore",
    vehicle: "Toyota / Honda",
    modelYear: "2018-2025",
    weight: "2 kg",
    discountPercent: 15,
    cutPrice: 25000,
    realPrice: 21250,
  },

  {
    id: 13,
    name: "LED Fog Light",
    type: "lighting",
    image: headlight,
    city: "Rawalpindi",
    vehicle: "Universal",
    modelYear: "2018-2025",
    weight: "1.5 kg",
    discountPercent: 10,
    cutPrice: 12000,
    realPrice: 10800,
  },

  // =========================
  // EXHAUST
  // =========================
  {
    id: 14,
    name: "Performance Exhaust System",
    type: "exhaust",
    image: exhaust,
    city: "Lahore",
    vehicle: "Honda Civic",
    modelYear: "2019-2024",
    weight: "15 kg",
    discountPercent: 20,
    cutPrice: 85000,
    realPrice: 68000,
  },

  {
    id: 15,
    name: "Sport Exhaust Muffler",
    type: "exhaust",
    image: exhaust,
    city: "Karachi",
    vehicle: "Universal",
    modelYear: "2018-2025",
    weight: "8 kg",
    discountPercent: 12,
    cutPrice: 35000,
    realPrice: 30800,
  },

  // =========================
  // ELECTRICAL
  // =========================
  {
    id: 16,
    name: "High Performance Car Battery",
    type: "electrical",
    image: battery,
    city: "Islamabad",
    vehicle: "Universal",
    modelYear: "2020-2025",
    weight: "18 kg",
    discountPercent: 10,
    cutPrice: 28000,
    realPrice: 25200,
  },

  {
    id: 17,
    name: "Car Alternator",
    type: "electrical",
    image: battery,
    city: "Faisalabad",
    vehicle: "Toyota Corolla",
    modelYear: "2018-2023",
    weight: "7 kg",
    discountPercent: 8,
    cutPrice: 42000,
    realPrice: 38640,
  },

  // =========================
  // INTERIOR ACCESSORIES
  // =========================
  {
    id: 18,
    name: "Premium Leather Seat Covers",
    type: "interior",
    image: seatCover,
    city: "Lahore",
    vehicle: "Universal",
    modelYear: "2018-2025",
    weight: "6 kg",
    discountPercent: 15,
    cutPrice: 22000,
    realPrice: 18700,
  },

  {
    id: 19,
    name: "Car Floor Mat Set",
    type: "interior",
    image: seatCover,
    city: "Multan",
    vehicle: "Toyota Corolla",
    modelYear: "2020-2024",
    weight: "4 kg",
    discountPercent: 10,
    cutPrice: 8500,
    realPrice: 7650,
  },

  // =========================
  // EXTERIOR ACCESSORIES
  // =========================
  {
    id: 20,
    name: "Carbon Fiber Rear Spoiler",
    type: "exterior",
    image: spoiler,
    city: "Islamabad",
    vehicle: "Honda Civic",
    modelYear: "2019-2024",
    weight: "3 kg",
    discountPercent: 18,
    cutPrice: 30000,
    realPrice: 24600,
  },

  {
    id: 21,
    name: "Side Mirror Cover",
    type: "exterior",
    image: spoiler,
    city: "Karachi",
    vehicle: "Universal",
    modelYear: "2018-2025",
    weight: "1 kg",
    discountPercent: 10,
    cutPrice: 7000,
    realPrice: 6300,
  },

  // =========================
  // CAR ACCESSORIES
  // =========================
  {
    id: 22,
    name: "Wireless Car Charger",
    type: "accessories",
    image: battery,
    city: "Lahore",
    vehicle: "Universal",
    modelYear: "2020-2025",
    weight: "0.8 kg",
    discountPercent: 20,
    cutPrice: 7500,
    realPrice: 6000,
  },

  {
    id: 23,
    name: "Premium Car Air Freshener",
    type: "accessories",
    image: seatCover,
    city: "Rawalpindi",
    vehicle: "Universal",
    modelYear: "Universal",
    weight: "0.3 kg",
    discountPercent: 5,
    cutPrice: 2500,
    realPrice: 2375,
  },

  {
    id: 24,
    name: "Car Dashboard Camera",
    type: "accessories",
    image: battery,
    city: "Faisalabad",
    vehicle: "Universal",
    modelYear: "2020-2025",
    weight: "0.7 kg",
    discountPercent: 15,
    cutPrice: 18000,
    realPrice: 15300,
  },
];

export default products;