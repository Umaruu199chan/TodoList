import { useState } from "react"
type Todos = {
    id: number;
    title: string;
    details?: string
}

function Test() {
    const [todos, setTodos] = useState<Todos[]>([]);
    const [title, setTitle] = useState<string>('');
    const [details, setDetails] = useState<string>('');
    const [error, setError] = useState<string>('');


    function addToDo() {
        if (title.trim() == '' || details.trim() == '') {
            setError(" Please Input Something First");
            return;
        }
        const addToList: Todos = {
            id: Date.now(),
            title: title.trim(),
            details: details.trim()
        }

        setTodos(prevTodo => [...prevTodo, addToList]);
        setTitle("");
        setDetails("");
    }

    function removeToDo(id: number) {
        setTodos(prevTodo => prevTodo.filter(todo => todo.id !== id));
    }

    return (
        <div className="flex flex-row justify-center gap-2">
            <div className="px-5 py-5 w-md rounded-xl flex flex-col gap-2 bg-white shadow-lg/20">
                <h1 className="text-center text-2xl">Add To Do</h1>
                <div className="min-h-[24px]">
                {title == "" && (
                    <p className="text-center text-red-500">{error}</p>
                )}
                </div>
                <input
                    type="text"
                    value={title}
                    name="title"
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Add Title"
                    className="w-full  border  border-gray-300 rounded-lg py-3 px-5 outline-none"
                />
                <textarea
                    name="textArea"
                    value={details}
                    onChange={e => setDetails(e.target.value)}
                    placeholder="Add details.."
                    className="w-full p-4 border border-gray-300 rounded-lg outline-none resize-none"
                />
                <button
                type="button"
                onClick={addToDo}
                className="px-2 py-2 rounded-lg border-b hover:shadow-lg hover:border-t hover:scale-105 transition-transform duration-300 ease-in-out">Add</button>
            </div>
            <div className=" px-5 py-5 w-[400px] rounded-xl flex flex-col gap-2 bg-white shadow-lg/20 resize-none">
            <h1 className="text-center text-2xl">To Do List</h1>
                <ul className="flex flex-col gap-2 overflow-y-auto max-h-[180px]">
                    {todos.map((todo) => (
                        <li className="p-5 bg-gray-100 rounded-xl" key={todo.id}>
                            <h2 className="text-xl font-bold px-2">{todo.Title}</h2>
                            <p className="px-2 py-2">{todo.Details}</p>
                            <button type="button" className=" p-1 border-b hover:shadow-md w-full" onClick={() => removeToDo(todo.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Test