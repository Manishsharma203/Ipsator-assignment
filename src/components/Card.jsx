import React, { useState } from 'react'
import { editCard, deleteCard } from '../redux/actions'
import { useDispatch } from 'react-redux'

export default function Card({ cardData, listName }) {
    const [editFlag, setEditFlag] = useState(false)
    const editStart = () => {
        console.log('editStart')
        setEditFlag(!editFlag)
    }

    const dispatch = useDispatch()
    const [newCardName, setNewCard]= useState(cardData.name)

    const editDone=()=>{
        // console.log(newCardName)
        dispatch(editCard({
            card:{name:newCardName,time:cardData.time},
            listName:listName
        }))
    }

    const del=()=>{
        dispatch(deleteCard({
            card:cardData,
            listName:listName   
        }))
    }
    return (
        <div>
            <div className='d-flex mb-2'>
                <div className='text-left'>{cardData.name}</div>
                <button className='btn ml-auto' onClick={editStart}><span className="iconify" data-icon="bx:bxs-edit" data-inline="false"></span></button>
                <button className='btn' onClick={del} ><span className="iconify" data-icon="ant-design:delete-filled" data-inline="false"></span></button>
            </div>
            {editFlag &&
                <div className='d-flex col-12 mb-2'>
                    <input className='custom-select col-10' onChange={(e)=>setNewCard(e.target.value)} placeholder={cardData.name} type='text' />
                    <button className='btn btn-primary' onClick={editDone}>Done</button>
                </div>
            }
        </div>
    )
}
