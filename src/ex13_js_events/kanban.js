const dataMock = [
    { title: 'backlog',
    issues: ['Login page - performance',
        'Sprint bugfix']
    },
    { title: 'ready',
    issues: ['Shop page – performance issues',
        'Checkout bugfix',
        'Shop bug1',
        'Shop bug2',
        'Shop bug3',
        'Shop bug4',
        'Shop bug5',
        'Shop bug6',
        'Shop page – performance issues',
        'Checkout bugfix']
    },
    { title: 'progress',
        issues: [
            'User page – performance issues',
            'Auth bugfix'
        ]
    },
    { title: 'finished',
        issues: [
            'Main page – performance issues',
            'Main page bugfix'
        ]
    }
];
changeAddCartState();
document.querySelector('.profile').addEventListener('click', onProfileClick);
const addCartsButtons = document.getElementsByClassName('addCardButton');
for (let i = 0; i < addCartsButtons.length; i++){
    if (i === 0){
        addCartsButtons[0].addEventListener('click', addCartBacklog);
    } else {
        addCartsButtons[i].addEventListener('click', addCartDefault);
    }
}

const observer = new MutationObserver(changeAddCartState);
for (let elem of document.getElementsByClassName('list')){
        observer.observe(elem, {childList: true})
}

function onProfileClick(){
    if (document.getElementsByClassName('profileMenuList')[0] === undefined){
        createProfileMenuList();
    } else {
        removeProfileMenuList();
    }
}

function createProfileMenuList(){
    document.getElementsByClassName('profile')[0]
        .getElementsByClassName('arrow')[0].style.transform = 'rotate(180deg)';
    let list = document.createElement('ul');
    list.className = 'profileMenuList';
    const itemNames = ['My account', 'My portrait', 'My tasks', 'Log out'];
    for (let i = 0; i < 4; i++){
        let item = document.createElement('li');
        let itemAnchor = document.createElement('a');
        item.className = 'profileMenuItem';
        itemAnchor.className = 'profileMenuAnchor';
        itemAnchor.textContent = itemNames[i];
        item.appendChild(itemAnchor);
        list.appendChild(item);
        item.addEventListener('mouseenter', changeProfileMenuItemStyle);
        item.addEventListener('mouseleave', changeProfileMenuItemStyle);
    }
    document.body.appendChild(list);
}

function removeProfileMenuList(){
    document.getElementsByClassName('profile')[0]
        .getElementsByClassName('arrow')[0].style.transform = 'rotate(0)';
    let list = document.getElementsByClassName('profileMenuList')[0];
    let items = document.querySelectorAll('.profileMenuAnchor');
    for (let item of items){
        item.removeEventListener('mouseenter', changeProfileMenuItemStyle);
        item.removeEventListener('mouseleave', changeProfileMenuItemStyle);
    }
    document.body.removeChild(list);
}

function changeProfileMenuItemStyle() {
    let element = event.target;
    if (event.type === 'mouseenter'){
        element.style.background = 'white';
        element.style.color = 'black';
        element.style.cursor = 'pointer';
    } else {
        element.style.background = '#0067A3';
        element.style.color = 'white';
        element.style.cursor = 'default';
    }
}

function addCartBacklog() {
    const addCart = event.target;
    const txtArea = document.createElement('input');
    txtArea.className = 'listItem';
    document.getElementsByClassName('list')[0].appendChild(txtArea);
    txtArea.focus();
    txtArea.addEventListener('blur', transformElemToDiv);
    moveAddCartToBottom(addCart, 0);
}

function transformElemToDiv() {
    let listNumber;
    let list;
    const div = document.createElement('div');
    div.className = 'listItem';
    if (event.target.tagName === "INPUT") {
        div.textContent = event.target.value;
        listNumber = getParentIndex(event.target);
        list = document.getElementsByClassName('list')[listNumber];
        list.removeChild(event.target);
        event.target.removeEventListener('blur', transformElemToDiv);
    } else {
        const dropdownList = event.currentTarget.parentNode;
        div.textContent = event.currentTarget.children[0].textContent;
        listNumber = getParentIndex(dropdownList);
        document.getElementsByClassName('list')[listNumber-1].removeChild(
            findDivByText(div.textContent, document.getElementsByClassName('list')[listNumber-1])
        );
        for (let i=0; i < dropdownList.children.length; i++){
            dropdownList.childNodes[i].removeEventListener('click', transformElemToDiv);
        }
        list = document.getElementsByClassName('list')[listNumber];
        list.removeChild(dropdownList);
        list.querySelector('.dropdownButton').removeEventListener('click', remakeDropdownList);
        list.removeChild(list.querySelector('.dropdownButton'));
    }
    list.appendChild(div);
    moveAddCartToBottom(list.getElementsByClassName('addCardButton')[0], listNumber);
}

