/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Field } from 'formik';
import { Link, Outlet } from 'react-router-dom';
import * as Yup from 'yup';
import { Button, Col, Form, FormGroup, FormLabel, FormControl, Table, Row, Container, Modal } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import '../CSS/bg.css';
import UserServices from '../services/user.services';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().matches(/^[1-9][0-9]{0,9}$/, 'Invalid phone number').required('Phone is required'),
  gender: Yup.string().required('Gender is required'),
});

const Page3 = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    gender: '',
  };

  const [formData, setFormData] = useState([]);
  const userServices = UserServices();
  const [currentEmployee, setCurrentEmployee] = useState({
    id: 0,
    name: '',
    email: '',
    phone: '',
    gender: '',
  });


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  const fetchEmployee = async () => {
    try {
      const response = await userServices().getPeople();
      setFormData(response.data);
    } catch (error) {
      console.log('error', error);
    }
  };




  const deleteEmployee = async (id: number) => {
    try {
      await userServices().deletePeople(id);
      fetchEmployee();
    } catch (error) {
      console.log('error', error);
    }
  };




  const addEmployee = async (values:any) => {
    try {
      await userServices().addPeople(values);
      fetchEmployee();
    } catch (error) {
      console.log('error', error);
    }
  };




  const updateEmployee = async () => {
    try {
      await userServices().updatePeople(currentEmployee.id, currentEmployee);
      fetchEmployee();
      handleClose();
      setCurrentEmployee({
        id: 0,
        name: '',
        email: '',
        phone: '',
        gender: '',
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleUpdateClick = (user: any) => {
    setCurrentEmployee({
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      gender: user.gender,
    });
    handleShow();
  };





  useEffect(() => {
    fetchEmployee();
  }, []);






  return (
    <>
      <div className='bg'>
        <p>page3</p>
        <Link to={'/page3/pagechild3'} className="btn btn-primary">
          Click
        </Link>


        <Container style={{ maxWidth: "auto", backgroundColor: "rgba(105, 105, 105,0.2)" }}>
          <Row>
            <Col>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                  addEmployee(values);
                  actions.resetForm();
                }}>


                {({ values, errors, touched, isSubmitting, isValid, handleSubmit }) => 
                
                (
                  <Form noValidate onSubmit={handleSubmit}>
                    <FormGroup controlId="name">
                      <FormLabel>Name:</FormLabel>
                      <Field
                        as={FormControl}
                        type="text"
                        name="name"
                        value={values.name}
                        isInvalid={touched.name && !!errors.name}
                      />
                      <FormControl.Feedback type="invalid">{errors.name}</FormControl.Feedback>
                    </FormGroup>

                    <FormGroup controlId="email">
                      <FormLabel>Email:</FormLabel>
                      <Field
                        as={FormControl}
                        type="email"
                        name="email"
                        isInvalid={touched.email && !!errors.email}
                      />
                      <FormControl.Feedback type="invalid">{errors.email}</FormControl.Feedback>
                    </FormGroup>

                    <FormGroup controlId="phone">
                      <FormLabel>Phone:</FormLabel>
                      <Field
                        as={FormControl}
                        type="text"
                        name="phone"
                        value={values.phone}
                        isInvalid={touched.phone && !!errors.phone}
                      />
                      <FormControl.Feedback type="invalid">{errors.phone}</FormControl.Feedback>
                    </FormGroup>

                    <FormGroup controlId="gender">
                      <FormLabel>Gender:</FormLabel>
                      <Col>
                        <Field
                          type="radio"
                          id="male"
                          name="gender"
                          value="male"
                          isInvalid={touched.gender && !!errors.gender}
                        />
                        <FormLabel htmlFor="male">Male</FormLabel>
                      </Col>
                      <Col>
                        <Field
                          type="radio"
                          id="female"
                          name="gender"
                          value="female"
                          isInvalid={touched.gender && !!errors.gender}
                        />
                        <FormLabel htmlFor="female">Female</FormLabel>
                      </Col>
                      <Col>
                        {errors.gender}
                      </Col>
                    </FormGroup>
                    <div className="d-grid gap-2">
                      <Button variant='secondary' type="submit" disabled={!isValid || isSubmitting} size="sm" >
                        Submit
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </Col>
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.map((data:any, index) => (
                    <tr key={index}>
                      <td>{data.name}</td>
                      <td>{data.email}</td>
                      <td>{data.phone}</td>
                      <td>{data.gender}</td>
                      <td>
                        <Button onClick={() => deleteEmployee(data.id)} variant='secondary'>Delete</Button>
                        <Button onClick={() => handleUpdateClick(data)} variant='secondary'>Edit</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <label>Name:</label>
              <input
                type="text"
                value={currentEmployee.name}
                onChange={(e) => setCurrentEmployee({ ...currentEmployee, name: e.target.value })}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={currentEmployee.email}
                onChange={(e) => setCurrentEmployee({ ...currentEmployee, email: e.target.value })}
              />
            </div>
            <div>
              <label>Phone:</label>
              <input
                type="number"
                value={currentEmployee.phone}
                onChange={(e) => setCurrentEmployee({ ...currentEmployee, phone: e.target.value })}
              />
            </div>
            <div>
              <label>Gender:</label>
              <label>Male:</label>
              <input
                type="radio"
                name='gender'
                checked={currentEmployee.gender === 'male'}
                onChange={() => setCurrentEmployee({ ...currentEmployee, gender: 'male' })}
              />
              <label>Female:</label>
              <input
                type="radio"
                name='gender'
                checked={currentEmployee.gender === 'female'}
                onChange={() => setCurrentEmployee({ ...currentEmployee, gender: 'female' })}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={updateEmployee}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <Outlet />
      </div>
    </>
  );
};

export default Page3;
