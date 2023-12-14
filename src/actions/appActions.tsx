import ACTION_TYPES from "../constants/actiontypes";
import axios from 'axios';
import { getFullAPIURL } from "../utils/appUtils";
import { END_POINTS } from "../constants";

const fetchHighlights = () => (dispatch: any) => {
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

const fetchHighlightsDataPending = () => ({
    type: ACTION_TYPES.API_PENDING,
});
  
const fetchHighlightsDataSuccess = (data: any) => ({
    type: ACTION_TYPES.API_SUCCESS,
    payload: data,
});
  
const fetchHighlightsDataError = (error: any) => ({
    type: ACTION_TYPES.API_ERROR,
    payload: error,
});