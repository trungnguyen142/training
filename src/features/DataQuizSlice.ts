import { createSlice } from '@reduxjs/toolkit'
import QuizData from '../data/QuizData'

const dataQuizSlice = createSlice({
    name: 'quiz_data',
    initialState: <any>[
        {
            question: "What’s the biggest planet in our solar system?",
            options: ["Jupiter","Saturn","Neptune"],
            correct_option: "Jupiter",
    
        },
        {
            question: "What land animal can open its mouth the widest?",
            options: ["Alligator","Crocodile","Hippo"],
            correct_option: "Hippo",
        },
        {
            question: "What is the only flying mammal?",
            options: ["The bat","The bald eagle","The colugo"],
            correct_option: "The bat",
        },
        {
            question: "What color do you like?",
            options: ["White","Red","Yellow"],
            correct_option: "White",
        },
        {
            question: "What language do you like?",
            options: ["English","Vietnamese","Korea"],
            correct_option: "English",
        },
    ],
    reducers: {
        changeCorrectReady(state,action) {            
            state[action.payload]['correct_ready'] = true
        },
        registerQuiz(state,action) {
    // console.log('action.payload::',action.payload);
            let obj: any = {}
            obj.id = state.length
            obj.question = action.payload.question
            obj.options = [
            action.payload.option1,
            action.payload.option2,
            action.payload.option3,
            ]
            obj.correct_option = action.payload.option1
            state.push(obj)
},

    }
})

const { actions,reducer } = dataQuizSlice
export const { registerQuiz,changeCorrectReady } = actions
export default reducer