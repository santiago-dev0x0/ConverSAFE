import { useState, type ChangeEvent } from "react";
import Message from "./Message";

function Chat() {
  const [user, setUser] = useState({ id: '01', name: 'Carlos Mendez' });
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<string[]>([]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage('');
    }
  };
  return (
    <section className="flex flex-col py-2 min-h-dvh">
      <ul className="px-2 space-y-4 py-4 flex-1">
        {
          messages.map((msg, index) => (
            <li key={index}>
              <Message name={user.name} msg={msg} />
            </li>
          ))
        }
      </ul>

      <form className="flex items-center gap-2 px-2 py-4 border-t" onSubmit={handleSubmit}>
        <input
          className="px-4 py-2 border rounded w-full"
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
