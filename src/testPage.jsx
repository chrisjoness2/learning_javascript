import { useState } from "react";

function Javascript() {
    const time = new Date().getHours();
    const [list, setList] = useState([]);
    const [input, setInput] = useState("");


    const addTodo = (todo) => {
        const newToDo = {
            id: Math.random(),
            todo: todo,
        }
    setList([...list, newToDo]);
    setInput("");
    };

    const deleteItem = (id) => {
        const newList = list.filter((todo) => todo.id !== id);
        setList(newList); 

    };

    return (
        <>
        {time < 12 && <p className="morning"> Good morning Christian </p> }
        {time > 16 && <p className="afternoon"> Good afternoon Christian </p>}
        {time > 24 && <p className="evening"> Good evening Christian. Have a nice day</p> }

        <div className="list">
            <h1> ToDo List </h1>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => addTodo(input)}> Add </button>
            <ul>
                {list.map((todo) => (
                    <li key={todo.id}>
                        {todo.todo}
                        <button onClick={() => deleteItem(todo.id)}> X </button>
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default Javascript;