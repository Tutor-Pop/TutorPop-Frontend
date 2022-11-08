import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  message: "AAA",
  open: false,
  action: () => {}
}

export const confimationSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    openComfirmation: (state,confirm_message,func)=>{
        state.open = true
        state.message = confirm_message
        state.action = func
    },
    closeConfirmation: (state) => {
        state.open = false
    },
    acceptConfirmation: (state) => {
        state.open = false
        state.action()
    }
  },
})

// Action creators are generated for each case reducer function
export const { openComfirmation,closeConfirmation,acceptConfirmation } = confimationSlice.actions

export default confimationSlice.reducer