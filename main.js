var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
var slidesCount = sliderImages.length;
var currentIndex = 1;
var sliderNumber = document.querySelector('.slider-number');
var nextButton = document.querySelector('.next');
var prevButton = document.querySelector('.prev');
var paginationElementUl = document.createElement('ul');

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

paginationElementUl.setAttribute('id', 'pagination-ul');

for (var i = 1; i <= slidesCount; i++) {   
    var listItems = document.createElement('li');
    listItems.setAttribute('data-index', i);
    listItems.appendChild(document.createTextNode(i));
    paginationElementUl.appendChild(listItems);
}

document.getElementById('indecator').appendChild(paginationElementUl);

var bulletList = Array.from(document.querySelectorAll('#pagination-ul li'));

for (var i = 0; i < bulletList.length; i = i + 1) {
    bulletList[i].onclick = function () {
        currentIndex = parseInt(this.getAttribute('data-index'));
        theChecker();
    }
}

theChecker();

function nextSlide() {
    if (nextButton.classList.contains('disabled')) {
        return false;
    } else {
        currentIndex += 1;
        theChecker();
    }
}

function prevSlide() {
    if (prevButton.classList.contains('disabled')) {
        return false;
    } else {
        currentIndex -= 1;
        theChecker();
    }
}

function theChecker() {
    sliderNumber.textContent = "Slide #" + currentIndex + " of " + slidesCount;
    removeAllActiveClass();
    sliderImages[currentIndex - 1].classList.add('active');
    document.getElementById('pagination-ul').children[currentIndex - 1].classList.add('active');
    if (currentIndex == 1) {
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }
    if (currentIndex == slidesCount) {
        nextButton.classList.add('disabled');
    } else {
        nextButton.classList.remove('disabled');
    }
}

function removeAllActiveClass() {
    sliderImages.forEach(function (img) {
        img.classList.remove('active');
    });

    bulletList.forEach(function (bull) {
        bull.classList.remove('active');
    });
}