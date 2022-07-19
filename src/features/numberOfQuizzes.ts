import { createSlice } from '@reduxjs/toolkit'

const numberOfQuiz = createSlice({
    name: 'user',
    initialState: 0,
    reducers: {
addNumberOfQuiz(state,action) {
    return state + 1
},

    }
})

const { actions,reducer } = numberOfQuiz
export const { addNumberOfQuiz } = actions
export default reducer