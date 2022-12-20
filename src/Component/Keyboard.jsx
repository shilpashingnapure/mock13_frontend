import { useState } from "react"

export const Keyboard = ({handleWord})=>{
    const list = ['~' , 1 , 2 , 3 ,4 ,5 ,6 ,7 ,8 ,9 ,0 , 'delete' , 'tab' , 'Q', 'W' , 'E','R','T','Y','U','I','O','P','/','caps','A','S','D','F','G','H','J','K','L','Enter' ,'Shift' , 'Z','X','C','V','B','N','M','<','>','Shift','@','control','option','alt' , 'space' , 'alt','option','<-' , '->']


    return (
        <div className="keyboard">
            {list.map((e)=>{
                return <div onClick={()=>handleWord(e)}>{e}</div>
            })}
        </div>
    )
}