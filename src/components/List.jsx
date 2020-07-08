import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addCard } from '../redux/actions'
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
    return (
        <div>
            <div className='h1'>{listData.label}</div>

            {listData.entries && listData.entries.map(e=>
                <div key={e.name} className='border my-1 text-dark bg-light rounded'>
                    <Card listName={listData.label} cardData={e}/>
                </div>   
            )}

            <div>
                <input onKeyUp={(e)=>add(e)} className='col-12' type='text' placeholder='Add a card...'/>
            </div>
        </div>
    )
}
