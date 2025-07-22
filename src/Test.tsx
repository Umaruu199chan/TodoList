import { useState } from "react";
import supabase from "./utils/supabase";
import TodoUi from "./TodoUi";

export interface Todo {
  id?: number;
  title: string;
  details?: string;
}

function Test() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState<string>("");
  const [details, setDetails] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleDetailsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDetails(e.target.value);
  };

  async function addToDo(): Promise<void> {
    if (title.trim() == "" || details.trim() == "") {
      setError(" Please Input Something First");
      return;
    }
    const { data, error } = await supabase
      .from("todos")
      .insert([{ title: title.trim(), details: details.trim() }])
      .select();

    if (error) {
      console.error(error.message);
      setError("Failed to add todo.");
      return;
    }
    if (data) {
      console.log("Data has been stored");
      setTodos((prev) => [...prev, ...data]);
      setTitle("");
      setDetails("");
      setError("");
    }
  }

  return (
    <TodoUi
      title={title}
      details={details}
      error={error}
      onTitleChange={handleTitleChange}
      onDetailsChange={handleDetailsChange}
      onSubmit={addToDo}
      todos={todos}
    />
  );
}
export default Test;
