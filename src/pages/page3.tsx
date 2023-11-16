/* eslint-disable @typescript-eslint/no-explicit-any */

// import { Link, Outlet } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Formik } from 'formik';
// import { basicSchemaboot } from '../validation';


// interface FormData {
//   name: string;
//   email: string;
//   phone:number|null;
//   password: string;
//   confirmPassword: string;
//   gender: string;
// }

// function Page3() {

//   const onSubmit = async (values: FormData, actions: any) => {
//     console.log(values);
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     actions.resetForm();
//   };


// const initialValues ={
//     name: "",
//     email: "",
//     phone: null,
//     password: "",
//     confirmPassword: "",
//     gender: "",
//   }
//   return (
//     <>
//       <div className="container mt-5">
//         <h1>Page 3</h1>
//         <Link to={'/page3/pagechild3'} className="btn btn-primary">Click</Link>
   
//         <section>
//           <Formik 
//           initialValues ={initialValues}
//           onSubmit={onSubmit}
//           validationSchema={basicSchemaboot}>
//           <form className="mt-4">
//             <div className="mb-3">
//               <label htmlFor="name" className="form-label">Name:</label>
//               <input type="text" className="form-control" id="name" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">Email:</label>
//               <input type="email" className="form-control" id="email" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="phone" className="form-label">Phone:</label>
//               <input type="number" className="form-control" id="phone" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="password" className="form-label">Password:</label>
//               <input type="password" className="form-control" id="password" />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="confirmPassword" className="form-label">Confirm Password:</label>
//               <input type="password" className="form-control" id="confirmPassword" />
//             </div>
//             <div className="mb-3">
//               <label className="form-label">Gender:</label>
//               <div className="form-check">
//                 <input type="radio" id="male" name="gender" value="male" className="form-check-input" />
//                 <label htmlFor="male" className="form-check-label">Male</label>
//               </div>
//               <div className="form-check">
//                 <input type="radio" id="female" name="gender" value="female" className="form-check-input" />
//                 <label htmlFor="female" className="form-check-label">Female</label>
//               </div>
//             </div>
//             <div>
//               <button type="submit" className="btn btn-success">Submit</button>
//             </div>
//           </form>
//           </Formik>
//         </section>

//         <Outlet />
//       </div>
//     </>
//   );
// }

// export default Page3;


import { Formik, Field, ErrorMessage, FormikHelpers } from 'formik';
import { Link, Outlet } from 'react-router-dom';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone is required'),
  gender: Yup.string().required('Gender is required'),
});

const Page3 = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    gender: '',
  };

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const onSubmit = async (
    values: any,
    { setSubmitting, resetForm }: FormikHelpers<any>
  ) => {
    console.log("Submitting the form");
    console.log("The Form details are", values);
 
    // Simulate an async operation
    await new Promise((resolve) => setTimeout(resolve, 1000));
 
    // Reset the form after submission
    resetForm();
 
    // Set submitting to false after form reset
    setSubmitting(false);
  };

  return (
    <>
      <p>page3</p>
      <Link to={'/page3/pagechild3'} className="btn btn-primary">
        Click
      </Link>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          onSubmit(values, actions);
        }}

      >
        {({values ,errors, touched ,isSubmitting, isValid,handleSubmit})=>(
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name"value={values.name}
              className={errors.name && touched.name ? "input-error" : ""}
               /> 
                {touched.name && errors.name && (
                <div className="error">{errors.name}</div>
              )}
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div>
            <label htmlFor="phone">Phone:</label>
            <Field type="text" id="phone" name="phone" value={values.phone}
            className={errors.phone&& touched.phone? "input-error" : ""}/>
              {touched.phone&& errors.phone&& (
                <div className="error">{errors.phone} </div>)}
          </div>

          <div>
              <label>Gender:</label>
              <div>
                <Field type="radio" id="male" name="gender" value="male"
                 className={errors.gender && touched.gender ? "input-error" : ""}/>
                <label htmlFor="male">Male</label>
              </div>
              <div>
                <Field type="radio" id="female" name="gender" value="female"
                className={errors.gender && touched.gender ? "input-error" : ""}/>
                <label htmlFor="female">Female</label>
              </div>
              {touched.gender && errors.gender && (
                <div className="error">{errors.gender}</div>
              )}
            </div>
          <div>
          <button disabled={!isValid || isSubmitting} type="submit">
              Submit
            </button>          </div>
        </form>
        )}
      </Formik>

      <Outlet />
    </>
  );
};

export default Page3;
