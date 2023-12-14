import ACTION_TYPES from "../constants/actiontypes";
import axios from 'axios';
import { getFullAPIURL } from "../utils/appUtils";
import { END_POINTS } from "../constants";
import { Dispatch } from "redux";

export const fetchHighlights = () => (dispatch : Dispatch) => {
    dispatch(fetchHighlightsDataPending());
    return new Promise<void>(() => {
      axios
        .get(getFullAPIURL(END_POINTS.HIGHLIGHTS))
        .then((response) => {
          dispatch(fetchHighlightsDataSuccess(response.data));
        })
        .catch((error) => {
          dispatch(fetchHighlightsDataError(error));
          console.log(error);
        });
    });
};

export const fetchHighlightsDataPending = () => ({
    type: ACTION_TYPES.API_PENDING,
});
  
const fetchHighlightsDataSuccess = (data: object) => ({
    type: ACTION_TYPES.API_SUCCESS,
    payload: data,
});
  
const fetchHighlightsDataError = (error: object) => ({
    type: ACTION_TYPES.API_ERROR,
    payload: error,
});