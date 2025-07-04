import type { FC } from "react"

interface MessageProps {
  name: string
  msg: string
  timeStamp: string
  isSystem?: boolean
}

const Message: FC<MessageProps> = ({ name, msg, timeStamp, isSystem = false }) => {
  return (
    <div className={`flex flex-col ${isSystem ? 'items-center' : ''}`}>
      <div className={`flex items-center gap-2 ${isSystem ? 'text-gray-500' : ''}`}>
        <span className="font-semibold">{name}</span>
        <span className="text-sm text-gray-500">{timeStamp}</span>
      </div>
      <p className={`${isSystem ? 'text-gray-600 italic text-center' : ''}`}>{msg}</p>
    </div>
  )
}
export default Message
