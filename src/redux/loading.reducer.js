import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    startLoading: (state) => {
      console.log("Start Loading")
        state.value = true
    },
    stopLoading: (state) => {
        console.log("Stop Loading")
        state.value = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { startLoading, stopLoading } = loadingSlice.actions

export default loadingSlice.reducer