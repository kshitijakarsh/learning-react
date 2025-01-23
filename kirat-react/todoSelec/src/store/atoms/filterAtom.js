import { atom, selector } from "recoil"

export const todoAtom = atom({
    key : "todoAtom",
    default : []
})

export const filteringAtom = atom({
    key: "filterAtom",
    default: []
})

export const todoFilterer = selector({
    key: "todoFilterer",
    get : ({get})=>{
        const countAtomCount = get(countAtom)
        const filterAtomElement = get(filteringAtom)
        
        return countAtomCount.filter((todoAtom) =>
            todoAtom.toLowerCase().includes(filterAtomElement) // Case-insensitive search
          );
    }
})

