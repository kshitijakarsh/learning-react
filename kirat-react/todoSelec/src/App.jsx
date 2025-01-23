import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { useState } from "react";
import { todoAtom, filteringAtom } from "./store/atoms/filterAtom";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const [description, setDescription] = useState("");
  const [todoList, setTodoList] = useRecoilState(todoAtom);
  const filteredData = useRecoilValue(filteringAtom)
  const [isAdded, setIsAdded] = useState(false);

  const handleAddClick = () => {
    setIsAdded(true);
    
    setTodoList([...todoList, { todo, description }]);
  };

  return (
    <>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />

      <input
        type="text"
        placeholder="description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />

      <input type="text"
      placeholder="filter"
      onChange={(e) => {
        setFilter(e.target.value)
      }} />

      <button onClick={handleAddClick}>Add</button>

      {isAdded && (
        <div>
          <h2>Todo List</h2>
          
            <ul>
              {todoList.map((item, index) => (
                <li key={index}>
                  <span> todo is : {item.todo} </span> <br />
                  <span>description is : {item.description}</span>
                </li>
              ))}
            </ul>
        </div>
      )}
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

function App() {
  return (
    <RecoilRoot>
      <TodoForm />
    </RecoilRoot>
  );
}

export default App;
