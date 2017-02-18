//import { Masonry } from ./masonry.js;

const masonryContainer = document.querySelector('#masonry');
let items = [];
for (let i=0;i<50;i++){
  const item = $('<div class="card" style="height:'+Math.floor((Math.random() * 200) + 125)+'px"><span class="card-content">'+(i+1)+'</span></div>');
  items.push(item);
}

const masonry = new Masonry(masonryContainer, items);

let extraItems = [];
for (let i=0;i<25;i++){
  const item = $('<div class="card" style="height:'+Math.floor((Math.random() * 200) + 125)+'px"><span class="card-content">'+(i+1)+'</span></div>');
  extraItems.push(item);
}
setTimeout(() => {
  masonry.appendItems(extraItems);
}, 5000)
