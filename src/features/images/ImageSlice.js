import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import ImageApi from "../../common/apis/ImageApi";
import { APIKey } from "../../common/apis/ImageApiKey";

export const getData = createAsyncThunk("images/getData", async (text) => {
  const res = await ImageApi.get(
    `search/photos?page=2&query=${text}&client_id=${APIKey}`
  );

  return res.data.results;
});
export const fetchAllData = createAsyncThunk(
  "images/fetchAllData",
  async () => {
    const res = await ImageApi.get(`photos?client_id=${APIKey}`);

    return res.data;
  }
);
export const singleDetail = createAsyncThunk(
  "images/singleDetail",
  async (id) => {
    const res = await ImageApi.get(`photos/${id}?&client_id=${APIKey}`);

    return res.data;
  }
);
const initialState = {
  images: [],
  selectedImage: {},
  allImages: [],
};
console.log("object", initialState.images);
const ImageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers: {
    [getData.pending]: () => {
      console.log("pending");
    },
    [getData.fulfilled]: (state, action) => {
      console.log("Fetch SuccessFully");

      return {
        ...state,
        images: action.payload,
      };
    },
    [getData.rejected]: () => {
      console.log("Rejected");
    },
    [singleDetail.fulfilled]: (state, action) => {
      console.log("Fetch SuccessFully");

      return {
        ...state,
        selectedImage: action.payload,
      };
    },
    [fetchAllData.fulfilled]: (state, action) => {
      console.log("Fetch SuccessFully");

      return {
        ...state,
        allImages: action.payload,
      };
    },
  },
});

export default ImageSlice.reducer;
