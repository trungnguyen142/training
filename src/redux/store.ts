import { configureStore } from '@reduxjs/toolkit'
import userSlice from '../features/userSlice'
import numberOfQuiz from '../features/numberOfQuizzes'
import dataQuizSlice from '../features/DataQuizSlice'

const store = configureStore({ 
    reducer: {
        userInfor: userSlice,
        numberOfQuiz: numberOfQuiz,
        dataQuizSlice: dataQuizSlice,
},
})

export default store