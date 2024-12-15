
const imgWrap = document.getElementById('img-wrap');
const getSeason = imgWrap.dataset.season
const creatImg = document.createElement("img");
const imgLength = 10;
const random = String(Math.floor((Math.random() * imgLength) + 1)).padStart(2, "0");

function imgWrapClass(){
    imgWrap.classList.add('show');
}

if(getSeason == "1"){
    creatImg.src = `images/spring/bg_${random}.jpg`
}else if(getSeason == "2"){
    creatImg.src = `images/summer/bg_${random}.jpg`
}else if(getSeason == "3"){
    creatImg.src = `images/autumn/bg_${random}.jpg`
}else{
    creatImg.src = `images/winter/bg_${random}.jpg`
}

imgWrap.appendChild(creatImg);
setTimeout(imgWrapClass, 300)







