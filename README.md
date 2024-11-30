# Employee Management Dashboard   

This is a **React and TypeScript application** designed to manage employee records.  
The application features a dashboard where users can view, search, filter, and add employee data.  
It adheres to **SOLID principles** and best practices for clean, modular, and maintainable code. 
Deployed at : https://dashboardaditya.netlify.app/

---

## Hosted Application  

You can access the application live at: [Employee Management Dashboard](https://dashboardaditya.netlify.app/)  

---

## Features  

### Employee List (Dashboard Page)  
- Displays a list of employees fetched from a mock API.  
- Includes a **search bar** to filter employees by name.  
- Provides a **dropdown filter** to filter employees by department.  

### Add Employee (Form Page)  
- A form to add new employees with fields:  
  - **Name**  
  - **Email**  
  - **Department**  
  - **Designation**  
- Validates required fields and checks for proper email format.  
- Simulates a POST request to save new employee data.  

### Responsive Design  
- Works seamlessly on both desktop and mobile devices.  
- Styled with **basic CSS**, **Tailwind CSS**, and **Lucide**.  

### Error Handling  
- Provides user-friendly messages for failed API requests or validation errors.  

---

## Installation Steps  

1. **Clone the repository**:  
   git clone https://github.com/adityagoyal200/DashBoard.git  
   cd DashBoard  
  

2. Install dependencies:
  npm install  
  Or
  yarn install  

  Start the development server:
    npm run dev

Assumptions and Limitations

Assumptions:
Employee data is fetched from a mock API.
Department options in the form are predefined (e.g., "Engineering," "HR").


Limitations:
Form validation includes basic checks but does not verify unique email addresses.
The application does not implement backend storage,So if we refresh the page then added data is lost. 

Implemented Enhancements:

Add pagination for the employee list.
Improve UI/UX with advanced styling and animations.

Mock API Endpoints:
GET: Fetch employee data: https://jsonplaceholder.typicode.com/users
POST: Simulate adding an employee: https://jsonplaceholder.typicode.com/users

Code Structure
The project adheres to SOLID principles for clean and maintainable code. The codebase is organized into:
Components: Reusable UI components (e.g., EmployeeList, AddEmployeeForm).
Services: API calls.
Styles: Styling with Tailwind CSS and lucide.



