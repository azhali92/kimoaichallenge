import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getFullAPIURL } from "../../utils/appUtils";
import { END_POINTS } from "../../constants";

export const fetchHighlights = createAsyncThunk(
    'home/highlights',
    async () => {
      const response = await axios.get(getFullAPIURL(END_POINTS.HIGHLIGHTS))
      return response.data;
    }
);