import axios from "axios";
import { CLEAR_DOG, GET_ALL_DOGS, GET_PARTICULAR_DOG } from "../ActionTypes";
export const getAllDogs = () => async (dispatch) => {
  const { data } = await axios.get("https://dog.ceo/api/breeds/list/all");
  dispatch({
    type: GET_ALL_DOGS,
    payload: data,
  });
};

export const getParticularDog = (name) => async (dispatch) => {
  dispatch({
    type: CLEAR_DOG,
  });
  const { data } = await axios.get(`https://dog.ceo/api/breed/${name}/images`);
  dispatch({
    type: GET_PARTICULAR_DOG,
    payload: data,
  });
};
