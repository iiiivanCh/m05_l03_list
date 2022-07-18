"use strict"

const listNew = () => {
  let words = prompt(`del - удаление последней строки\nclear - очистить список\nexit - выход из программы`);
  console.log(words);
  if (words === 'exit' || words === null) {
    return;
  }
  words = words.trim();
  if (words === '') {
    return listNew();
  }
  if (words === 'del') {
    doItemDel();
    return listNew();
  }
  if (words === 'clear') {
    doListDel();
    return listNew();
  }
  doItemNew(words);
  return listNew();
}
listNew();

function doItemNew(words) {
  const list = document.querySelector('.list');
  const item = document.createElement('li');
  item.classList.add('item');
  item.innerText = words;
  list.append(item);
}

function doListDel() {
  const item = document.querySelectorAll('.item');
  for (let del of item) {
    del.remove();
  }
}

function doItemDel() {
  const item = document.querySelector('.item:last-child');
  item.remove();
}


