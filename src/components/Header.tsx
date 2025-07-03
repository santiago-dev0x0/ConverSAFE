import { RectangleVertical } from "lucide-react"

function Header() {
  return (
    <header className="px-4 pt-2 pb-4 flex justify-between border-b border-var(--border) items-center">
      <h1 className="text-[#6b6fd4] font-bold text-xl">ConverSAFe</h1>
      <div className="flex items-center gap-4">
        <span className="text-white bg-[#10b981] px-4 py-2 flex items-center justify-center rounded-lg gap-2">
          <RectangleVertical className="w-4 h-4" /> IA Activa
        </span>
        <p>Equipo Alpha - <span>{new Date().toLocaleDateString("es-ES", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }).replace('.', '')}</span></p>
      </div>
    </header>
  )
}
export default Header
