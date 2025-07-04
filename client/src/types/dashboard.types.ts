export interface ClaridadData {
  nombre: string;
  porcentaje: number;
  color: string;
}

export interface DecisionesData {
  resueltas: number;
  pendientes: number;
}

export interface EmocionalData {
  positivo: number;
  neutral: number;
  tenso: number;
}

export interface ParticipacionData {
  nombre: string;
  porcentaje: number;
  color: string;
}

export interface SugerenciaData {
  texto: string;
  color: string;
}

export interface DashboardData {
  claridad: ClaridadData[];
  decisiones: DecisionesData;
  emocional: EmocionalData;
  participacion: ParticipacionData[];
  sugerencias: SugerenciaData[];
}
