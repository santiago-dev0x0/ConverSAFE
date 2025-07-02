import { useState, type ChangeEvent } from "react";
import Message from "./Message";

function Chat() {
  const [user, setUser] = useState({ id: '01', name: 'Carlos Mendez' });
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<{ text: string, timeStamp: string }[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      const now = new Date();
      const timestamp = now.toLocaleTimeString('es-ES', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
      setMessages([...messages, { text: message, timeStamp: timestamp }]);
      setMessage('');
    }
  };

  return (
    <section className="flex flex-col py-2 h-dvh flex-1">
      <ul className="px-2 space-y-4 py-4 flex-1">
        {
          messages.map((msg, index) => (
            <li key={index}>
              <Message name={user.name} msg={msg.text} timeStamp={msg.timeStamp} />
            </li>
          ))
        }
        <li className="p-4 bg-[#6b6fd4] text-white rounded-lg">
          <strong>ConverSAFe AI</strong>
          <p>💡 Detecto que Carlos esta hablando</p>
        </li>
      </ul>

      <form className="flex items-center gap-2 px-2 pt-4 pb-2 border-t border-[#a8a8a8]" onSubmit={handleSubmit}>
        <input
          className="px-4 py-2 border rounded w-full outline-[#a8a8a8] border-[#a8a8a8] "
          type="text"
          title="Escribe tu mensaje..."
          placeholder="Escribe tu mensaje..."
          value={message}
          onChange={handleInputChange}
        />
      </form>
    </section>
  );
}
export default Chat;
