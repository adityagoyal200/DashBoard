import { Employee } from '../types/employee';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchEmployees = async (): Promise<Employee[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch employees');
    const data = await response.json();
    
    return data.map((user: any) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      department: user.company?.name || 'Engineering', // Using company name as department for mock data
      designation: user.company?.bs || 'Employee' // Using company bs as designation for mock data
    }));
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error;
  }
};

export const addEmployee = async (employee: Omit<Employee, 'id'>): Promise<Employee> => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(employee),
    });
    
    if (!response.ok) throw new Error('Failed to add employee');
    return await response.json();
  } catch (error) {
    console.error('Error adding employee:', error);
    throw error;
  }
};