const onClickAdd = () => {
    const inputText: HTMLInputElement = <HTMLInputElement>document.getElementById("add-text");
    if (inputText == null) {
        return;
    }
    const inputTextValue: string = inputText.value;
    inputText.value = '';
    createImcompleteTodo(inputTextValue);
};

const createImcompleteTodo = (inputTextValue: string) => {
    const li = document.createElement('li');
    
    const div = document.createElement('div');
    div.className = 'list-row';
    
    const p = document.createElement('p');
    p.className = 'todo-item';
    p.innerText = inputTextValue;
    
    const completeButton = document.createElement('button');
    completeButton.innerText = '完了';                            
    completeButton.addEventListener('click', () => {
        const moveTarget = completeButton.closest('li');
        completeButton.nextElementSibling.remove();
        completeButton.remove();
        
        const backButton = document.createElement('button');
        backButton.innerText = '戻す';
        
        backButton.addEventListener('click', () => {
            const e = <HTMLParagraphElement>backButton.previousElementSibling;
            const todoText = e.innerText;
            createImcompleteTodo(todoText);
            backButton.closest('li').remove();
        });
        
        moveTarget.firstElementChild.appendChild(backButton);
        
        document.getElementById('complete-list').appendChild(moveTarget);
    });
    
    const deleteButton = document.createElement('button');
    deleteButton.innerText = '削除';    
    deleteButton.addEventListener('click', () => {
        const deleteTarget = deleteButton.closest('li');
        document.getElementById('incomplete-list').removeChild(deleteTarget);
    });
    
    div.appendChild(p);
    div.appendChild(completeButton);    
    div.appendChild(deleteButton);
    li.appendChild(div);
    
    document.getElementById('incomplete-list').appendChild(li);
};

document.getElementById("add-button").addEventListener('click', onClickAdd);