document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit)

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);

  })

  const handleFormSubmit = function(event) {
    event.preventDefault();
    const hallOfFameItem = createHallOfFameItem(event.target);
    const hallOfFame = document.querySelector('#hall-of-fame')
    hallOfFame.appendChild(hallOfFameItem);
    event.target.reset();
}

  const handleDeleteAllClick = function (event) {
  const hofList = document.querySelector('#hall-of-fame');
  hofList.innerHTML = '';
}


const createHallOfFameItem = function (form) {
  const hallOfFameItem = document.createElement('li');
  hallOfFameItem.classList.add('hall-of-fame-item');

  const name = document.createElement('p');
  name.textContent = `Name: ${form.name.value}`;
  hallOfFameItem.appendChild(name);

  const age = document.createElement('p');
  age.textContent = `Age: ${form.age.value}`;
  hallOfFameItem.appendChild(age);

  const position = document.createElement('p');
  position.textContent = `Position: ${form.position.value}`;
  hallOfFameItem.appendChild(position);

  const caps = document.createElement('p');
  caps.textContent = `Scotland Caps: ${form.caps.value}`;
  hallOfFameItem.appendChild(caps);

  const image = document.createElement('input');
  image.setAttribute("type", "image");
  image.src = form.image.value;
  hallOfFameItem.appendChild(image);

  return hallOfFameItem;
}
