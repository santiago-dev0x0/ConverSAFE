import type { DashboardData } from '@/types/dashboard.types';
import { mockDashboardData } from './dashboard.mock';

export const dashboardService = {
  getDashboardData: async (): Promise<DashboardData> => {
    return Promise.resolve(mockDashboardData);
  },
  
  getClaridad: async () => {
    return Promise.resolve(mockDashboardData.claridad);
  },
  
  getDecisiones: async () => {
    return Promise.resolve(mockDashboardData.decisiones);
  },
  
  getEmocional: async () => {
    return Promise.resolve(mockDashboardData.emocional);
  },
  
  getParticipacion: async () => {
    return Promise.resolve(mockDashboardData.participacion);
  },
  
  getSugerencias: async () => {
    return Promise.resolve(mockDashboardData.sugerencias);
  }
};