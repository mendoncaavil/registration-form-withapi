import { SET_TABLE_DATA } from "../Types/TableType";


const initialState = {items: ""};

const tableReducer = (state=initialState, action) => {
    switch(action.type){
        case SET_TABLE_DATA: 
        return {
            ...state, items : action.data,
        }
    }
} 

export default tableReducer;