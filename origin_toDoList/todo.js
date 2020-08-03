window.onload = () => {
    const doingNum = document.getElementById('doing');
    const doneNum = document.getElementById('done');

    function getToDoContainer() {
        return document.getElementById('todo');
    }

    function getDoneContainer() {
        return document.getElementById('done_ul');
    }

    function setDoingNum() {
        const todoContainer = getToDoContainer();
        doingNum.innerText = todoContainer.children.length;
    }

    function setDoneNum() {
        const doneContainer = getDoneContainer();
        doneNum.innerText = doneContainer.children.length;
    }

    function onCheckboxChanged(e) {
        const containerId = e.target.parentNode.parentNode.id;
        const todoContainer = getToDoContainer();
        const doneContainer = getDoneContainer();
        if (containerId === 'todo') {
            doneContainer.appendChild(e.target.parentNode);
        } else {
            todoContainer.appendChild(e.target.parentNode);
        }
        setDoingNum();
        setDoneNum();
    }

    function onDelete(e) {
        e.target.parentNode.parentNode.removeChild(e.target.parentNode);
        setDoingNum();
        setDoneNum();
    }

    function createElements(text) {
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.onchange = onCheckboxChanged;

        const p = document.createElement('p');
        p.innerText = text;
        const del = document.createElement('a');
        del.onclick = onDelete;

        const li = document.createElement('li');

        li.appendChild(checkbox);
        li.appendChild(p);
        li.appendChild(del);
        return li;
    }

    const input = document.getElementById('input');

    input.addEventListener('keyup', listener);

    function listener(event) {
        if (event.key === 'Enter' && event.target.value) {
            const li = createElements(event.target.value);
            const todoContainer = getToDoContainer();
            todoContainer.appendChild(li);
            setDoingNum();
            event.target.value = '';
        }
    }
};

// function clear() {
//     const input = document.getElementById('input');
//     input.removeEventListener('keyup','listener');
// }

