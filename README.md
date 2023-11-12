Проект Twitter Проект для створення карток твітів з додатковою інтерактивністю
при клікові на кнопку "Follow".

Верстка фіксована в пікселях, семантична та валідна. Немає помилок в консолі
браузера. Робота виконана на нативному JS з використанням збірників або на
React. Інтерактивність працює відповідно до технічного завдання. Код
відформатований та без коментарів. У репозиторії є файл README.md. Технічне
завдання Відповідно до макету, необхідно реалізувати картки користувачів. При
клікові на кнопку "Follow", текст змінюється на "Following". Також змінюється
колір кнопки. Кількість фоловерів збільшується на 1.

При оновленні сторінки, стан кнопки та кількість фоловерів залишається
незмінними.

При повторному клікові на кнопку, її текст та колір змінюються на початковий
стан. Також кількість фоловерів зменшується на 1.

Використано бібліотеку mockapi.io для бекенду- користувача з полями: id, user,
tweets, followers, avatar . Зображення аватарів мають бути прописані окремими
url у властивості “avatar”.

Має бути від 12 юзерів з різними значеннями(на ваш розсуд) в базі. Реалізовано
пагінацію. На одній сторінці пагінації має відображатися від 3 твітів, решта
підгружатись при натисканні Load More.

У застосунку прописані маршрути. Якщо користувач зайшов за неіснуючим маршрутом,
його необхідно перенаправляти на домашню сторінку. '/' – компонент Home, домашня
сторінка. '/tweets' - компонент tweets, сторінка із відображенням твітів з
кнопкою Back, яка веде на головну сторінку.