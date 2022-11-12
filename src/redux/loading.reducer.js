import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    startLoading: (state) => {
        state.value = true
    },
    stopLoading: (state) => {
        state.value = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { startLoading, stopLoading } = loadingSlice.actions

export default loadingSlice.reducer