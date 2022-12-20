import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { storeValue } from "../Redux/action"
export const Form = ()=>{

    const navigate = useNavigate()
    const dispatch = useDispatch()

    function handleFrom(e){
        e.preventDefault()
        let d = e.target
        let data = {
            name : d[0].value ,
            level : d[1].value ,
            score : 0
        }
        console.log(data)
        fetch('https://mock13-backend.onrender.com/user' , {
            method:'POST' ,
            body : JSON.stringify(data) ,
            headers :{
                'Content-Type' :'application/json'
            }
        }).then((res)=>{
            return res.json()

        }).then((res)=>{
            console.log(res)
            dispatch(storeValue(res))
            navigate('/playzone')
        })

        .catch((err)=>{
            console.log(err)
        })
    }

    return (
        <>
            <form onSubmit={(e)=>handleFrom(e)}>
                <h1>User Details Form</h1>
                <input type='text' placeholder='enter name'/>
                <select>
                    <option value='Low'>Low</option>
                    <option value='Medium'>Medium</option>
                    <option value='High'>High</option>
                </select>
                <input type='submit' value='submit'/>
            </form>
        </>
    )
}