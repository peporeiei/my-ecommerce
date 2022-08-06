import { useState } from "react";

const reducer = (state = production_, action) => {
  switch (action.type) {
    case "GETPRODUCT":
      return {
        ...production,
      };
    case "RESET_GETPRODUCT":
      return {
        ...production_,
      };
    default:
      return state;
  }
};
export default reducer;

const production = {
  isload_production : true,
  status_production : 200,
  total_count: 5,
  result_list: [
    {
      product_name: "ASUS TUF GAMING F15 FX506HC-HN111W",
      product_price: "30,990",
      product_discount: "28,990",
      product_percent: 6,
      product_detail:
        'Intel Core i5-11400H|8GB DDR4 3200MHz|512GB PCIe/NVMe M.2 SSD|15.6" Full HD IPS Anti-Glare 144Hz|NVIDIA GeForce RTX 3050 4 GB GDDR6|Windows 11 Home',
      product_left: 12,
      product_pic:
        "https://dlcdnwebimgs.asus.com/gain/6c49e355-de25-403c-b8c2-eb0ad4cc8a78/",
    },
    {
      product_name: "ASUS TUF GAMING F15 FX506HC-HN111W",
      product_price: "30,990",
      product_discount: "28,990",
      product_percent: 6,
      product_detail:
        'Intel Core i5-11400H|8GB DDR4 3200MHz|512GB PCIe/NVMe M.2 SSD|15.6" Full HD IPS Anti-Glare 144Hz|NVIDIA GeForce RTX 3050 4 GB GDDR6|Windows 11 Home',
      product_left: 12,
      product_pic:
        "https://dlcdnwebimgs.asus.com/gain/6c49e355-de25-403c-b8c2-eb0ad4cc8a78/",
    },
    {
      product_name: "ASUS TUF GAMING F15 FX506HC-HN111W",
      product_price: "30,990",
      product_discount: "28,990",
      product_percent: 6,
      product_detail:
        'Intel Core i5-11400H|8GB DDR4 3200MHz|512GB PCIe/NVMe M.2 SSD|15.6" Full HD IPS Anti-Glare 144Hz|NVIDIA GeForce RTX 3050 4 GB GDDR6|Windows 11 Home',
      product_left: 12,
      product_pic:
        "https://dlcdnwebimgs.asus.com/gain/6c49e355-de25-403c-b8c2-eb0ad4cc8a78/",
    },
    {
      product_name: "ASUS TUF GAMING F15 FX506HC-HN111W",
      product_price: "30,990",
      product_discount: "28,990",
      product_percent: 6,
      product_detail:
        'Intel Core i5-11400H|8GB DDR4 3200MHz|512GB PCIe/NVMe M.2 SSD|15.6" Full HD IPS Anti-Glare 144Hz|NVIDIA GeForce RTX 3050 4 GB GDDR6|Windows 11 Home',
      product_left: 12,
      product_pic:
        "https://dlcdnwebimgs.asus.com/gain/6c49e355-de25-403c-b8c2-eb0ad4cc8a78/",
    },
    {
      product_name: "ASUS TUF GAMING F15 FX506HC-HN111W",
      product_price: "30,990",
      product_discount: "28,990",
      product_percent: 6,
      product_detail:
        'Intel Core i5-11400H|8GB DDR4 3200MHz|512GB PCIe/NVMe M.2 SSD|15.6" Full HD IPS Anti-Glare 144Hz|NVIDIA GeForce RTX 3050 4 GB GDDR6|Windows 11 Home',
      product_left: 12,
      product_pic:
        "https://dlcdnwebimgs.asus.com/gain/6c49e355-de25-403c-b8c2-eb0ad4cc8a78/",
    },
  ],
};

const production_ = {
  total_count: 0,
  result_list: [],
  status_production : 400,
  isload_production : false,
};
