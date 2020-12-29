import { configureStore } from "@reduxjs/toolkit";
import zipcodeReducer from "../features/zipcode/zipcodeSlice";

export default configureStore({
  reducer: {
    zipcode: zipcodeReducer,
  },
});
