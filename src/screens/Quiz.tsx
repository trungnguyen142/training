import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import Container from '../common/Container'
import SpaceBetween from '../common/SpaceBetween'
import QuizData from '../data/QuizData'
import NavigationConstants from '../navigation/NavigationContants'
import { useDispatch, useSelector } from 'react-redux'
import { addNumberOfQuiz } from '../features/numberOfQuizzes'
import { useNavigation } from '@react-navigation/native'

const Quiz = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation()
    const [currentData, setCurrentData] = useState(QuizData)
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [currentOptionIndex, setCurrentOptionIndex] = useState(-1)
    const [currentOptionSelected, setCurrentOptionSelected] = useState('')
    const [correctOption, setCorrectOption] = useState(null)
    const [isChecked, setIsChecked] = useState(false)

    useEffect(() => {
        const willFocusSubscription = navigation.addListener('focus', () => {
            setCurrentData(QuizData)
        })
        return willFocusSubscription
    }, [])

    const randomQuiz = () => {
        const filterCorrectUnReady = currentData.filter((x: { correct_ready: boolean }) => x.correct_ready !== true)
        console.log('filterCorrectUnReady', filterCorrectUnReady);

        const randomQuestion = Math.floor(Math.random() * filterCorrectUnReady.length)
        setCurrentData(filterCorrectUnReady)
        setCurrentQuestionIndex(randomQuestion)
    }

    const onSubmitQuestion = (selectedOption: string, index: number) => {
        let correct_Option = currentData[currentQuestionIndex]['correct_option']
        setCurrentOptionSelected(selectedOption)
        setCurrentOptionIndex(index)
        setCorrectOption(correct_Option)
        setIsChecked(true)
        const action = addNumberOfQuiz(1)
        dispatch(action)
        setTimeout(() => {
            setCurrentOptionIndex(-1)
            setCorrectOption(null)
            setIsChecked(false)
            randomQuiz()
            if (selectedOption === correct_Option) {
                // set score
                currentData[currentQuestionIndex]['correct_ready'] = true
                randomQuiz()
            }
        }, 1000)
    }

    return (
        <Container style={styles.container}>
            <SpaceBetween>
                <Text style={styles.title}>
                    QUIZ
                </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate(NavigationConstants.AddQuiz)}
                    style={styles.btnAddQuiz}
                >
                    <Text style={{
                        color: 'yellow'
                    }}>
                        + Add quiz
                    </Text>
                </TouchableOpacity>
            </SpaceBetween>

            {/* question */}
            <View style={styles.containerQuestion}>

                {
                    currentOptionSelected === correctOption && isChecked ?
                        (
                            <View style={styles.success}>
                                <Text style={{
                                    fontSize: 40,
                                    color: 'white'
                                }}>
                                    SUCCESS !!!
                                </Text>
                            </View>
                        )
                        :
                        currentOptionSelected !== correctOption && isChecked ?
                            (
                                <View style={styles.failed}>
                                    <Text style={{
                                        fontSize: 40,
                                        color: 'white'
                                    }}>
                                        FAILED !!!
                                    </Text>
                                </View>
                            )
                            :
                            <Text style={{
                                color: 'white',
                                fontSize: 16,
                                padding: 16,
                            }}>
                                {currentData[currentQuestionIndex]?.question}
                            </Text>
                }
                <View style={styles.flexEnd}>
                    <View />
                    <TouchableOpacity
                        onPress={randomQuiz}
                    >
                        <Text style={styles.changeQues}>
                            Change Question
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            {/* options */}
            {
                currentData[currentQuestionIndex]?.options.map((item: string, index: number) => {
                    let checked = false
                    if (currentOptionIndex === index) {
                        checked = true
                    }
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => onSubmitQuestion(item, index)}
                            style={{
                                width: '100%',
                                height: 48,
                                borderRadius: 8,
                                backgroundColor: item === correctOption && checked ? 'green' : item !== correctOption && checked ? 'red' : '#B8BED0',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginTop: 16
                            }}
                            disabled={isChecked}
                        >
                            <Text>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )
                })
            }
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#232633',
        paddingHorizontal: 16
    },

    title: {
        fontWeight: '700',
        fontSize: 30,
        color: 'green'
    },

    btnAddQuiz: {
        backgroundColor: '#4C536F',
        borderRadius: 12,
        padding: 8
    },

    containerQuestion: {
        backgroundColor: '#4C536F',
        justifyContent: 'space-between',
        width: '100%',
        height: 300,
        borderRadius: 6,
        marginVertical: 16
    },

    success: {
        flex: 1,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'
    },

    failed: {
        flex: 1,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    },

    flexEnd: {
        alignSelf: 'flex-end',
        backgroundColor: '#9097B2',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 40,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
    },

    changeQues: {
        paddingRight: 16,
        fontWeight: '600',
        color: 'yellow'
    },



})

export default Quiz