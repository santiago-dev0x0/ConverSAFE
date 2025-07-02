import { useState, type ChangeEvent } from "react";
import imgPlaceholder from "../assets/react.svg";

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
    <section className="py-2">
      <ul className="px-2 space-y-4 py-4">
        {
          messages.map((msg, index) => (
            <li key={index}>
              <div className="flex items-center gap-2">
                <div>
                  <img src={imgPlaceholder} alt={user.name} />
                </div>
                <div>
                  <strong>{user.name}</strong> <span>{new Date().toLocaleTimeString()}</span>
                  <p>{msg}</p>
                </div>
              </div>
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
