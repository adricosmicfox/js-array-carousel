
console.log('JS OK!');

const images = ['01', '02', '03', '04', '05'];
let activeIndex = 0;


const container = document.querySelector('.carousel-container');

for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const imageClass = i === activeIndex ? 'item active' : 'item'

    container.innerHTML += `<img class="${imageClass}"src="img/${image}.jpg" alt="${image}"/>`
}


const previousButton = document.getElementById('previous');

const nextButton = document.getElementById('next');

nextButton.addEventListener('click',
    function () {

        if (activeIndex < images.length - 1) {
            container.innerHTML = '';
            activeIndex++;

            for (let i = 0; i < images.length; i++) {
                const image = images[i];
                const imageClass = i === activeIndex ? 'item active' : 'item'

                container.innerHTML += '<img class="' + imageClass + '" src="img/' + image + '.jpg" alt="due" />'
            }
        }
    }
);


previousButton.addEventListener('click',
    function () {

        if (activeIndex > 0) {
            container.innerHTML = '';
            activeIndex--;

            for (let i = 0; i < images.length; i++) {
                const image = images[i];
                const imageClass = i === activeIndex ? 'item active' : 'item'

                container.innerHTML += '<img class="' + imageClass + '" src="img/' + image + '.jpg" alt="due" />'

            }

        }
    }
);


