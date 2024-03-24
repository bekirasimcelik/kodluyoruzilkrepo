// Menu Objects
const menu = [
  {
    id: 1,
    title: "Kung Pao Chicken",
    category: "Çin",
    price: 12.99,
    img: "img/kungPao.jpg",
    desc: "Kung Pao Chicken, acı soslu ve fıstıklı geleneksel bir Çin yemeğidir."
  },
  {
    id: 2,
    title: "Sushi Platter",
    category: "Japon",
    price: 22.99,
    img: "img/sushiPlatter.avif",
    desc: "Çeşitli taze sushi seçeneklerinden oluşan bir tabak."
  },
];

// Button Function
function createButtons() {
  const categories = menu.reduce((values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  }, ['Hepsi']);
  
  const btnContainer = document.querySelector('.btn-container');
  categories.forEach(category => {
    const button = document.createElement('button');
    button.classList.add('btn-item');
    button.innerText = category;
    button.addEventListener('click', () => {
      displayMenuItems(menu.filter(menuItem => menuItem.category === category || category === 'Hepsi'));
    });
    btnContainer.appendChild(button);
  });
}

// Menu Object Function
function displayMenuItems(menuItems) {
  const sectionCenter = document.querySelector('.section-center');
  let displayMenu = menuItems.map(item => {
    return `<div class="menu-items col-lg-6 col-sm-12">
              <img src="${item.img}" alt="${item.title}" class="photo">
              <div class="menu-info">
                <div class="menu-title">
                  <h4>${item.title}</h4>
                  <h4 class="price">${item.price}₺</h4>
                </div>
                <div class="menu-text">${item.desc}</div>
              </div>
            </div>`;
  });
  displayMenu = displayMenu.join('');
  sectionCenter.innerHTML = displayMenu;
}

// Show All Menu for the First Load
window.addEventListener('DOMContentLoaded', () => {
  createButtons();
  displayMenuItems(menu);
});
