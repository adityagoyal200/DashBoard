import { useState, useEffect } from 'react';
import { SearchBar } from './components/SearchBar';
import { DepartmentFilter } from './components/DepartmentFilter';
import { EmployeeList } from './components/EmployeeList';
import { AddEmployeeForm } from './components/AddEmployeeForm';
import { fetchEmployees, addEmployee } from './services/api';
import { Employee } from './types/employee';
import { Plus, X } from 'lucide-react';

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchEmployees();
      setEmployees(data);
    } catch (err) {
      setError('Failed to load employees. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddEmployee = async (employeeData: Omit<Employee, 'id'>) => {
    try {
      setIsLoading(true);
      setError(null);
      const newEmployee = await addEmployee(employeeData);
      setEmployees([...employees, newEmployee]);
      setShowAddForm(false);
    } catch (err) {
      setError('Failed to add employee. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch = employee.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesDepartment = !departmentFilter || employee.department === departmentFilter;
    return matchesSearch && matchesDepartment;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Employee Dashboard</h1>
          <button
            onClick={() => setShowAddForm(true)}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <Plus className="h-5 w-5 mr-2" />
            Add Employee
          </button>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
          </div>
          <DepartmentFilter value={departmentFilter} onChange={setDepartmentFilter} />
        </div>

        {isLoading && !showAddForm ? (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-2 text-gray-500">Loading employees...</p>
          </div>
        ) : (
          <EmployeeList employees={filteredEmployees} />
        )}

        {showAddForm && (
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Add New Employee</h2>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <AddEmployeeForm onSubmit={handleAddEmployee} isLoading={isLoading} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;