import { template, fill } from 'sinuous/data';

function App() {
  let username = 'luwes';
  let data = {
    handleSubmit,
    username
  };

  async function handleSubmit(event) {
    event.preventDefault();
    fetchCard(data.username);
    data.username = '';
  }

  async function fetchCard(name) {
    const response = await fetch(`https://api.github.com/users/${name}`);
    const json = await response.json();
    addNewCard(json);
  }

  function addNewCard(cardInfo) {
    data.cardsList.appendChild(template('#card')(cardInfo));
  }

  fetchCard('vimeo');

  return data;
}

fill('#app')(App());
