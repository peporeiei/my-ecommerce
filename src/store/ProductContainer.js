import { connect } from "react-redux";

// export function getProduct() {
//    return {
//       type: 'GETPRODUCT',
//    }
// }
// export function resetGetProduct() {
//   return { type: 'RESET_GETPRODUCT' }
// }

// const Product = (state) => {
//    console.log(state)
//    return (dispatch) => {
// 		dispatch(getProduct(state));
//       dispatch(resetGetProduct(state));
// 	}
// }

//  export { Product };

export const GETPRODUCT = "GETPRODUCT";
export const RESET_GETPRODUCT = "RESET_GETPRODUCT";

const getProduct = (state) => {
  return (dispatch) => {
    dispatch({ type: GETPRODUCT, payload: production });
  };
};

const resetGetProduct = (state) => {
  return (dispatch) => {
    dispatch({ type: RESET_GETPRODUCT, payload: production });
  };
};

export { getProduct, resetGetProduct };

const production = {
  isload_production: true,
  status_production: 200,
  total_count: 5,
  result_list: [
    {
      product_id : "0001",
      product_name: "ASUS TUF GAMING F15 FX506HC-HN111W",
      product_price: 30990,
      product_discount: 28990,
      product_percent: 6,
      product_detail:
        'Intel Core i5-11400H|8GB DDR4 3200MHz|512GB PCIe/NVMe M.2 SSD|15.6" Full HD IPS Anti-Glare 144Hz|NVIDIA GeForce RTX 3050 4 GB GDDR6|Windows 11 Home',
      product_left: 12,
      product_pic:
        "https://dlcdnwebimgs.asus.com/gain/6c49e355-de25-403c-b8c2-eb0ad4cc8a78/",
    },
    {
      product_id : "0002",
      product_name: "KEYBOARD (คีย์บอร์ด) TT PREMIUM LEVEL 20 GT RGB (CHERRY MX BLUE) (RGB LED)",
      product_price: 2790,
      product_discount: 4290,
      product_percent: 35,
      product_detail:
        '• Cherry MX RGB Blue (Clicky) • RGB LED • English / Thai Legend (Font) • USB',
      product_left: 10,
      product_pic:
        "https://www.jib.co.th/img_master/product/original/2022031117324052024_5.jpg",
    },
    {
      product_id : "0003",
      product_name: "LENOVO IDEAPAD GAMING 3 15IHU6-82K1019LTA (SHADOW BLACK)",
      product_price: 24990,
      product_discount: 23990,
      product_percent: 4,
      product_detail:
        'Intel Core i5-11320H|8GB DDR4 3200MHz|512GB PCIe/NVMe M.2 2242|15.6" Full HD IPS Anti-Glare 144Hz|NVIDIA GeForce GTX 1650 4 GB GDDR6|Windows 11 Home',
      product_left: 5,
      product_pic:
        "https://media-cdn.bnn.in.th/212045/Lenovo-Notebook-IdeaPad-Gaming-3i-15IHU6-03-square_medium.jpg",
    },
    {
      product_id : "0004",
      product_name: "MSI GF63 Thin 11UD-1031TH",
      product_price: 31990,
      product_discount: 29990,
      product_percent: 6,
      product_detail:
        'Intel Core i7-11800H|8GB DDR4 3200MHz|512GB PCIe/NVMe M.2 SSD|15.6" Full HD IPS Anti-Glare 144Hz|NVIDIA GeForce RTX 3050 4 GB GDDR6|Windows 11 Home',
      product_left: 12,
      product_pic:
        "https://cf.shopee.co.th/file/2d182fdede8f3a2ff54f0c7da5aa60a0",
    },
    {
      product_id : "0005",
      product_name: "Colorful X15 AT-i7/16/512",
      product_price: 35980,
      product_discount: 0,
      product_percent: 0,
      product_detail:
        'Intel Core i5-11400H|8GB DDR4 3200MHz|512GB PCIe/NVMe M.2 SSD|15.6" Full HD IPS Anti-Glare 144Hz|NVIDIA GeForce RTX 3050 4 GB GDDR6|Windows 11 Home',
      product_left: 12,
      product_pic:
        "https://notebookspec.com/nbs/upload_notebook/20220703-220148_c.jpg",
    },
    {
      product_id : "0006",
      product_name: "SMARTWATCH (นาฬิกาอัจฉริยะ) AMAZFIT GTS 2 (MIDNIGHT BLACK)",
      product_price: 5290,
      product_discount: 4290,
      product_percent: 10,
      product_detail:
        '• 3D Curved Bezel-less Design • All-round Health and Fitness Tracking • Long Battery Life• Alexa Built-in',
      product_left: 20,
      product_pic:
        "https://media-cdn.bnn.in.th/105219/Amazfit-Smartwatch-GTS2-Mini-Midnight-Black-1-square_medium.jpg",
    },
    {
      product_id : "0007",
      product_name: "GALAX GEFORCE RTX 3070 TI (1-CLICK OC) - 8GB GDDR6X (LHR)",
      product_price: 25500,
      product_discount: 0,
      product_percent: 0,
      product_detail:
        '• 3D Curved Bezel-less Design • All-round Health and Fitness Tracking • Long Battery Life• Alexa Built-in',
      product_left: 13,
      product_pic:
        "https://www.jib.co.th/img_master/product/original/2021092213384748786_1.JPG",
    },
    {
      product_id : "0008",
      product_name: "BLUETOOTH SPEAKER (ลำโพงบลูทูธ) KREAFUNK AJAZZ (COOL GREY)",
      product_price: 3290,
      product_discount: 2990,
      product_percent: 9,
      product_detail:
        '• 3D Curved Bezel-less Design • All-round Health and Fitness Tracking • Long Battery Life• Alexa Built-in',
      product_left: 13,
      product_pic:
        "https://www.sounddd.shop/wp-content/uploads/2022/03/KREAFUNK-aMAJOR-WH-1.webp",
    },
  ],
};

const production_ = {
  total_count: 0,
  result_list: [],
  status_production: 400,
  isload_production: false,
};
