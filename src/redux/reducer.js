import {ADD_A_LIST, ADD_CARD, EDIT_CARD, DELETE_CARD} from './actions'

const initialState={
    allLists:[]
    // {label:'...' , entries:[....{}..{name:'...',time:'...'}...]}
}

export const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case ADD_A_LIST:
            let newLabel= action.payload
            let oldLists=state.allLists
            for(let i=0;i<oldLists.length;i++){
                if(oldLists[i].label===newLabel){
                    alert('This list already added');
                    return state;
                }
            }
            return {
                ...state,
                allLists:[...oldLists,{label:newLabel,entries:[]}]
            }
        case ADD_CARD:
            let newEntry= action.payload.card
            let listName= action.payload.label
            let newTime= action.payload.time
            let oldLists2= state.allLists
            for(let i=0;i<oldLists2.length;i++){
                if(oldLists2[i].label===listName){
                    for(let j=0;j<oldLists2[i].entries.length;j++){
                        if(oldLists2[i].entries[j].name===newEntry){
                            alert('Card already there');
                            return state;
                        }
                    }
                    oldLists2[i].entries.push({name:newEntry,time:newTime})
                }
            }
            return {
                ...state,
                allLists:[...oldLists2]
            }
        case EDIT_CARD:
            let newCard=action.payload.card
            let listLabel=action.payload.listName
            let oldLists3= state.allLists
            for(let i=0;i<oldLists3.length;i++){
                if(oldLists3[i].label===listLabel){
                    for(let j=0;j<oldLists3[i].entries.length;j++){
                        if(oldLists3[i].entries[j].time===newCard.time){
                            oldLists3[i].entries[j].name=newCard.name
                        }
                    }
                }
            }
            return {
                ...state,
                allLists:[...oldLists3]
            }
        case DELETE_CARD:
            let cardToDelete=action.payload.card
            let listLabelName= action.payload.listName
            let oldLists4= state.allLists
            let newLists=[]
            for(let i=0;i<oldLists4.length;i++){
                if(oldLists4[i].label===listLabelName){
                    oldLists4[i].entries = oldLists4[i].entries.filter(e=>e.time!==cardToDelete.time)
                }
            }
            return {
                ...state,
                allLists:[...oldLists4]
            }
        default:
            return state;
    }
}