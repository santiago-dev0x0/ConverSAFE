import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { RectangleVertical } from "lucide-react";

export default function EmocionalCard() {
  return (
    <Card className="w-full max-w-md p-4 gap-4 ">
      <CardHeader className="gap-0 p-0">
        <CardTitle className="text-base flex items-center justify-between">
          Tono Emocional <RectangleVertical className="w-4 h-4" />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="space-y-1">
            <div className="bg-green-100 text-green-700 rounded-lg py-2 px-3">
              <div className="font-semibold text-lg">40%</div>
              <div className="text-xs">Positivo</div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="bg-gray-100 text-gray-700 rounded-lg py-2 px-3">
              <div className="font-semibold text-lg">45%</div>
              <div className="text-xs">Neutral</div>
            </div>
          </div>
          <div className="space-y-1">
            <div className="bg-red-100 text-red-700 rounded-lg py-2 px-3">
              <div className="font-semibold text-lg">15%</div>
              <div className="text-xs">Tenso</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
