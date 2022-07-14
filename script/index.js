"use strict"

const listNew = () => {
  let words = prompt(`del - удаление последней строки\nclear - очистить список\nexit - выход из программы`);
  return doControlUnit(words);
}
listNew();

function doControlUnit(words) {
  if (words === 'exit' || words === null) {
    return;
  }
  words = words.trim();
  if (words === '') {
    return listNew();
  }
  if (words === 'del') {
    return doItemDel();
  }
  if (words === 'clear') {
    return doListDel();
  }
  doItemNew(words);
}

function doItemNew(words) {
  const list = document.querySelector('.list');
  const item = document.createElement('li');
  item.classList.add('item');
  item.innerText = words;
  list.append(item);
  return listNew();
}

function doListDel() {
  const item = document.querySelectorAll('.item');
  for (let del of item) {
    del.remove();
  }
  return listNew();
}

function doItemDel() {
  const item = document.querySelector('.item:last-child');
  if (item === null) {
    return listNew();
  } else {
    item.remove();
    return listNew();
  }
}


