import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: null,
    reducers: {
userInfor(state,action) {
    return action.payload
},

logOut: (state) => {},

    }
})

const { actions,reducer } = userSlice
export const { userInfor,logOut } = actions
export default reducer