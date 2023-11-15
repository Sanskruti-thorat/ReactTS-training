import { Link, Outlet } from "react-router-dom"
import { tableVal } from "../validation";
import { useFormik } from "formik";
import { useState } from "react";


interface FormValues {
  type: string;
  date: string;
  percent: string;
  notes: string;
}


function Page2() {
  const [submittedValues, setSubmittedValues] = useState<FormValues[]>([])
    const formik = useFormik({
      initialValues: {
        type: "",
        date: "",
        percent: "",
        notes: "",
      },
      validationSchema: tableVal ,
      onSubmit: (values) => {
        console.log("Form submitted:", values);
        setSubmittedValues((prevValues) => [...prevValues, values])
       
      },
    });


    const deleteRow=(index:number)=>{
      setSubmittedValues((prevValues) =>
      prevValues.filter((_, i) => i !== index)
    );
    }
  return (
    <>
        <div>page2</div>
    <Link to={'/page2/pagechild2'}>click</Link>
 
    <section>
    <form onSubmit={formik.handleSubmit}>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Date</th>
            <th>Percent</th>
            <th>Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                type="text"
                name="type"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.type}
              />
              {formik.touched.type && formik.errors.type && (
                <div className="error">{formik.errors.type}</div>
              )}
            </td>
            <td>
              <input
                type="date"
                name="date"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.date}
              />
              {formik.touched.date && formik.errors.date && (
                <div className="error">{formik.errors.date}</div>
              )}
            </td>
            <td>
              <input
                type="number"
                name="percent"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.percent}
              />
              {formik.touched.percent && formik.errors.percent && (
                <div className="error">{formik.errors.percent}</div>
              )}
            </td>
            <td>
              <input
                type="text"
                name="notes"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.notes}
              />
              {formik.touched.notes && formik.errors.notes && (
                <div className="error">{formik.errors.notes}</div>
              )}
            </td>
            <td>
              <button type="submit" disabled={!formik.isValid}>
                Add
              </button>
              <button type="button" onClick={() => formik.resetForm()}>
                Reset
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
    </section>





    <section>
  <table>
    <tbody>
      {submittedValues.map((submittedValue, index) => (
        <tr key={index}>
          <td>{submittedValue.type}</td>
          <td>{submittedValue.date}</td>
          <td>{submittedValue.percent}</td>
          <td>{submittedValue.notes}</td>
          <td>
            <button onClick={() =>deleteRow(index)}>delete</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
      </section>
      <Outlet />
    </>

  )
}

export default Page2