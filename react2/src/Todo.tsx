import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const Todo = () => {
    const [todoText, setTodoText] = useState("");
    const [incompleteTodos, setImcompleteTodos] = useState(["TODOです1", "TODOです2"]);
    const [completeTodos, setCompleteTodos] = useState(["TODOでした1", "TODOでした2"]);
    
    const onChangeTodoText = (event: React.ChangeEvent<HTMLInputElement>) => setTodoText(event.target.value);
    
    const onClickAdd = () => {
        if ( todoText === "") return;
        const newTodos = [...incompleteTodos, todoText];
        setImcompleteTodos(newTodos);
        setTodoText("");
    };
    
    const onClickDelete = (index: number) => {
        const newTodos = [...incompleteTodos];
        newTodos.splice(index, 1);
        setImcompleteTodos(newTodos);
    };

    const onClickComplete = (index: number) => {
        const newIncompleteTodos = [...incompleteTodos];
        newIncompleteTodos.splice(index, 1);
        const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

        setImcompleteTodos(newIncompleteTodos);
        setCompleteTodos(newCompleteTodos);
    };

    const onClickBack = (index: number) => {
        const newCompleteTodos = [...completeTodos];
        newCompleteTodos.splice(index, 1);
        const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

        setImcompleteTodos(newIncompleteTodos);
        setCompleteTodos(newCompleteTodos);
    };
    
    const isLimitTodo = incompleteTodos.length >= 5;
    
    return (
        <>
            <InputTodo
                todoText={todoText}
                onChangeTodoText={onChangeTodoText}
                onClickAdd={onClickAdd}
                disabled={isLimitTodo}
            />
            {isLimitTodo && (
            <p style={{ color: "red" }}>
                登録できるTODOは5個までです。
            </p>)}
            <IncompleteTodos
                todos={incompleteTodos}
                onClickComplete={onClickComplete}
                onClickDelete={onClickDelete}
            />
            <CompleteTodos
                todos={completeTodos}
                onClickBack={onClickBack}
            />
        </>
    );
}