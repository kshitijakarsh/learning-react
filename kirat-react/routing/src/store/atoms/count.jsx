import { atom, selector } from "recoil";

export const countAtom = atom({
    key : "countAtom",
    default : 0
})

export const countAtomSelector = selector({
    key : "countAtomSelector",
    get: ({get})=>{
        const countAtomCount = get(countAtom)
        if(countAtomCount>0 && countAtomCount%2==0){
            return true
        }else{
            return false
        }
    }
})