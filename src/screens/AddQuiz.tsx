import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Container from '../common/Container'
import { useNavigation } from '@react-navigation/native'
import QuizData from '../data/QuizData'
import { useDispatch } from 'react-redux'

interface objProps {
    question: string
    option1: string
    option2: string
    option3: string
    correct_option: string
    correct_ready: boolean
}

const AddQuiz = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()
    const [question, setQuestion] = useState('')
    const [option1, setOption1] = useState('')
    const [option2, setOption2] = useState('')
    const [option3, setOption3] = useState('')

    const onAddQuestion = () => {
        let obj: any = {}
        obj.question = question
        obj.options = [
            option1,
            option2,
            option3,
        ]
        obj.correct_option = option1
        // obj.correct_ready = false
        QuizData.push(obj)
        navigation.goBack()
    }

    return (
        <Container style={{
            backgroundColor: '#232633',
        }}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <Text style={{
                    color: 'white',
                    fontSize: 20,
                    paddingLeft: 16,
                }}>
                    {'<< Go back'}
                </Text>
            </TouchableOpacity>
            <Text style={{
                textAlign: 'center',
                color: 'white',
                fontSize: 24,
                fontWeight: 'bold'
            }}>
                ADD QUIZ
            </Text>
            <ScrollView style={{
                paddingHorizontal: 16
            }}>
                <View style={{
                    marginVertical: 16
                }}>
                    <Text style={{
                        fontSize: 20,
                        color: 'white'
                    }}>
                        Question
                    </Text>
                    <TextInput
                        placeholder="add question"
                        multiline
                        style={{
                            width: '100%',
                            height: 200,
                            marginTop: 8,
                            borderRadius: 8,
                            padding: 8,
                            fontSize: 18,
                            color: 'white',
                            justifyContent: 'flex-start',
                            backgroundColor: '#4C536F'
                        }}
                        onChangeText={text => setQuestion(text)}
                    />
                </View>

                <View style={{
                    marginVertical: 16
                }}>
                    <Text style={{
                        fontSize: 20,
                        color: 'white'
                    }}>
                        Option Success
                    </Text>
                    <TextInput
                        placeholder="add option"
                        style={{
                            width: '100%',
                            height: 50,
                            marginTop: 8,
                            borderRadius: 8,
                            padding: 8,
                            fontSize: 18,
                            color: 'white',
                            justifyContent: 'flex-start',
                            backgroundColor: '#4C536F'
                        }}
                        onChangeText={text => setOption1(text)}
                    />
                </View>

                <View style={{
                    marginVertical: 16
                }}>
                    <Text style={{
                        fontSize: 20,
                        color: 'white'
                    }}>
                        Option 2
                    </Text>
                    <TextInput
                        placeholder="add option"
                        style={{
                            width: '100%',
                            height: 50,
                            marginTop: 8,
                            borderRadius: 8,
                            padding: 8,
                            fontSize: 18,
                            color: 'white',
                            justifyContent: 'flex-start',
                            backgroundColor: '#4C536F'
                        }}
                        onChangeText={text => setOption2(text)}
                    />
                </View>

                <View style={{
                    marginVertical: 16
                }}>
                    <Text style={{
                        fontSize: 20,
                        color: 'white'
                    }}>
                        Option 3
                    </Text>
                    <TextInput
                        placeholder="add option"
                        style={{
                            width: '100%',
                            height: 50,
                            marginTop: 8,
                            borderRadius: 8,
                            padding: 8,
                            fontSize: 18,
                            color: 'white',
                            justifyContent: 'flex-start',
                            backgroundColor: '#4C536F'
                        }}
                        onChangeText={text => setOption3(text)}
                    />
                </View>
            </ScrollView>
            <TouchableOpacity
                onPress={onAddQuestion}
                disabled={
                    question.length && option1.length && option2.length && option3.length ? false : true
                }
                style={{
                    width: '100%',
                    height: 100,
                    backgroundColor: question.length && option1.length && option2.length && option3.length ? 'green' : 'black',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Text style={{
                    color: 'white',
                    fontSize: 30
                }}>
                    Add question
                </Text>
            </TouchableOpacity>

        </Container>
    )
}

export default AddQuiz