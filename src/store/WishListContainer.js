export const GETWISHLIST = "GETWISHLIST"
export const ADDWISHLIST = "ADDWISHLIST"
export const DELETEWISHLIST = "DELETEWISHLIST"
export const CLEARWISHLIST = "CLEARWISHLIST"
export const INITIALSTATE = "INITIALSTATE"

export const getWishList = () => (dispatch, getState) => {
    const wishList = []
    if(localStorage.getItem("Ecommerce_wishList" != null)){
        wishList = localStorage.getItem("Ecommerce_wishList").split("|")
    }
    const productionList = getState().production_list.result_list
    const dataArr = []
    if (wishList.length != 0) {
        for (var i = 0; i < wishList.length; i++) {
            productionList.filter(item => {
                if (parseInt(item.product_id) === parseInt(wishList[i])) {
                    dataArr.push(item)
                }
            });
        }
    }
    console.log("dispatch : GETWISHLIST");
    console.log(dataArr)
    dispatch({
        type: GETWISHLIST,
        payload: dataArr,
        isload: true,
        status: 200,
        message: "",
    });
};

export const addWishList = (id) => (dispatch, getState) => {
    const local_wishList = localStorage.getItem("Ecommerce_wishList").split("|")
    if (id != "") {
        local_wishList.push(id)
        var prepareList = ""
        local_wishList.map((item, idx) => {
            if (local_wishList.length == idx) {
                prepareList += item
            } else {
                prepareList += item + "|"
            }
        })
        localStorage.setItem("Ecommerce_wishList", prepareList)
    }
    const productionList = getState().production_list.result_list
    const dataArr = []
    for (var a = 0; a < productionList.length; a++) {
        dataArr.push(productionList[a])
    }

    productionList.filter(item => {
        if (item.product_id === id) {
            dataArr.push(item)
        }
    });

    console.log("dispatch : ADDWISHLIST");
    dispatch({
        type: ADDWISHLIST,
        payload: dataArr,
        isload: true,
        status: 200,
        message: "",
    });
};

export const deleteWishList = (id) => (dispatch, getState) => {
    const local_wishList = localStorage.getItem("Ecommerce_wishList").split("|")
    console.log(local_wishList)
    for (var k = 0; k < local_wishList.length; k++) {
        if (parseInt(local_wishList[k]) === parseInt(id)) {
            local_wishList.splice(k, 1)
        }
    }
    console.log(local_wishList)
    var prepareList_ = ""
    local_wishList.map((item, idx) => {
        if (local_wishList.length === idx) {
            prepareList_ = new String(prepareList_ + item)
        } else {
            prepareList_ = new String(prepareList_.toString() + item.toString() + "|")
        }
    })
    console.log(prepareList_)
    localStorage.setItem("Ecommerce_wishList", prepareList_)
    const productionList = getState().production_list.result_list
    const dataArr = []
    for (var i = 0; i < local_wishList.length; i++) {
        productionList.filter(item => {
            if (parseInt(item.product_id) === parseInt(local_wishList[i])) {
                dataArr.push(item)
            }
        });
    }
    console.log("dispatch : DELETEWISHLIST");
    dispatch({
        type: DELETEWISHLIST,
        payload: dataArr,
        isload: true,
        status: 200,
        message: "",
    });
}

export const clearWishList = () => (dispatch, getState) => {
    localStorage.setItem("Ecommerce_wishList", "[]")
    console.log("dispatch : clearWishList");
    dispatch({
        type: DELETEWISHLIST,
        payload: [],
        isload: true,
        status: 200,
        message: "",
    });
}

export const initialStateWishList = (data) => (dispatch, getState) => {
    console.log("dispatch : INITIALSTATE");
    const previousValue = getState().wish_list;
    dispatch({
        type: INITIALSTATE,
        payload: previousValue,
        isload: false,
        status: 400,
        message: "INITIALSTATE",
    });
};