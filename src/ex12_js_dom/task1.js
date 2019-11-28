const screen = document.getElementsByClassName('screen')[0];
const toPreviousImgButton = document.getElementsByClassName('toPreviousImgButton')[0];
const toNextImgButton = document.getElementsByClassName('toNextImgButton')[0];
const imgCollection = ["asset/wide-panorama.jpg","asset/little-kitten.jpg",
                "asset/friends.jpg", "asset/clock.jpg", "asset/cat3149.jpg"];
let animationTimer;

window.onload = createImg;
window.addEventListener('resize', resizeImg);
toNextImgButton.addEventListener('click', createImg);
toNextImgButton.addEventListener('click', switchImg);
toPreviousImgButton.addEventListener('click', createImg);
toPreviousImgButton.addEventListener('click', switchImg);

function moveFirstElemToEnd(arr) {
    arr.push(arr.shift());
}

function moveLastElemToStart(arr) {
    arr.unshift(arr.pop());
}

function createImg() {
    if (document.getElementsByClassName('img')[1] !== undefined){
        screen.removeChild(document.getElementsByClassName('img')[0]);
    }
    let newImg = document.createElement('img');
    if (event.target === toNextImgButton){
        moveFirstElemToEnd(imgCollection)
    } else {
        moveLastElemToStart(imgCollection);
    }
    newImg.src = imgCollection[0];
    newImg.className = 'img';
    newImg.style.order = '1';
    newImg.onload = function() {
        if (newImg.naturalHeight < newImg.naturalWidth ){
            if (newImg.naturalWidth < screen.clientWidth){
                newImg.style.width = newImg.naturalWidth + '';
            } else {
                newImg.style.width = '100%';
                newImg.style.height = 'auto';
            }
        } else {
            if (newImg.naturalHeight < screen.clientHeight){
                newImg.style.height = newImg.naturalHeight + '';
            } else {
                newImg.style.height = '100%';
                newImg.style.width = 'auto';
            }
        }
        screen.appendChild(newImg);
        resizeImg();
    }
}

function resizeImg() {
    let oldImg;
    if (document.getElementsByClassName('img')[1] !== undefined){
        oldImg= document.getElementsByClassName('img')[1];
    } else {
        oldImg= document.getElementsByClassName('img')[0];
    }
    if (oldImg.height > screen.clientHeight){
        oldImg.style.height = '100%';
        oldImg.style.width = 'auto';
    }
    if (oldImg.width > screen.clientWidth){
        oldImg.style.width = '100%';
        oldImg.style.height = 'auto';
    }
}

function switchImg() {
    let oldImg = document.getElementsByClassName('img')[0];
    oldImg.style.opacity = '1';
    oldImg.style.order = event.target === toNextImgButton ? '0': '2';
    animationTimer = setInterval(animateImg, 15, oldImg);
}

function animateImg(img){
    let oldImg = img;
    oldImg.style.height = oldImg.height * 0.9 + 'px';
    oldImg.style.width = oldImg.width * 0.9 + 'px';
    oldImg.style.opacity *= '0.9';
    if ((oldImg.width < 10) || (oldImg.height < 10)){
        screen.removeChild(oldImg);
        clearInterval(animationTimer);
    }
}
