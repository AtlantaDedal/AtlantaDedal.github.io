// Проверяем, доступен ли Telegram WebApp
if (window.Telegram && window.Telegram.WebApp) {
    const webApp = Telegram.WebApp;

    // Инициализация Mini App
    webApp.ready();

    // Получаем данные пользователя
    const user = webApp.initDataUnsafe.user;

    if (user) {
        // Отображаем ID пользователя
        document.getElementById('userId').textContent = user.id;

        // Отображаем имя пользователя
        const fullName = [user.first_name, user.last_name].filter(Boolean).join(' ');
        document.getElementById('userName').textContent = fullName || 'Не указано';

        // Отображаем фото профиля
        if (user.photo_url) {
            document.getElementById('userPhoto').src = user.photo_url;
        } else {
            document.getElementById('userPhoto').style.display = 'none';
        }
    } else {
        document.getElementById('userInfo').innerHTML = '<p>Данные пользователя недоступны.</p>';
    }
} else {
    document.getElementById('userInfo').innerHTML = '<p>Telegram WebApp не доступен.</p>';
}