export interface Item {
  id: number;
  date: string;
  fullName: string;
  amount: number;
  country: string;
  agentType: string;
  status: "Activo" | "Inactivo" | "Pendiente";
}
