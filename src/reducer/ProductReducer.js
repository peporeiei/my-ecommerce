// import { useState } from "react";

// const reducer = (state = production_, action) => {
//   console.log(state)
//   switch (action.type) {
//     case "GETPRODUCT":
//       return {
//         ...production,
//       };
//     case "RESET_GETPRODUCT":
//       return {
//         ...production_,
//       };
//     default:
//       return state;
//   }
// };
// export default reducer;

const getProduct = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case "GETPRODUCT":
      return payload;
    case "RESET_GETPRODUCT":
      return payload;
    default:
      return state;
  }
};

export default getProduct;