function findDivByText(str, parent) {
    for (let elem of parent.childNodes){
        if (elem.textContent === str){
            return elem;
        }
    }
    return null;
}

function getParentIndex(eventTarget) {
    let i = 0;
    for(let elem of document.getElementsByClassName('list')){
        if (eventTarget.parentNode === elem) {
            return i;
        }
        i++;
    }
    return -1;
}
function addCartDefault() {
    const listNumber = getParentIndex(event.target);
    if (document.getElementsByClassName('list')[listNumber]
         .getElementsByClassName('dropdownButton').length === 0)
    {
        const dropdownButton = document.createElement('button');
        const arrow = document.createElement('img');
        arrow.src = "asset/arrow.svg";
        arrow.className = 'arrow';
        dropdownButton.className = 'dropdownButton';
        dropdownButton.textContent = 'Select task:';
        dropdownButton.appendChild(arrow);
        document.getElementsByClassName('list')[listNumber].appendChild(dropdownButton);
        dropdownButton.addEventListener('click', remakeDropdownList);
        moveAddCartToBottom(event.target, listNumber);
    } else {
        document.getElementsByClassName('list')[listNumber]
             .getElementsByClassName('dropdownButton')[0].focus();
    }
}

function moveAddCartToBottom(addCart, num) {
    document.getElementsByClassName('list')[num].removeChild(addCart);
    document.getElementsByClassName('list')[num].appendChild(addCart);
}

function getPreviousListTasks(listIndex){
    const tasks = [];
    const prevList = document.getElementsByClassName('list')[listIndex-1].
                        getElementsByClassName('listItem');
    for (let elem of prevList){
            tasks.push(elem.textContent);
    }
    return tasks;
}

function remakeDropdownList() {
    const list = event.target.parentNode;
    if (list.getElementsByClassName('dropdownList').length !== 0){
        list.getElementsByClassName('arrow')[0].style.transform = 'rotate(0)';
        list.removeChild(list.getElementsByClassName('dropdownList')[0]);
    } else {
        list.getElementsByClassName('arrow')[0].style.transform = 'rotate(180deg)';
        let listNumber = getParentIndex(event.target);
        let tasks = getPreviousListTasks(listNumber);
        let dropdownList = document.createElement('ul');
        dropdownList.className = 'dropdownList';
        for (let str of tasks){
            const dropdownItem = document.createElement('li');
            let anchor = document.createElement('a');
            dropdownItem.className = 'dropdownItem';
            anchor.className = 'anchor';
            anchor.textContent = str;
            dropdownItem.addEventListener('click', transformElemToDiv);
            dropdownItem.appendChild(anchor);
            dropdownList.appendChild(dropdownItem);
        }
        list.appendChild(dropdownList);
        moveAddCartToBottom(list.getElementsByClassName('addCardButton')[0], getParentIndex(event.target));
    }
}

function changeAddCartState() {
    let lists = document.getElementsByClassName('list');
    for(let i = 0; i < lists.length-1; i++){
        if (lists[i].getElementsByClassName('listItem').length === 0) {
            lists[i+1].querySelector('.addCardButton').disabled = 'true';
        } else {
            lists[i+1].querySelector('.addCardButton').removeAttribute("disabled");
        }
    }
}

window.addEventListener('load', downloadTasks);
window.addEventListener('unload', uploadTasks);
function downloadTasks() {
    if (localStorage.getItem('data') === null) {
        localStorage.setItem('data', JSON.stringify(dataMock));
        addTasks(dataMock);
    } else {
        let data = JSON.parse(localStorage.getItem('data'));
        addTasks(data);
    }
}
function addTasks(data){
    let lists = document.getElementsByClassName('list');
    for (let dataObj of data){
        for (let list of lists){
            if (list.querySelector('.listCaption').textContent.toLowerCase().includes(dataObj.title.toLowerCase())) {
                for (let str of dataObj.issues){
                    const div = document.createElement('div');
                    div.className = 'listItem';
                    div.textContent = str;
                    list.appendChild(div);
                    moveAddCartToBottom(list.getElementsByClassName('addCardButton')[0], getParentIndex(list.childNodes[0]));
                }
            }
        }
    }
}

function uploadTasks() {
    let lists = document.getElementsByClassName('list');
    for (let dataObj of dataMock) {
        for (let list of lists) {
            if (list.querySelector('.listCaption').textContent.toLowerCase().includes(dataObj.title.toLowerCase())) {
                dataObj.issues = [];
                for (let item of list.getElementsByClassName('listItem')) {
                    dataObj.issues.push(item.textContent);
                }
            }
        }
    }
    localStorage.setItem('data', JSON.stringify(dataMock));
}