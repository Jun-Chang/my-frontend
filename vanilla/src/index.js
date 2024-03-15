var onClickAdd = function () {
    var inputText = document.getElementById("add-text");
    if (inputText == null) {
        return;
    }
    var inputTextValue = inputText.value;
    inputText.value = '';
    createImcompleteTodo(inputTextValue);
};
var createImcompleteTodo = function (inputTextValue) {
    var li = document.createElement('li');
    var div = document.createElement('div');
    div.className = 'list-row';
    var p = document.createElement('p');
    p.className = 'todo-item';
    p.innerText = inputTextValue;
    var completeButton = document.createElement('button');
    completeButton.innerText = '完了';
    completeButton.addEventListener('click', function () {
        var moveTarget = completeButton.closest('li');
        completeButton.nextElementSibling.remove();
        completeButton.remove();
        var backButton = document.createElement('button');
        backButton.innerText = '戻す';
        backButton.addEventListener('click', function () {
            var e = backButton.previousElementSibling;
            var todoText = e.innerText;
            createImcompleteTodo(todoText);
            backButton.closest('li').remove();
        });
        moveTarget.firstElementChild.appendChild(backButton);
        document.getElementById('complete-list').appendChild(moveTarget);
    });
    var deleteButton = document.createElement('button');
    deleteButton.innerText = '削除';
    deleteButton.addEventListener('click', function () {
        var deleteTarget = deleteButton.closest('li');
        document.getElementById('incomplete-list').removeChild(deleteTarget);
    });
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);
    document.getElementById('incomplete-list').appendChild(li);
};
document.getElementById("add-button").addEventListener('click', onClickAdd);
