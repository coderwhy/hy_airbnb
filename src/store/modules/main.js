import { createSlice } from "@reduxjs/toolkit"


const mainSlice = createSlice({
  name: "main",
  initialState: {
    headerConfig: {
      isFixed: false,
      topAlpha: false
    }
  },
  reducers: {
    changeHeaderConfigAction(state, { payload }) {
      state.headerConfig = payload
    }
  }
})

export const { changeHeaderConfigAction } = mainSlice.actions
export default mainSlice.reducer
