//import { Masonry } from ./masonry.js;

const masonryContainer = document.querySelector('#masonry');
let items = [];
for (let i=0;i<50;i++){
  const item = $('<div class="card" style="height:'+Math.floor((Math.random() * 200) + 125)+'px"><span class="card-content">'+(i+1)+'</span></div>');
  items.push(item);
}

const masonry = new Masonry(masonryContainer, items);
