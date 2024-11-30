import React from 'react';
import { Department } from '../types/employee';

interface DepartmentFilterProps {
  value: string;
  onChange: (value: string) => void;
}

const departments: Department[] = ['Engineering', 'HR', 'Marketing', 'Sales', 'Finance'];

export const DepartmentFilter: React.FC<DepartmentFilterProps> = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    >
      <option value="">All Departments</option>
      {departments.map((dept) => (
        <option key={dept} value={dept}>
          {dept}
        </option>
      ))}
    </select>
  );
};