import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addList } from '../redux/actions'

export default function AddLists() {
    const dispatch = useDispatch()
    const [listName, setListName]= useState('')
    return (
        <div>
            <div className='d-flex mx-4'>
                <input className='col-4 form-control' type='text' onChange={(e)=>setListName(e.target.value)} placeholder='Enter a new List...' />
                <button className='btn-primary rounded-pill mx-4' onClick={(e)=>dispatch(addList(listName))}>Add</button>
            </div>
        </div>
    )
}
