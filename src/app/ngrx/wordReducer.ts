import { Word, WordStore } from '../types';

export const GETALLWORD = 'GETALLWORD';
export const ADDWORD = 'ADDWORD';
export const DELETEWORD = 'DELETEWORD';
export const UPDATEWORD = 'UPDATEWORD';

const wordsDefault:Word[] = [];

export function wordReducer(state:Word[] = wordsDefault, action){
    if (action.type === GETALLWORD) return action.words;
    if (action.type === ADDWORD) 
        return state.concat(action.word);
    if (action.type === DELETEWORD) 
        return state.filter(w => w._id !== action._id);
    if (action.type === UPDATEWORD){
        return state.map(w => {
            if (w._id === action._id) return {...w, isMemorized: !w.isMemorized}
            return w;
        });
    }  
    return state;
}