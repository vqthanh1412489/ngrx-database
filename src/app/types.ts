export interface Word {
    _id: string;
    en: string;
    vn: string;
    isMemorized: boolean;
}

export interface WordStore {
    wordReducer : Word;
}