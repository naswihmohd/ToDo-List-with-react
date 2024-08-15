import React from 'react'
import './Style.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addData, dltData, edtData, changeStatus } from '../features/dataSlice'
import { MdDeleteForever } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

function Hero() {
    const datas = useSelector((state) => state.datas)
    console.log(datas)
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const [isEdit, setIsEdit] = useState(false)

    const handleText = (event) => {
        setText(event.target.value)
    }
    const handlePush = () => {
        if (text !== '') {
            dispatch(addData(text))
            setText('')
        } else {
            alert('enter text')
        }
    }

    const handleEdit=(id)=>{
        dispatch(edtData({newData:text,id:id}))
        console.log(id)
        setIsEdit(!isEdit)
        setText('')
    }


    return (
        <div>
            <center>
                <h1>TO-DO-LIST</h1>
                <input value={text} onChange={(e) => { handleText(e) }} type="text" />
                <button onClick={handlePush}>Add</button>


                {datas.map((data) => {
                    return (
                        <div>
                            <center>
                                {!isEdit ? <li> {data.name} <i onClick={() => dispatch(dltData(data.id))}><MdDeleteForever /></i>
                                    <i onClick={() => setIsEdit(!isEdit)}><MdEditSquare /></i>
                                    <i onClick={() => dispatch(changeStatus(data.id))} className="check"> {data.status ? <i className="done"><IoCheckmarkDoneCircle /></i> : <TiDeleteOutline />}</i> </li> :  <div><input className='edtInput' defaultValue={data.name} onChange={(e)=>handleText(e)} /> <button onClick={()=>handleEdit(data.id)} className='saveBtn'>Save</button></div> }

                            </center>
                        </div>
                    )
                })}
            </center>
        </div>
    )
}

export default Hero
