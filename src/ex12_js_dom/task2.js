document.querySelector('.profile').addEventListener('click', profileClickHandler);
function profileClickHandler(){
    if (document.getElementsByClassName('list')[0] === undefined){
        createList();
    } else {
        removeList();
    }
}
function createList(){
    document.querySelector('.arrow').style.transform = 'rotate(180deg)';
    let list = document.createElement('div');
    list.className = 'list';
    const btnValues = ['My account', 'My portrait', 'My tasks', 'Log out'];
    for (let i = 0; i < 4; i++){
        let item = document.createElement('button');
        item.className = 'item';
        item.textContent = btnValues[i];
        list.appendChild(item);
        item.addEventListener('mouseenter', hoverStyleOn);
        item.addEventListener('mouseleave', hoverStyleOff);
    }
    document.body.appendChild(list);
}
function removeList(){
    document.querySelector('.arrow').style.transform = 'rotate(0)';
    let list = document.getElementsByClassName('list')[0];
    let items = document.querySelectorAll('.item');
    for (let item of items){
        item.removeEventListener('mouseenter', hoverStyleOn);
        item.removeEventListener('mouseleave', hoverStyleOff);
    }
    document.body.removeChild(list);
}
function hoverStyleOn() {
    let element = event.target;
    element.style.background = 'white';
    element.style.color = 'black';
    element.style.cursor = 'pointer';
}
function hoverStyleOff() {
    let element = event.target;
    element.style.background = '#0067A3';
    element.style.color = 'white';
    element.style.cursor = 'default';
}
