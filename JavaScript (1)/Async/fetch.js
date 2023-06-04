// fetch - функция для получения данных по URL
// fetch(url)

// GET - получение данных, POST - отправка данных

TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

const createToDoElement = (text) => {
  const todoElement = document.createElement('li');
  const todoElementAnchor = document.createElement('a');
  todoElementAnchor.href = '#';
  todoElementAnchor.textContent = text;
  todoElement.append(todoElementAnchor);
};

const toggleLoader = () => {
  const loaderHTML = document.querySelector('#loader');
  const isHidden = loaderHTML.hasAttribute('hidden');
  if (isHidden) {
    loaderHTML.removeAttribute('hidden');
  } else {
    loaderHTML.setAttribute('hidden', '');
  }
};

const dataContainer = document.querySelector('#data-container');

const getAllToDos = () => {
  toggleLoader();
  const result = fetch(TODOS_URL, {
    method: 'GET',
  });

  result
    .then((response) => {
      if (!response.ok) throw new Error('ОШИБКА ЗАПРОСА');
      return response.json();
    })
    .then((todos) => {
      console.log(todos);
      todos.forEach((todo) => {
        const todoHTML = createToDoElement(todo.title);
        dataContainer.append(todoHTML);
      });
    })
    .catch((error) => {
      console.log('error', error);
    })
    .finally(() => {
      toggleLoader();
    });
};

console.log(getAllToDos());
