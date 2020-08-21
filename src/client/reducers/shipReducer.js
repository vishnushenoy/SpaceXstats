import {FETCH_SHIPS} from "../action";

export default (state=[],action)=>{
    switch (action.type) {
        case FETCH_SHIPS:
            return action.payload.data;
        default:
            return state;

    }
}
