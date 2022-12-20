import { PlayZone } from "./PlayZone"

import {Routes , Route} from 'react-router-dom'
import { Form } from "./From"
import { Dashboard } from "./Dashboard"

export const Allroutes = ()=>{
    return <Routes>
        <Route path='/' element={<Form/>}></Route>
        <Route path='/playzone' element={<PlayZone/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
}