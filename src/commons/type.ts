import { Material, ProcessingMethod, Status } from './common';

export type MaterialType = keyof typeof Material;

export type MethodType = keyof typeof ProcessingMethod;

export interface OrderInfo {
  id: number;
  title: string;
  client: string;
  due: string;
  amount: number;
  method: MethodType[];
  status: Status;
  material: MaterialType[];
  count?: number;
  docs?: number;
}

export interface FilterCondition {
  method: MethodType[];
  material: MaterialType[];
}
