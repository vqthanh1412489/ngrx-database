import { Word, WordStore } from '../types';

export const GETALLWORD = 'GETALLWORD';
export const ADDWORD = 'ADDWORD';
export const DELETEWORD = 'DELETEWORD';
export const TOGGLE = 'TOGGLE';
export const EDIT = 'EDIT';

const wordsDefault:Word[] = [];

export function wordReducer(state:Word[] = wordsDefault, action){
    if (action.type === GETALLWORD) return action.words;
    if (action.type === ADDWORD) 
        return state.concat(action.word);
    if (action.type === DELETEWORD) 
        return state.filter(w => w._id !== action._id);
    if (action.type === TOGGLE){
        return state.map(w => {
            if (w._id === action._id) return {...w, isMemorized: !w.isMemorized}
            return w;
        });
    } 

    if (action.type === EDIT){
        return state.map(w => {
            if (w._id === action._id) return { ...w, en: action.en, vn: action.vn }
            return w;
        });
    } 

    return state;
}