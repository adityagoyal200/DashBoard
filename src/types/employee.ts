export interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  designation: string;
}

export type Department = 'Engineering' | 'HR' | 'Marketing' | 'Sales' | 'Finance';