import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { fetchActivities, fetchCategories, fetchHighlights } from "./homeAPIs";

interface HomeState {
  isHighlightLoading: boolean
  highlightData: Object | undefined | null
  highlightError: Object | undefined | null | unknown

  isCategoryLoading: boolean,
  categoryData: Object | undefined | null,
  categoryError: Object | undefined | null | unknown,

  isActivityLoading: boolean
  activityData: Object | undefined | null
  activityError: Object | undefined | null | unknown

}

const initialState = {

  isHighlightLoading: false,
  highlightData: [],
  highlightError: undefined,

  isCategoryLoading: false,
  categoryData: [],
  categoryError: undefined,

  isActivityLoading: false,
  activityData: {},
  activityError: undefined,

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
      .addCase(fetchActivities.pending, (state) => {
        state.isActivityLoading = true
      })
      .addCase(fetchActivities.fulfilled, (state, action) => {
        state.isActivityLoading = false
        state.activityData = action.payload
      })
      .addCase(fetchActivities.rejected, (state, action) => {
        state.isActivityLoading = false
        state.activityError = action.payload
      })
      .addCase(fetchCategories.pending, (state) => {
        state.isCategoryLoading = true
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.isCategoryLoading = false
        state.categoryData = action.payload
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.isCategoryLoading = false
        state.categoryError = action.payload
      })
  },
})

export const getHighlightData = (state : RootState) => state.home.highlightData
export const getIsHighlightLoading = (state : RootState) => state.home.isHighlightLoading
export const getHighlightError = (state : RootState) => state.home.highlightError

export const getActivityData = (state : RootState) => state.home.activityData
export const getIsActivityLoading = (state : RootState) => state.home.isActivityLoading
export const getActivityError = (state : RootState) => state.home.activityError

export const getCategoryData = (state : RootState) => state.home.categoryData
export const getIsCategoryLoading = (state : RootState) => state.home.isCategoryLoading
export const getCategoryError = (state : RootState) => state.home.categoryError

export default homeSlice.reducer