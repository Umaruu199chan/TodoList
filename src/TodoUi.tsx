function TodoUi() {
    return (
        <div className="flex flex-row justify-center gap-2">
            <div className="px-5 py-5 w-md rounded-xl flex flex-col gap-2 bg-white shadow-lg/20">
                <h1 className="text-center text-2xl border-b  pb-1 border-gray-400">Add To Do</h1>
                <div className="min-h-[24px]">
                {/* {!title.trim() && (
                    <p className="text-center text-red-500">{error}</p>
                )} */}
                </div>
                <input
                    type="text"
                    // value={title}
                    name="title"
                    // onChange={handleTitleChange}
                    placeholder="Add Title"
                    className="w-full  border  border-gray-400 rounded-lg py-3 px-5 outline-none"
                />
                <textarea
                    name="textArea"
                    // value={details}
                    // onChange={handleDetailsChange}
                    placeholder="Add details.."
                    className="w-full p-4 border border-gray-400 rounded-lg outline-none resize-none"
                />
                <button
                type="button"
                // onClick={addToDo}
                className="px-2 py-2 rounded-lg border-b border-gray-400 hover:shadow-lg hover:border-t hover:border-gray-400 hover:scale-105 transition-transform duration-300 ease-in-out">Add</button>
            </div>
            <div className=" px-5 py-5 w-[400px] rounded-xl flex flex-col gap-2 bg-white shadow-lg/20 resize-none">
            <h1 className="text-center text-2xl border-b border-gray-400 pb-1">To Do List</h1>
                <ul className="flex flex-col gap-2 overflow-y-auto max-h-[180px]">
                    {/* {todos.map((todo) => (
                        <li className="p-5 bg-gray-100 rounded-xl" key={todo.id}>
                            <h2 className="text-xl font-bold px-2">{todo.title}</h2>
                            <p className="px-2 py-2">{todo.details}</p>
                            <button type="button" className=" p-1 border-b hover:shadow-md w-full" onClick={() => removeToDo(todo.id)}>Delete</button>
                        </li>
                    ))} */}
                </ul>
            </div>
        </div>
    )
}
export default TodoUi