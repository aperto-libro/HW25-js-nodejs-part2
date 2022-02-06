# HW25-js-nodejs-part2

1. Создайте на вашем github репозиторий по следующему шаблону HW#-name. Все результаты нужно запушить в ваш репозиторий и прикрепить ссылку на hillel портале.

2. Создайте README.md с описанием задания.

3. Сгенерируйте express приложение. Обратите внимание что нужно установить npm пакеты после генерации проекта.

4. Добавить две миделвары:

- Первая миделвара должна обрабатывать путь ‘/home’. Возвращать Home. Если не /home то переходим к другой миделваре.
- Миделвара должна обрабатывать путь ‘/forbidden’. При переходе на http://localhost:3000/forbidden?secret=true нужно вернуть Access approved, в противном случае Access denied.
  Подсказка: лучше использовать модуль url. Можно и без url модуля, но тогда не гибкая проверка будет.
