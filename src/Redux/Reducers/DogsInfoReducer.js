import { CLEAR_DOG, GET_ALL_DOGS, GET_PARTICULAR_DOG } from "../ActionTypes";

const initialState = {
  dogs: null,
  currentDog: null,
  isLoading: true,
};

const dogsReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        isLoading: false,
        dogs: payload,
      };
    case GET_PARTICULAR_DOG:
      return {
        ...state,
        isLoading: false,
        currentDog: payload,
      };
    case CLEAR_DOG:
      return {
        ...state,
        currentDog: null,
      };

    default:
      return state;
  }
};

export default dogsReducer;
