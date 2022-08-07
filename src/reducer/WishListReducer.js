const wishListReducer = (state = {}, action) => {
    const { type, payload, isload, status, message } = action;
  
    switch (type) {
      case "GETWISHLIST":
        return {
          isLoadWishList: isload,
          statusWishList: status,
          messageWishList: message,
          responseWishList: payload,
        };
      case "ADDWISHLIST":
        return {
          isLoadWishList: isload,
          statusWishList: status,
          messageWishList: message,
          responseWishList: payload,
        };
      case "DELETEWISHLIST":
        return {
          isLoadWishList: isload,
          statusWishList: status,
          messageWishList: message,
          responseWishList: payload,
        };
      case "CLEARWISHLIST":
        return {
          isLoadWishList: isload,
          statusWishList: status,
          messageWishList: message,
          responseWishList: payload,
        };
      case "INITIALSTATE":
        return {
          isLoadWishList: isload,
          statusWishList: status,
          messageWishList: message,
          responseWishList: payload,
        };
      default:
        return state;
    }
  };
  
  export default wishListReducer;
  