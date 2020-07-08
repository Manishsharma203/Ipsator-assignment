import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addCard, deleteList } from '../redux/actions'
import Card from './Card'

export default function List({listData}) {

    const dispatch = useDispatch()
    const add=(e)=>{
        var date = new Date();
        var ms = date.getTime();
        if(e.keyCode===13){
            dispatch(addCard({card:e.target.value,label:listData.label,time:ms}))
            e.target.value=''
        }
    }

    const dragstart=(e)=>{
        const target=e.target
        e.dataTransfer.setData('card',target.dataset.parent)
    }

    const dragover=(e)=>{
        e.stopPropagation()
    }
    return (
        <div>
            <div className='h1 text-white'>{listData.label}</div>

            {listData.entries && listData.entries
            .sort((a,b)=>a.time-b.time)
            .map(e=>
                <div
                style={{cursor:'move'}}
                onDragStart={dragstart}
                onDragOver={dragover}
                draggable="true"
                data-parent={JSON.stringify({cardDetails:e,prevlistName:listData.label})}
                key={e.name} className='border my-1 text-dark bg-light rounded'>
                    <Card listName={listData.label} cardData={e}/>
                </div>   
            )}

            <div>
                <input onKeyUp={(e)=>add(e)} className='col-12' type='text' placeholder='+ Add a card...'/>
            </div>
            <div className='mt-4'>
                <button className='text-danger btn' onClick={()=>dispatch(deleteList(listData.label))}>
                    <span className="iconify" style={{fontSize:'30px'}} data-icon="gridicons:cross-circle" data-inline="false"></span>
                </button>
            </div>
        </div>
    )
}
