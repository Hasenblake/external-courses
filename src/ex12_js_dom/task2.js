document.querySelector('.profile').addEventListener('click', onProfileClick);

function onProfileClick(){
    if (document.getElementsByClassName('list')[0] === undefined){
        createList();
    } else {
        removeList();
    }
}

function createList(){
    document.querySelector('.arrow').style.transform = 'rotate(180deg)';
    let list = document.createElement('ul');
    list.className = 'list';
    const itemNames = ['My account', 'My portrait', 'My tasks', 'Log out'];
    for (let i = 0; i < 4; i++){
        let item = document.createElement('li');
        let itemAnchor = document.createElement('a');
        item.className = 'item';
        itemAnchor.className = 'itemAnchor';
        itemAnchor.textContent = itemNames[i];
        item.appendChild(itemAnchor);
        list.appendChild(item);
        item.addEventListener('mouseenter', changeStyle);
        item.addEventListener('mouseleave', changeStyle);
    }
    document.body.appendChild(list);
}

function removeList(){
    document.querySelector('.arrow').style.transform = 'rotate(0)';
    let list = document.getElementsByClassName('list')[0];
    let items = document.querySelectorAll('.itemAnchor');
    for (let item of items){
        item.removeEventListener('mouseenter', changeStyle);
        item.removeEventListener('mouseleave', changeStyle);
    }
    document.body.removeChild(list);
}

function changeStyle() {
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

