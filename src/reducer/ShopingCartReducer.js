const initialState = {
  isLoadCart: false,
  statusCart: 400,
  messageCart: "",
  responseCart: {
    result_list : [],
    total_price : 0,
    discount_price : 0,
    shiping_price : 0
  },
};

const shopingCartReducer = (state = initialState, action) => {
  const { type, payload, isload, status, message } = action;

  switch (type) {
    case "GET_CARTLIST":
      return {
        isLoadCart: isload,
        statusCart: status,
        messageCart: message,
        responseCart: payload,
      };
    case "APPENDPRODUCT":
      return {
        isLoadCart: isload,
        statusCart: status,
        messageCart: message,
        responseCart: payload,
      };
    case "RESET_APPENDPRODUCT":
      return {
        isLoadCart: isload,
        statusCart: status,
        messageCart: message,
        responseCart: payload,
      };
    case "POPPRODUCT":
      return {
        isLoadCart: isload,
        statusCart: status,
        messageCart: message,
        responseCart: payload,
      };
    case "INITIALSTATE":
      return {
        isLoadCart: isload,
        statusCart: status,
        messageCart: message,
        responseCart: payload,
      };
    default:
      return state;
  }
};

export default shopingCartReducer;
