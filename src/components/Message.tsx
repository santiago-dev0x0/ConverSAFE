import type { FC } from "react"
import InitialsAvatar from "./InitialsAvatar"

interface MessageProps {
  name: string
  msg: string
  timeStamp: string
}

const Message: FC<MessageProps> = ({ name, msg, timeStamp }) => {
  return (
    <div className="flex gap-2">
      <div className="mt-1">
        <InitialsAvatar name={name} size={32} />
      </div>
      <div>
        <strong>{name}</strong> <span className="text-sm">{timeStamp}</span>
        <p>{msg}</p>
      </div>
    </div>
  )
}
export default Message
