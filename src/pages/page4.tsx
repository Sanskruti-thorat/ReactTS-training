/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import UserServices from "../services/user.services";
import { Table } from "react-bootstrap";

const Page4 = () => {
  const [employeeList, setEmployeeList] = useState([]);
  const [newEmployee, setNewEmployee] = useState({
    name: "",
    role: "",
    salary: "",
  });
  const [currentEmployee, setCurrentEmployee] = useState({
    id: 0,
    name: "",
    role: "",
    salary: "",
  });
  const [isUpdate, setIsUpdate] = useState(false);

 const userServices = UserServices();



  const fetchEmployee = async () => {
    try {
      const response = await userServices().getUser();
      console.log('response', response);
      setEmployeeList(response.data);
    } catch (error) {
      console.log('error', error);
    }
  };

  const addEmployee = async () => {
    try {
      const response = await userServices().addUser(newEmployee);
      console.log('response', response);
      setNewEmployee({ name: "", role: "", salary: "" });
      fetchEmployee();
    } catch (error) {
      console.log('error', error);
    }
  };

  const deleteEmployee = async (id: number) => {
    try {
      const response = await userServices().deleteUser(id);
      console.log('response', response);
      fetchEmployee();
    } catch (error) {
      console.log('error', error);
    }
  };

  const updateEmployee = async (id: number) => {
    try {
      const response = await userServices().updateUser(id, newEmployee);
      console.log('response', response);
      fetchEmployee();
      setIsUpdate(false);
      setNewEmployee({ name: "", role: "", salary: "" });
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleUpdateClick = (user: any) => {
    setIsUpdate(true);
    setCurrentEmployee({
      id: user.id,
      name: user.name,
      role: user.role,
      salary: user.salary,
    });
    setNewEmployee({
      name: user.name,
      role: user.role,
      salary: user.salary,
    });
  };

  useEffect(() => {
    fetchEmployee();
  }, []);

  return (
    <>
      <div>
        <h3>{isUpdate ? "Update employee" : "Add employee"}</h3>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={newEmployee.name}
            onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
          />
        </div>
        <div>
          <label> Role:</label>
          <input
            type="text"
            value={newEmployee.role}
            onChange={(e) => setNewEmployee({ ...newEmployee, role: e.target.value })}
          />
        </div>
        <div>
          <label>Salary:</label>
          <input
            type="number"
            value={newEmployee.salary}
            onChange={(e) => setNewEmployee({ ...newEmployee, salary: e.target.value })}
          />
        </div>
        <button onClick={isUpdate ? () => updateEmployee(currentEmployee.id) : addEmployee}>
          {isUpdate ? "Save" : "Add"}
        </button>
      </div>
      <div>
        <h1>List Of employee</h1>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Role</th>
                <th>Salary</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employeeList.map((user: any) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.salary}</td>
                  <td>
                    <button onClick={() => deleteEmployee(user.id)}>Delete</button>
                    <button onClick={() => handleUpdateClick(user)}>Update</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default Page4;
