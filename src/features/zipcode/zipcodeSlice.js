import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosJsonpAdapter from "axios-jsonp";

const baseUrl = "https://zipcloud.ibsnet.co.jp/api/search?zipcode=";

export const fetchAsyncGetZipcode = createAsyncThunk(
  "zipcode/zip",
  async (zip) => {
    const { results } = await axios
      .get(`${baseUrl}${zip}`, {
        adapter: axiosJsonpAdapter,
      })
      .then((data) => data.data)
      .catch((err) => console.log(err));
    return { results, zip };
  }
);

export const zipcodeSlice = createSlice({
  name: "zipcode",
  initialState: {
    prefname: "",
    cityname: "",
    areaname: "",
    zipcode: "",
    alert: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncGetZipcode.fulfilled, (state, action) => {
      if (action.payload.results === null)
        return { ...state, alert: "Not Found", zipcode: action.payload.zip };
      return {
        ...state,
        prefname: action.payload.results[0].address1,
        cityname: action.payload.results[0].address2,
        areaname: action.payload.results[0].address3,
        zipcode: action.payload.zip,
        alert: "",
      };
    });
  },
});

export const selectPrefname = (state) => state.zipcode.prefname;
export const selectCityname = (state) => state.zipcode.cityname;
export const selectAreaname = (state) => state.zipcode.areaname;
export const selectZipcode = (state) => state.zipcode.zipcode;
export const selectAlert = (state) => state.zipcode.alert;

export default zipcodeSlice.reducer;
