const idScreen = document.getElementById('screen'),
    idBody = document.getElementById('body'),
    previous = document.getElementById('previous'),
    next = document.getElementById('next'),
    imgArray = ["asset/wide-panorama.jpg","asset/little-kitten.jpg",
                "asset/friends.jpg", "asset/clock.jpg", "asset/cat3149.jpg"];

window.onload = createImg;
window.addEventListener('resize', resizeImg);
next.addEventListener('click', createImg);
next.addEventListener('click', switchImg);
previous.addEventListener('click', createImg);
previous.addEventListener('click', switchImg);

function arrNext(imgArray) {
    imgArray.push(imgArray.shift());
}
function arrPrev(imgArray) {
    imgArray.unshift(imgArray.pop());

}
function createImg() {
    if (document.getElementsByClassName('img')[1] !== undefined){
        idScreen.removeChild(document.getElementsByClassName('img')[0]);
    }
    let newImg = document.createElement('img');
    if (event.target.id === 'next'){
        arrNext(imgArray)
    } else {
        arrPrev(imgArray);
    }
    newImg.src = imgArray[0];
    newImg.className = 'img';
    newImg.style.order = '1';
    newImg.onload = function() {
        if (newImg.naturalHeight < newImg.naturalWidth ){
            if (newImg.naturalWidth < idScreen.clientWidth){
                newImg.style.width = newImg.naturalWidth + '';
            } else {
                newImg.style.width = '100%';
                newImg.style.height = 'auto';
            }
        } else {
            if (newImg.naturalHeight < idScreen.clientHeight){
                newImg.style.height = newImg.naturalHeight + '';
            } else {
                newImg.style.height = '100%';
                newImg.style.width = 'auto';
            }
        }
        idScreen.appendChild(newImg);
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
    if (oldImg.height > idScreen.clientHeight){
        oldImg.style.height = '100%';
        oldImg.style.width = 'auto';
    }
    if (oldImg.width > idScreen.clientWidth){
        oldImg.style.width = '100%';
        oldImg.style.height = 'auto';
    }
}
function switchImg() {
    let oldImg = document.getElementsByClassName('img')[0];
    oldImg.style.opacity = '1';
    oldImg.style.order = event.target.id === 'next' ? '0': '2';
    function animateImg(){
        oldImg.style.height = oldImg.height * 0.9 + 'px';
        oldImg.style.width = oldImg.width * 0.9 + 'px';
        oldImg.style.opacity *= 0.9;
        if ((oldImg.width < 10) || (oldImg.height < 10)){
            idScreen.removeChild(oldImg);
            clearInterval(timer);
        }
    }
    let timer = setInterval(animateImg, 15);
  }

