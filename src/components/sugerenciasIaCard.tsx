import { RectangleVertical } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

export default function SugerenciasIaCard() {
  return (
    <Card className="w-full max-w-md p-4 gap-4">
      <CardHeader className="gap-0 p-0">
        <CardTitle className="text-base flex items-center justify-between">
          Sugerencias IA <RectangleVertical className="w-4 h-4" />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mt-2"></div>
            <span className="text-gray-600">Jorge necesita más claridad</span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2"></div>
            <span className="text-gray-600">
              Consideren una pausa (45min activos)
            </span>
          </div>
          <div className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2"></div>
            <span className="text-gray-600">Definir objetivos semanales</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
