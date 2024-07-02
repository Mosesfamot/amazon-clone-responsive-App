let navBar = document.getElementById("navbar");

let navigationBar = () => {
    return (navBar.innerHTML = navbarData
      .map((x) => {
        let { id, name, price, desc, img } = x;
        let search = basket.find((x) => x.id === id) || [];
        return `
              <div id=product-id-${id} class="item">
                  <img width="220" src=${img} alt="">
                  <div class="details">
                      <h3>${name}</h3>
                      <p>${desc}</p>
                      <div class="price-quantity">
                          <h2>$ ${price}</h2>
                          <div class="buttons">
                              <i onclick=decrement(${id}) class="bi bi-dash-lg"></i>
                              <div id=${id} class="quantity">
                              ${search.item === undefined ? 0 : search.item}
                              </div>
                              <i onclick=increment(${id}) class="bi bi-plus-lg"></i>
                          </div>
                      </div>
                  </div>
              </div>
              `;
      })
      .join(""));
  };
  
  navigationBar();



const imageSlider = document.querySelectorAll('.header-slider ul img');
const prevButton = document.querySelector('.control_prev');
const nextButton = document.querySelector('.control_next');

let n = 0;

function changeSlide() {
    for (let i = 0; i < imageSlider.length; i++) {
        imageSlider[i].style.display = 'none';
    }
    imageSlider[n].style.display = 'block';
};

changeSlide();

prevButton.addEventListener('click', (e) => {
    if (n > 0) {
        n--;
    } else {
        n = imageSlider.length - 1;
    }
    changeSlide();
});

nextButton.addEventListener('click', (e) => {
    if (n < imageSlider.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSlide();
});

const scrollContainer = document.querySelectorAll('.products');

for (const item of scrollContainer) {
    item.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}