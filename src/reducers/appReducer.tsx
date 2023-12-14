import ACTION_TYPES from "../constants/actiontypes";

const initialState = {
    isHighlightLoading: false,
    highlightData: {},
    highlightError: null,
};

const AppReducer = (state = initialState, action : { type : String , payload : object }) => {
    switch (action.type) {
      case ACTION_TYPES.API_PENDING:
        return {
          ...state,
          isHighlightLoading: true,
        };
      case ACTION_TYPES.API_SUCCESS:
        return {
          ...state,
          highlightData: action.payload,
          isHighlightLoading: false,
        };
      case ACTION_TYPES.API_ERROR:
        return {
          ...state,
          highlightError: action.payload,
          isHighlightLoading: false,
        };
  
      default:
        return state;
    }
  };
  
  export default AppReducer;