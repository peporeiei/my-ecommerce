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
      product_name: "ASUS TUF GAMING F15 FX500HC-HN111W",
      product_price: 30990,
      product_discount: 28990,
      product_percent: 6,
      product_detail:
        'Intel Core i5-11400H|8GB DDR4 3200MHz|512GB PCIe/NVMe M.2 SSD|15.6" Full HD IPS Anti-Glare 144Hz|NVIDIA GeForce RTX 3050 4 GB GDDR6|Windows 11 Home',
      product_left: 10,
      product_pic:
        "https://dlcdnwebimgs.asus.com/gain/6c49e355-de25-403c-b8c2-eb0ad4cc8a78/",
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
        "https://notebookspec.com/nbs/upload_notebook/20210822-083821_c.jpg",
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
        "https://dlcdnwebimgs.asus.com/gain/6c49e355-de25-403c-b8c2-eb0ad4cc8a78/",
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
  ],
};

const production_ = {
  total_count: 0,
  result_list: [],
  status_production: 400,
  isload_production: false,
};
