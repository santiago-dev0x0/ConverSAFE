import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { ClaridadData } from "@/types/dashboard.types";
import { RectangleVertical } from "lucide-react";

interface ClaridadCardProps {
  data: ClaridadData[];
}

export default function ClaridadCard({ data }: ClaridadCardProps) {
  return (
    <Card className="w-full max-w-md p-4 gap-4">
      <CardHeader className="gap-0 p-0">
        <CardTitle className="text-base flex items-center justify-between">
          Claridad <RectangleVertical className="w-4 h-4" />
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <ul className="">
          {data.map((user) => (
            <li key={user.nombre} className="flex items-center gap-2">
              <span className="w-16">{user.nombre}</span>
              <Progress
                value={user.porcentaje}
                indicatorColor={user.color}
                className="flex-1 h-2"
              />
              <span className="w-8 text-right">{user.porcentaje}%</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
