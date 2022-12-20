import { useState } from "react"
import { useEffect } from "react"
import { Keyboard } from "./Keyboard"
import { useDispatch, useSelector } from "react-redux"
import {DecreadScore, IncreadScore} from '../Redux/action'
import { store } from "../Redux/store"
import { combineReducers } from "redux"

export const PlayZone = ()=>{
    const [isloading , setloading] = useState(true)

    const [Correctword , setCorrectword] = useState('')

    const [word , setWord] = useState('')

    const dispatch = useDispatch()
    const [letter,setletter] = useState([])

    const user = useSelector((s)=> s)


    useEffect(()=>{

        generateRandomWord()


    } , [])


    function generateRandomWord(){
        fetch('https://mock13-backend.onrender.com/randomWord').then((res)=>{
            return res.json()
        }).then((res)=>{
            setloading(false)
            setCorrectword(res.word)
            let lst = []
            for(let i = 0 ; i < res.word.length ; i++){
                lst.push('_')
            }
            setletter(lst)
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })


    }

    if(isloading){
        return <div>loading..</div>
    }

    function updateValue(){
        let user = store.getState()
        console.log(user)
        if(user.score < 0){
            user.score = 0
        }
        console.log(user)
        fetch(`https://mock13-backend.onrender.com/${user._id}` , {
            method:'PATCH' ,
            body : JSON.stringify(user),
            headers:{
            'Content-Type':'application/json'
            }
        }).then((res)=>{
            return res.json()

        }).then((res)=>{
            console.log(res)
            setWord('')
            generateRandomWord()
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    function checkWord(word){
        console.log(word.length , word)
        if(word.toLowerCase() == Correctword){
            console.log(word)
            alert('correct guess ....')
            dispatch(IncreadScore(word.length))

        }else{
            dispatch(DecreadScore(word.length))

        }
        updateValue()
    }



    function handleWord(value){

        if(word.length == Correctword.length || value == 'Enter'){
            checkWord(word)
        }else{

            let w = word
            if(value == 'space'){
                w = word + ' '
            }else if(value == 'delete'){
                w = word.slice(0 , word.length-1)
            }
            else{
                w += value
            }
            setWord(w)
        }
        let lst = [...letter]
        console.log(lst)
        for(let i = 0 ; i < Correctword.length ; i++){
            if(lst[i] == '_'){
                lst[i] = value
                break;
            }
        }
        setletter(lst)



    }


    return <div>
        <span className="level">Level -: {user.level}</span>
        <h1>Guess the Word</h1>
        <h1>{letter.map((e)=>{
            return <span> {e} </span>
        })}</h1>
        <Keyboard handleWord={handleWord}/>
    </div>
}