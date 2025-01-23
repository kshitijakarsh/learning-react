import { atom, atomFamily, selectorFamily } from "recoil";
// import { TODOS } from "./todos";
import axios from "axios";

// export const todosAtomFamily = atomFamily({
//     key : "todosAtomFamily",
//     default : id => {
//         let foundTodo = null
//         for(let i = 0; i<TODOS.length; i++){
//             if(TODOS[i].id === id){
//                 foundTodo = TODOS[i]
//             }
//         }
//         return foundTodo
//     }
// })

export const todosAtomFamily = atomFamily({
    key : "todosAtomFamily",
    default : selectorFamily({
        key: "todosAtomFamilySelector",
        get: function(id){
            return async function ({get}) {
                const res = await axios.get(`http://localhost:3000/todos/${id}`) 
                // console.log(res.data);
                return res.data
            }
        }
    })
})