const noble = require('noble');
const drinks = require('./assets/data/recipes.json');
const stock = require('./assets/data/ingredients.json');

const html = require('./js/lib/html');
const find = require('./js/lib/find');

const init = () => {
  initDrinks(drinks);
  initNoble();

  [...document.querySelectorAll('.order-btn')].forEach($btn=> $btn.addEventListener('click', handleClickOrder));
}

const handleClickOrder = e => {
  e.preventDefault();
  const order = e.currentTarget.parentNode.childNodes[1].innerHTML;
  console.log(find(order, drinks, true));
}

initNoble = () => {
  noble.on('stateChange', state => {
      if (state === 'poweredOn') {

        console.log('scanning...');
        noble.startScanning([], false);
      }
      else {
        noble.stopScanning();
      }
    });

    noble.on('discover', peripheral => {
      document.querySelector('.overlay').classList.add('overlay-out');
      document.querySelector('.logo').classList.add('logo-visible');
      noble.stopScanning();

      console.log(`${peripheral.advertisement.localName}\n uuid: ${peripheral.uuid}`);
      console.log('found peripheral:', peripheral.advertisement);

       peripheral.connect(err => {
         if(err) console.log(err);

         peripheral.discoverServices([peripheral.uuid], (err, services) => {
           if(err) console.log(err);
           console.log(services);
         });
       });
    });
}

const initDrinks = drinks =>{
	drinks.forEach((item, i) =>{
    const {ingredients, name, image, description} = item;
    let mix = '';
    ingredients.map(i => mix += `${find(i.id, stock, false, true)}, `);

    let $option = html(`
      <article class='drink-item'>
        <h1>${name}</h1>
        <img src='./assets/img/drinks/number-one.png' width='100%' alt={name} />

        <p class='ingredients'>${mix}</p>
        <p class='description'>${description}</p>

        <a class='order-btn' href='#'>Order</a>
      </article>`);
    document.querySelector('.store-container').appendChild($option);
  });
}

init();
