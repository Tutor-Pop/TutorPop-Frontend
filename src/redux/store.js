import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from './loading.reducer'

const store = configureStore({
  reducer: {
    loading: loadingReducer
  },
})

export default store