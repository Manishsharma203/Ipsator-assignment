import React from 'react'
import AddLists from './AddLists'
import { useSelector, useDispatch } from 'react-redux'
import List from './List'
import { deleteCard, addCard } from '../redux/actions'

export default function Dashboard() {
    const dispatch = useDispatch()
    const allLists=useSelector(state=>state.allLists)

    const drop=(e)=>{
        e.preventDefault()
        const card= JSON.parse(e.dataTransfer.getData('card'))
        console.log(card)
        console.log(e.target)
        if(e.target.dataset.listname || e.target.parentElement.parentElement.dataset.listname){
            // add to new list
            dispatch(addCard({card:card.cardDetails.name,
                label:e.target.dataset.listname || e.target.parentElement.parentElement.dataset.listname,
                time:card.cardDetails.time}))
            // del from previous list
            if(card.prevlistName!==e.target.dataset.listname && card.prevlistName!== e.target.parentElement.parentElement.dataset.listname){
                dispatch(deleteCard({card:card.cardDetails,listName:card.prevlistName}))
            }
        }
    }

    const dragover=(e)=>{
        e.preventDefault()
    }
    return (
        <div>
            <AddLists/>

            <div className='d-flex flex-wrap'>
            {allLists && allLists.map(e=>
                <div
                onDrop={drop}
                onDragOver={dragover}
                data-listname={e.label}
                key={e.label}
                className='col-3 listClass'>
                    <List listData={e}/>
                </div>
            )}
            </div>
        </div>
    )
}
