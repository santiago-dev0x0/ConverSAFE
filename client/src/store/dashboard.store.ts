import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
interface DashboardState {
  totalMensajes: number;
  tonosPorcentaje: {
    positivo: number;
    neutro: number;
    tenso: number;
  };
  participacionPorUsuario: Array<{
    user_id: string;
    nombre: string;
    porcentaje: number;
  }>;
  sugerenciaGeneral: string | null;
  setDashboard: (data: Partial<DashboardState>) => void;
}

export const useDashboardStore = create<DashboardState>()(
  devtools((set) => ({
  totalMensajes: 0,
  tonosPorcentaje: { positivo: 0, neutro: 0, tenso: 0 },
  participacionPorUsuario: [],
  sugerenciaGeneral: null,
  setDashboard: (data) => set((state) => ({ ...state, ...data }),false, 'setDashboard'),
    }),{
    name: 'dashboard-storage',
    }
  )
);