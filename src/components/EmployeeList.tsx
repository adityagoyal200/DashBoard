import React from 'react';
import { Employee } from '../types/employee';
import { Users } from 'lucide-react';

interface EmployeeListProps {
  employees: Employee[];
}

export const EmployeeList: React.FC<EmployeeListProps> = ({ employees }) => {
  if (employees.length === 0) {
    return (
      <div className="text-center py-8">
        <Users className="mx-auto h-12 w-12 text-gray-400" />
        <p className="mt-2 text-gray-500">No employees found</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {employees.map((employee) => (
        <div
          key={employee.id}
          className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center space-x-4">
            <div className="flex-1 min-w-0">
              <p className="text-lg font-semibold text-gray-900 truncate">
                {employee.name}
              </p>
              <p className="text-sm text-gray-500 truncate">{employee.email}</p>
              <div className="mt-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {employee.department}
                </span>
                <p className="mt-1 text-sm text-gray-600">{employee.designation}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};