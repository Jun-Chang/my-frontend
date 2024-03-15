type Props = {
    todoText: string;
    onChangeTodoText: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onClickAdd: () => void;
    disabled: boolean;
};

const style = {
    backgroundColor: "#c6e5d9",
    width: "400px",
    height: "30px",
    padding: "8px",
    margin: "8px",
    borderRadius: "8px"
}

export const InputTodo = (props: Props) => {
    const { todoText, onChangeTodoText, onClickAdd, disabled } = props;
    return (
        <div style={style}>
            <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText}/>
            <button onClick={onClickAdd} disabled={disabled}>追加</button>
         </div>
    );
};