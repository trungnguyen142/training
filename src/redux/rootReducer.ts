import { combineReducers, Reducer, AnyAction } from '@reduxjs/toolkit'
import userSlice from '../features/userSlice'

const combinedReducer = combineReducers({
    user: userSlice,
  })

  export type RootState = ReturnType<typeof combinedReducer>
