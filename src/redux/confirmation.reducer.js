import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  message: "AAA",
  open: false,
  action: null //() => { }
}

export const confimationSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    openComfirmation: (state, data) => {
      const { payload } = data
      state.open = true
      state.message = payload.message
      state.action = payload.action
    },
    closeConfirmation: (state) => {
      state.open = false
    },
    acceptConfirmation: (state) => {
      state.action()
      state.open = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { openComfirmation, closeConfirmation, acceptConfirmation } = confimationSlice.actions

export default confimationSlice.reducer