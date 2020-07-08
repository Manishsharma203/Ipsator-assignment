import React from 'react'
import AddLists from './AddLists'
import { useSelector } from 'react-redux'
import List from './List'

export default function Dashboard() {
    const allLists=useSelector(state=>state.allLists)
    return (
        <div>
            <AddLists/>

            <div className='d-flex'>
            {allLists && allLists.map(e=>
                <div className='col-3 listClass' key={e.label}>
                    <List listData={e}/>
                </div>
            )}
            </div>
        </div>
    )
}
