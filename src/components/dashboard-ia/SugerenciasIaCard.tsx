import { RectangleVertical } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import type { SugerenciaData } from "@/types/dashboard.types";

interface SugerenciasIaCardProps {
  data: SugerenciaData[];
}
export default function SugerenciasIaCard({ data }: SugerenciasIaCardProps) {
  return (
    <Card className="w-full max-w-md p-4 gap-4">
      <CardHeader className="gap-0 p-0">
        <CardTitle className="text-base flex items-center justify-between">
          Sugerencias IA <RectangleVertical className="w-4 h-4" />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="space-y-3 text-sm">
          {data.map((item) => (
            <div className="flex items-start gap-2">
              <div className={`w-1.5 h-1.5 ${item.color} rounded-full mt-2`}></div>
              <span className="text-gray-600">{item.texto}</span>
          </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
