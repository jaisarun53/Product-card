import React from "react";
import "./App.css";
import ProductCard from "./ProductCard";
const ProductList = [
  {
    image:
      "https://www.cgdigital.com.np/api/images/products/lH1KOX_1710220991-65GTVU1.jpg",
    name: `Google TV, 
    4K UHD, 
    HDR10, 
    Google Assistant, 
    2.4G & 5G Wi-Fi, 
    Bezel-Less
    2 Years Comprehensive Warranty, Plus Additional 1 Year Service
    [ Excluding Remote Control, Accessories, Batteries ]`,
    price: 49000,
  },
  {
    image:
      "https://www.cgdigital.com.np/api/images/products/TWmUtN_1646979013-CGCF36AHS.webp",
    name: `Aerodynamically Designed Blades
        High Torque Motor
        Silent Operation
        Sweep -900 mm
        Double Ball Bearing
        2 Years Warranty on Motor
        High Performance on Low Voltage
        100% Copper Motor
        RPM- 665
        Highest Air Delivery`,
    price: 1500,
  },
  {
    image:
      "https://www.cgdigital.com.np/api/images/products/9G1ZXD_1704965413-FV1411S2B-II.jpg",
    name: `AI Direct DriveTM
    TurboWashTM 39min
    Steam+
    Bigger Capacity
    Available with TwinWashTM
    ThinQT
    1 Year Comprehensive Warranty, Including 10 Years on Motor
    ​[ Excluding Outer Steel Casing, Top Lid, Filters, pipes ]`,
    price: 80000,
  },
  {
    image:
      "https://www.cgdigital.com.np/api/images/products/83mNka_1711434633-CGM18CH04.jpg",
    name: `Capacity : 1.5 Ton
    8 in 1 Convertible Modes
    3 in 1 Healthy Filter
    Quiet Duct System
    Wifi Control
    Wide Range Ambient Temperature
    Digital Inverter
    1 Year Comprehensive Warranty, Including 5 Years on Compressor
    [ Excluding Air Filter, Front Grill, Remote ]`,
    price: 92000,
  },
];

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {ProductList.map((item, index, self) => {
        return (
          <ProductCard
            key={index}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        );
      })}
    </div>
  );
};

export default App;
