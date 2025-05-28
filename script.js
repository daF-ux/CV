// Зберігаємо дані про браузер та операційну систему в localStorage
const os = navigator.platform;
const browser = navigator.userAgent;

localStorage.setItem('os', os);
localStorage.setItem('browser', browser);

// Вивести ці дані у футері
window.addEventListener('DOMContentLoaded', () => {
  const footer = document.querySelector('footer');
  footer.innerHTML = `Операційна система: ${localStorage.getItem('os')}<br>Браузер: ${localStorage.getItem('browser')}`;
});

// Завантажуємо коментарі з сервера (JSONPlaceholder)
fetch(`https://jsonplaceholder.typicode.com/posts/22/comments`)
  .then(response => response.json())
  .then(comments => {
    const commentsContainer = document.getElementById('comments');
    comments.forEach(comment => {
      const commentElement = document.createElement('div');
      commentElement.classList.add('comment');
      commentElement.innerHTML = `
        <p><strong>${comment.name}</strong> (${comment.email})</p>
        <p>${comment.body}</p>
      `;
      commentsContainer.appendChild(commentElement);
    });
  })
  .catch(error => console.error('Помилка при завантаженні коментарів:', error));

// Показуємо модальне вікно через 1 хвилину
setTimeout(() => {
  const modal = document.getElementById('feedback-modal');
  modal.style.display = 'block';
}, 60000);

// Закрити модальне вікно
document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('feedback-modal').style.display = 'none';
});

// Перемикання теми
document.getElementById('theme-toggle').addEventListener('click', () => {
  const currentTheme = localStorage.getItem('theme');
  const newTheme = currentTheme === 'day' ? 'night' : 'day';
  setTheme(newTheme);
});

// Функція для встановлення теми
function setTheme(theme) {
  if (theme === 'night') {
    document.body.classList.add('night');
  } else {
    document.body.classList.remove('night');
  }
  localStorage.setItem('theme', theme);
}

// Автоматичний вибір теми залежно від часу
const hours = new Date().getHours();
if (hours >= 7 && hours < 21) {
  setTheme('day');
} else {
  setTheme('night');
}










