import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { fetchHighlights } from "./homeAPIs";

interface HomeState {
  isHighlightLoading: boolean
  highlightData: Object | undefined | null
  highlightError: Object | undefined | null | unknown
}

const initialState = {
  isHighlightLoading: false,
  highlightData: {},
  highlightError: undefined,
} as HomeState;


const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHighlights.pending, (state) => {
        state.isHighlightLoading = true
      })
      .addCase(fetchHighlights.fulfilled, (state, action) => {
        state.isHighlightLoading = false
        state.highlightData = action.payload
      })
      .addCase(fetchHighlights.rejected, (state, action) => {
        state.isHighlightLoading = false
        state.highlightError = action.payload
      })
  },
})

export const getHighlightData = (state : RootState) => state.home.highlightData
export const getIsHighlightLoading = (state : RootState) => state.home.isHighlightLoading
export const getHighlightError = (state : RootState) => state.home.highlightError

export default homeSlice.reducer