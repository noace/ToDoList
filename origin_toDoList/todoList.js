window.onload = () => {
    const input = document.getElementById('input');
    const todoContainer = document.getElementById('todo_ol');
    const doneContainer = document.getElementById('done_ul');
    const todoNum = document.getElementById('doing');
    const doneNum = document.getElementById('done');
    let elementTpl;
    input.addEventListener('keyup', function (e) {
        if (e.key === 'Enter') {
            let text = e.target.value;
            elementTpl = generateHTMLTpl(text);
            createElement(todoContainer, elementTpl);
            setTodoNum();
            e.target.value = '';
        }
    });

    function removeElement(container,element) {
        container.removeChild(element);
    }

    window.onCheckboxChange = () => {
        // todo 1. remove old, 2. create
        if (todoContainer.id === 'todo_ol') {
            createElement(doneContainer, elementTpl);
            todoContainer.removeChild(elementTpl);
            // removeElement(todoContainer,elementTpl);
            setDoneNum();
        } else {
            createElement(todoContainer, elementTpl);
            // removeElement(doneContainer,elementTpl);
            setTodoNum();
        }
    };

    function setTodoNum(){
        todoNum.innerText = todoContainer.children.length;
    }

    function setDoneNum() {
        doneNum.innerText = doneContainer.children.length;
    }

    function createElement(container, elementTpl) {
        container.innerHTML += elementTpl;
    }

    function generateHTMLTpl(text) {
        return `
            <li>
                <label>
                    <input type="checkbox" onchange="onCheckboxChange()">            
                    ${text}
                </label>
                <button onclick="removeElement()">delete</button>
            </li>
        `;
    }
};
