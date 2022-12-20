import { useEffect } from "react"
import { useState } from "react"

export const Dashboard = ()=>{
    const [isloading , setloading] = useState(true)
    const [data , setData] = useState([])
    useEffect(()=>{
        fetch('https://mock13-backend.onrender.com/dashboard').then((res)=>{
            return res.json()
        }).then((res)=>{
            console.log(res)
            setloading(false)
            setData(res)
        }).catch((err)=>{
            console.log(err)
        })
    } , [])
    if(isloading){
        return <div>loading....</div>
    }
    return (
        <>
            <h1>Dashboard</h1>
            <div>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Level</th>
                            <th>Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((e)=>{
                            return <tr>
                                <td>{e.name}</td>
                                <td>{e.level}</td>
                                <td>{e.score}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}