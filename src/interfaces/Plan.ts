export interface Feature {
  id: number;
  name: string;
}
export interface Plan {
  id: string;
  name: string;
  value: number;
  maxInstallmentNumber: number;
  maxInstallmentValue: number;
  imageUrl: string;
  features: Feature[];
}
