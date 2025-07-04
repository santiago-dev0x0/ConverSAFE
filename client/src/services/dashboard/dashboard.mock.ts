import type { DashboardData } from '@/types/dashboard.types';

export const mockDashboardData: DashboardData = {
  claridad: [
    { nombre: "Clara", porcentaje: 35, color: "bg-green-500" },
    { nombre: "Vaga", porcentaje: 25, color: "bg-yellow-500" },
  ],
  
  decisiones: {
    resueltas: 3,
    pendientes: 2
  },
  
  emocional: {
    positivo: 40,
    neutral: 45,
    tenso: 15
  },
  
  participacion: [
    { nombre: "Carlos", porcentaje: 35, color: "bg-green-500" },
    { nombre: "Ana", porcentaje: 25, color: "bg-yellow-500" },
    { nombre: "Jorge", porcentaje: 20, color: "bg-purple-500" },
    { nombre: "Laura", porcentaje: 20, color: "bg-red-500" },
  ],
  
  sugerencias: [
    { texto: "Jorge necesita más claridad", color: "bg-teal-500" },
    { texto: "Consideren una pausa (45min activos)", color: "bg-orange-500" },
    { texto: "Definir objetivos semanales", color: "bg-purple-500" }
  ]
};
