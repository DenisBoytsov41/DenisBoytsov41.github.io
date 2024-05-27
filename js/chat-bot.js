const responses = {
    'какие виды шаурмы у вас есть?': 'У нас есть классическая шаурма с курицей, говядиной и овощами. Также мы предлагаем сезонные вариации с различными добавками и соусами.',
    'какие соусы можно выбрать для шаурмы?': 'Мы предлагаем разнообразные соусы: чесночный, томатный, острый, майонез и многое другое. Вы можете выбрать любой соус, который сочетается с вашим вкусом.',
    'есть ли у вас вегетарианская шаурма?': 'Да, у нас есть вегетарианская шаурма с овощами и соусами. Она отличается нежным вкусом и подходит для вегетарианцев и веганов.',
    'какие добавки можно добавить в шаурму?': 'Вы можете добавить различные добавки в вашу шаурму, такие как сыр, свежие овощи, картошка фри и многое другое. Подберите свою идеальную комбинацию вкусов!',
    'какие акции и скидки у вас есть?': 'Мы регулярно проводим акции и предлагаем скидки на различные виды шаурмы и напитки. Следите за нашими обновлениями на сайте и в социальных сетях, чтобы не упустить выгодные предложения.',
    'как быстро можно получить заказанную шаурму?': 'Мы стараемся обеспечить быструю доставку заказов. Обычно доставка занимает от 20 до 40 минут, в зависимости от вашего местоположения. Мы стремимся сохранить шаурму горячей и свежей к моменту доставки.',
    'какие способы оплаты вы принимаете?': 'Мы принимаем оплату наличными и банковскими картами при получении заказа. Также доступна оплата онлайн через наш сайт или мобильное приложение.',
};

/*localStorage.clear();*/

function getResponse(message) {
    message = message.toLowerCase();
    const lastChar = message[message.length - 1];
    if (lastChar !== '?') message += '?';
    return responses[message] || 'Извините, я не понимаю ваш вопрос.';
}

function createChatbotContentItem(text, isClientMessage = false) {
    const chatbotContentItem = document.createElement('div');
    chatbotContentItem.classList.add(isClientMessage ? 'chatbot-content-item-client' : 'chatbot-content-item');
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    chatbotContentItem.appendChild(paragraph);
    return chatbotContentItem;
}

function showDialog() {
    const chatbotDialog = document.querySelector(".chatbot-container");
    chatbotDialog.style.display = "block";
}

function closeDialog() {
    const chatbotDialog = document.querySelector(".chatbot-container");
    chatbotDialog.style.display = "none";
}

function sendMessage() {
    const input = document.querySelector(".chatbot-input");
    const chatbotDialog = document.querySelector(".chatbot-content-container");
    const clientItem = createChatbotContentItem(input.value, true);
    const botResponse = getResponse(input.value);
    const botItem = createChatbotContentItem(botResponse);
    chatbotDialog.appendChild(clientItem);
    chatbotDialog.appendChild(botItem);

    const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    messages.push({ type: 'client', content: input.value });
    messages.push({ type: 'bot', content: botResponse });
    localStorage.setItem('chatMessages', JSON.stringify(messages));

    input.value = '';
}

function loadMessages() {
    const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    console.log(messages)
    const chatbotDialog = document.querySelector(".chatbot-content-container");
    messages.forEach((message) => {
        const item = createChatbotContentItem(message.content, message.type === 'client');
        chatbotDialog.appendChild(item);
    });
}

function startMessage() {
    const initialMessage = "Здравствуйте! Я ваш виртуальный помощник и готов помочь вам с заказом шаурмы. Вы можете спросить у меня о наших видах шаурмы, соусах, акциях, способах оплаты и других вопросах. Просто напишите, что вас интересует!";
    const botItem = createChatbotContentItem(initialMessage);
    const chatbotDialog = document.querySelector(".chatbot-content-container");
    chatbotDialog.appendChild(botItem);
}

startMessage();
loadMessages();