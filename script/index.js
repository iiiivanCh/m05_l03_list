"use strict"

const listNew = () => {
  let words = prompt(`del - удаление последней строки\nclear - очистить список\nexit - выход из программы`);
  if (words === 'exit' || words === null) {
    return;
  }
  words = words.trim();
  console.log(words);
  if (words === '') {
    return listNew();
  }
  if (words === 'del') {
    return itemDel();
  }
  if (words === 'clear') {
    return listDel();
  }

  const list = document.querySelector('.list');
  const item = document.createElement('li');
  item.classList.add('item');
  console.log(item)
  item.innerText = words;
  list.append(item);
  console.log(item)
  // document.write(item);
  return listNew();
}

listNew();


