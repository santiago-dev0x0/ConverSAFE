import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { RectangleVertical } from "lucide-react";
import { useDashboardStore } from "@/store/dashboard.store";

export default function SugerenciasIaCard() {
  const sugerencia = useDashboardStore((state) => state.sugerenciaGeneral);

  const data = sugerencia ? [{
    texto: sugerencia,
    color: '#4CAF50'
  }] : [];

  return (
    <Card className="w-full max-w-md p-4 gap-4">
      <CardHeader className="gap-0 p-0">
        <CardTitle className="text-base flex items-center justify-between">
          Sugerencias IA <RectangleVertical className="w-4 h-4" />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-2">
          {data.map((sugerencia, index) => (
            <div
              key={index}
              className="p-3 rounded-lg"
              style={{ backgroundColor: `${sugerencia.color}15` }}
            >
              <p className="text-sm" style={{ color: sugerencia.color }}>
                {sugerencia.texto}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
