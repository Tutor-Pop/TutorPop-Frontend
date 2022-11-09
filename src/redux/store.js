import { configureStore } from '@reduxjs/toolkit'
import confirmationReducer from './confirmation.reducer'
import loadingReducer from './loading.reducer'

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    confirmation: confirmationReducer,
  },
})

export default store