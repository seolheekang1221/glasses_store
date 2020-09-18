//-------------------------------------------------------------------------------------------------------
//Reference of images:
//https://unsplash.com/s/photos/sunglass-picture' -> I copyrighted header picture from here.
//https://unsplash.com/ -> I copyrighted 15 images from here.

//https://fontawesome.com/ -> I copyrighted icons from here.
//https://fonts.google.com/?standard-styles= -> I copyrighted fonts from here.
//https://fontawesome.com/ -> I copyrighted image fonts from here.
//https://colorhunt.co -> I copyrighted colors from here.
//-------------------------------------------------------------------------------------------------------
const data = [
  {
    url: './images/item1.jpg',
    name: 'VERSACE',
    price: '$150.60',
    desc: 'Emphasizing the shape of a circle',
    category: 'new'
  },
  {
    url: './images/item2.jpg',
    name: 'BARKA',
    price: '$170.30',
    desc: 'Having a square shape, pursuing a boyish feeling',
    category: 'hot'
  },
  {
    url: './images/item3.jpg',
    name: 'TIFFANY',
    price: '$230.00',
    desc: 'The most popular item this summer',
    category: 'new'
  },
  {
    url: './images/item4.jpg',
    name: 'GABANA',
    price: '$279.30',
    desc: 'The round is made of metal, so it highlights of luxury',
    category: 'new'
  },
  {
    url: './images/item5.jpg',
    name: 'KOLE',
    price: '$213.80',
    desc: 'This is good for those who need eye protection',
    category: 'sales'
  },
  {
    url: './images/item6.jpg',
    name: 'PRADA',
    price: '$267.00',
    desc: 'High UV protection for use in the summer vacation',
    category: 'new'
  },
  {
    url: './images/item7.jpg',
    name: 'RAY',
    price: '$224.00',
    desc: 'The simplest and most popular shape',
    category: 'hot'
  },
  {
    url: './images/item8.jpg',
    name: 'RYAN',
    price: '$189.00',
    desc: 'Express the beauty of the curve well',
    category: 'sales'
  },
  {
    url: './images/item9.jpg',
    name: 'SAM',
    price: '$300.00',
    desc: 'It has a rose gold eyeglass frame.',
    category: 'new'
  },
  {
    url: './images/item10.jpg',
    name: 'LISAS',
    price: '$289.00',
    desc: 'Having leopard pattern, emphasizing individuality more',
    category: 'hot'
  },
  {
    url: './images/item11.jpg',
    name: 'LOUIS',
    price: '$253.00',
    desc: 'The most basic and simple sunglasses',
    category: 'new'
  },
  {
    url: './images/item12.jpg',
    name: 'LAK',
    price: '$310.00',
    desc: 'Emphasize the luxury of purple-colored lenses.',
    category: 'sales'
  },
  {
    url: './images/item13.jpg',
    name: 'TRUNK',
    price: '$287.00',
    desc: 'The sunglasses with a proper combination of metal and black',
    category: 'new'
  },
  {
    url: './images/item14.jpg',
    name: 'LIO',
    price: '$292.00',
    desc: 'Having a transparent border, emphasizing cooler summer',
    category: 'hot'
  },
  {
    url: './images/item15.jpg',
    name: 'ALEX',
    price: '$236.00',
    desc: 'This product worn by Lady Gaga. It is emphasizing luxury',
    category: 'new'
  }
];

const getFullData = function(cate) {
  if (cate) {
    return data
      .filter(product => product.category === cate)
      .map(product => {
        return `
      <div class="content-container">
        <div class="content" style="background-image: url(${product.url})">
          <div class="mark">
            <div>${product.category}</div>
          </div>
        </div>
        <div class="content-item">
          <div class="name">${product.name}</div>
          <div class="desc">${product.desc}</div>
          <div class="price">${product.price}</div>
        </div>
      </div>`;
      });
  }
  return data.map(product => {
    return `
    <div class="content-container">
      <div class="content" style="background-image: url(${product.url})">
        <div class="mark">
          <div>${product.category}</div>
        </div>
      </div>
      <div class="content-item">
        <div class="name">${product.name}</div>
        <div class="desc">${product.desc}</div>
        <div class="price">${product.price}</div>
      </div>
    </div>`;
  });
};

const resetData = function() {
  const contents = document.querySelector('.contents');
  contents.innerHTML = '';
};

const allData = function() {
  const contents = document.querySelector('.contents');
  const renderData = getFullData();
  contents.innerHTML = renderData.join('');
};

const filteredData = function(category) {
  const contents = document.querySelector('.contents');
  const renderData = getFullData(category);
  contents.innerHTML = renderData.join('');
};

const all = document.querySelector('#all') || document.querySelector('#all-mobile');
const hot = document.querySelector('#hot') || document.querySelector('#hot-mobile');
const newProduct = document.querySelector('#new') || document.querySelector('#new-mobile');
const sales = document.querySelector('#sales') || document.querySelector('#sales-mobile');

all.onclick = function() {
  resetData();
  allData();
};
hot.onclick = function() {
  resetData();
  filteredData('hot');
};
newProduct.onclick = function() {
  resetData();
  filteredData('new');
};
sales.onclick = function() {
  resetData();
  filteredData('sales');
};

function init() {
  allData();
}

init();
