import { connect } from "react-redux";

// export function appendProduct(data) {
//   return {
//     type: "APPENDPRODUCT",
//     payload : data,
//   };
// }
// export function popProduct(data) {
//   return {
//     type: "POPPRODUCT",
//     payload : data
//   };
// }
// export function resetAppendProduct() {
//   return { type: "RESET_APPENDPRODUCT" };
// }
export const GETCARTLIST = "GET_CARTLIST";
export const APPENDPRODUCT = "APPENDPRODUCT";
export const RESET_APPENDPRODUCT = "RESET_APPENDPRODUCT";
export const POPPRODUCT = "POPPRODUCT";
export const INITIALSTATE = "INITIALSTATE";

export const getCartList = (data) => (dispatch, getState) => {
    const previousValue = getState().shoping_cart.responseCart;
    console.log("dispatch : POPPRODUCT");
    dispatch({
        type: GETCARTLIST,
        payload: previousValue,
        isload: true,
        status: 200,
        message: "",
    });
};

export const appendProduct = (data, quantity) => (dispatch, getState) => {
    // return axios({
    //     url: `https://jsonplaceholder.typicode.com/todos/${id}`,
    //     method: 'GET',
    //   })
    //   .then(({data})=> {
    //     // console.log(data);
    //     dispatch({type: GET_TODO, payload: data});
    //   })
    //   .catch(error => {
    //     console.log(error);

    //     dispatch({type: FETCH_FAILURE})
    //   });
    const previousValue = getState().shoping_cart.responseCart;
    const dataRs = {
        result_list: [],
        total_price: 0,
        discount_price: 0,
        shiping_price: 0,
    };
    console.log(quantity);
    console.log(previousValue);
    const prepareData = {
        product_detail: data.product_detail,
        product_id: data.product_id,
        product_quantity: quantity,
        product_name: data.product_name,
        product_pic: data.product_pic,
        product_price: data.product_price,
        product_price_per_quantity: parseInt(data.product_price) * quantity,
    };

    if (previousValue.result_list.length == 0) {
        dataRs.result_list.push(prepareData);
    } else {
        for (var i = 0; i < previousValue.result_list.length; i++) {
            dataRs.result_list.push(previousValue.result_list[i]);
        }
        dataRs.result_list.push(prepareData);
    }
    console.log(dataRs);

    var totalPrice = 0;
    for (var a = 0; a < dataRs.result_list.length; a++) {
        console.log(dataRs.result_list[a].product_price_per_quantity);
        totalPrice = totalPrice + dataRs.result_list[a].product_price_per_quantity;
    }
    dataRs.total_price = totalPrice;

    console.log("dispatch : APPENDPRODUCT");
    dispatch({
        type: APPENDPRODUCT,
        payload: dataRs,
        isload: true,
        status: 200,
        message: "",
    });
};

export const popProduct = (data) => (dispatch, getState) => {
    const previousValue = getState().shoping_cart.responseCart;
    console.log(data)
    //mapping product id
    for (var i = 0; i < previousValue.result_list.length; i++) {
        if (previousValue.result_list[i].product_id == data.product_id) {
            previousValue.result_list.splice(i, 1);
            console.log(previousValue.result_list[i])
            previousValue.total_price = previousValue.total_price - data.product_price_per_quantity
            break;
        }
    }
    if(previousValue.result_list.length == 0){
        previousValue.total_price = 0
    }
    console.log("dispatch : POPPRODUCT");
    dispatch({
        type: POPPRODUCT,
        payload: previousValue,
        isload: true,
        status: 200,
        message: "",
    });
};

export const resetAppendProduct = (data) => (dispatch, getState) => {
    console.log("dispatch : RESET_APPENDPRODUCT");
    dispatch({
        type: RESET_APPENDPRODUCT,
        payload: [],
        isload: true,
        status: 200,
        message: "",
    });
};

export const initialStateCart = (data) => (dispatch, getState) => {
    console.log("dispatch : INITIALSTATE");
    const previousValue = getState().shoping_cart.responseCart;
    dispatch({
        type: INITIALSTATE,
        payload: previousValue,
        isload: false,
        status: 400,
        message: "INITIALSTATE",
    });
};
