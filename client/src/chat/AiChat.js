import React, { useState } from 'react';
import './style.css';
import button from "./assets/send.svg"
import bot from "./assets/bot.svg";
import user from "./assets/user.svg";

function Loader({ element }) {
  const [text, setText] = useState('');

  setInterval(() => {
    setText(prevText => {
      const newText = prevText === '....' ? '' : prevText + '.';
      element.textContent = newText;
      return newText;
    });
  }, 300)

  return null;
}

function ChatStripe({ isAi, value, uniqueId }) {
  return (
    <div className={`wrapper ${isAi && 'ai'}`}>
      <div className="chat">
        <div className="profile-user">
          <img src={isAi ? bot : user} alt={isAi ? 'bot' : 'user'} />
        </div>
        <div className="message" id={uniqueId}>
          {value}
        </div>
      </div>
    </div>
  );
}

function generateUniqueId() {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;
}

function AiChat() {
  const [chat, setChat] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const prompt = data.get('prompt');
    const uniqueId = generateUniqueId();
    setChat(prevChat => [
      ...prevChat,
      <ChatStripe key={uniqueId} isAi={false} value={prompt} />,
      <ChatStripe key={`${uniqueId}-bot`} isAi={true} value="" uniqueId={uniqueId} />
    ]);

    setIsLoading(true);
    const response = await fetch('https://codex-backend-3wci.onrender.com/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt
      })
    });

    setIsLoading(false);

    const messageDiv = document.getElementById(uniqueId);
    if (!messageDiv) return;

    messageDiv.innerHTML = '';
    if (response.ok) {
      const { bot } = await response.json();
      const parseData = bot.trim();
      setChat(prevChat => prevChat.map(item => {
        if (item.props.uniqueId === uniqueId) {
          return <ChatStripe key={uniqueId} isAi={true} value={parseData} uniqueId={uniqueId} />
        }
        return item;
      }));
    } else {
      const err = await response.text();
      messageDiv.innerHTML = 'Laxmikant ko bol ki AI App thik kre!!!';
      alert(err);
    }
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      document.getElementById('aichatform').dispatchEvent(new Event('submit'));
    }
  }

  return (
    <div className="container-complete-ai">
    <div id="app">
      <div id="chat_container">
        {chat}
        {isLoading && <Loader element={document.getElementById('loading')} />}
        <div id="loading"></div>
      </div>
      <form id="aichatform" onSubmit={handleSubmit}>
        <textarea id="aichattext" name="prompt" rows="1" cols="1" placeholder="Ask you question related to construction..." onKeyDown={handleKeyDown}></textarea>
        <button id="aichatbutton" type="submit"><img src={button} alt="Send" /></button>
      </form>
    </div>
    </div>
  );
}

export default AiChat;
