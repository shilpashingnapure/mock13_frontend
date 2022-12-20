import {ADD , SUB , STORE} from './action'

const initalState = {
}

export const reducer = (store = initalState , {type , payload})=>{
    switch(type){
        case STORE:
            return payload
        case ADD:
            return {...store , score : store.score + payload }
        case SUB:
            return {...store , score : store.score - payload }
        default:
            return store
    }
}