
import { Formik, Field, FormikHelpers } from 'formik';
import { Link, Outlet } from 'react-router-dom';
import * as Yup from 'yup';
import { Button, Col, Form, FormGroup, FormLabel, FormControl, Table , Row, Container } from 'react-bootstrap';
import { useState } from 'react';
import '../CSS/bg.css'


const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string()
  .matches(/^[1-9][0-9]{0,9}$/, 'Invalid phone number')
  .required('Phone is required'),
  gender: Yup.string().required('Gender is required'),
});

const Page3 = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    gender: '',
  };

  const [formData, setFormData] = useState<{ name: string; email: string; phone: string; gender: string; }[]>([]);

   const onSubmit = async (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    values: any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    console.log("Submitting the form");
    console.log("The Form details are", values);
    setFormData((prevValues) => [...prevValues, values]);
    await new Promise((resolve) => setTimeout(resolve, 1000));  
    resetForm();
    setSubmitting(false);
  };

  return (
    <>
     <p>page3</p>
      <Link to={'/page3/pagechild3'} className="btn btn-primary">
        Click
      </Link>
    <body  className="custom-background">
     
      <Container>
        <Row>
          <Col>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          onSubmit(values, actions);
        }}
        >
        {({values ,errors, touched ,isSubmitting, isValid,handleSubmit})=>(
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
       <Button  variant='secondary' type="submit" disabled={!isValid || isSubmitting}>
         Submit
       </Button>
    
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
          </tr>
        </thead>
        <tbody>
          {formData.map((data, index) => (
            <tr key={index}>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.phone}</td>
              <td>{data.gender}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      </Col>
      </Row>
      </Container>


      
      </body>
      <Outlet />
    </>
  );
};

export default Page3;
