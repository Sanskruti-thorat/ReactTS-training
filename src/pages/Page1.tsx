import { Outlet, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import '../CSS/form.style.css';
import { basicSchemaVal } from "../validation";

interface FormData {
  username: string;
  email: string;
  dateofBirth: Date;
  password: string;
  confirmPassword: string;
  age: string;
}

export default function Page1() {
  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (values: FormData, actions: any) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    setFieldValue,
    handleBlur,
    handleChange,
    handleSubmit,
    isValid,
  } = useFormik<FormData>({
    initialValues: {
      username: "",
      email: "",
      dateofBirth: new Date(),
      password: "",
      confirmPassword: "",
      age: "",
    },
    validationSchema:basicSchemaVal,
    onSubmit,
  });

  return (
    <>
      <div>Page1</div>
      <button onClick={() => navigate("/Page1/pagechild1")}>click me</button>
      <Outlet />
      <section className="myForm">
        <div>
          <form action="" onSubmit={handleSubmit}>
            <div>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  value={values.username}
                  onChange={handleChange}
                  id="username"
                  onBlur={handleBlur}
                  className={
                    errors.username && touched.username ? "input-error" : ""
                  }
                />
                {errors.username && touched.username && (
                  <p className="error">{errors.username}</p>
                )}
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  id="email"
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? "input-error" : ""
                  }
                />
                {errors.email && touched.email && (
                  <p className="error">{errors.email}</p>
                )}
              </div>
              <div>
                <label>Birth of Date:</label>
                <input
                  type="date"
                  value={values.dateofBirth.toISOString().split("T")[0]}
                  onChange={(e) => {
                    handleChange(e);
                    setFieldValue("dateofBirth", new Date(e.target.value));
                  }}
                  id="dateofBirth"
                  onBlur={handleBlur}
                  className={
                    errors.dateofBirth && touched.dateofBirth
                      ? "input-error"
                      : ""
                  }
                />
                {errors.dateofBirth && touched.dateofBirth && (
                  <p className="error">{errors.dateofBirth}</p>
                )}
              </div>
              <div>
                <label>Age:</label>
                <input
                  type="number"
                  value={values.age}
                  onChange={handleChange}
                  id="age"
                  onBlur={handleBlur}
                  min={0}
                  className={errors.age && touched.age ? "input-error" : ""}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onInput={(event: any) => {
                    if (!event.target.value) {
                      event.target.value =
                        event.nativeEvent.data !== null ? values.age : "";
                    }
                  }}
                />
                {errors.age && touched.age && <p className="error">{errors.age}</p>}
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  id="password"
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? "input-error" : ""
                  }
                />
                {errors.password && touched.password && (
                  <p className="error">{errors.password}</p>
                )}
              </div>
              <div>
                <label>Confirm Password:</label>
                <input
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  id="confirmPassword"
                  onBlur={handleBlur}
                  className={
                    errors.confirmPassword && touched.confirmPassword
                      ? "input-error"
                      : ""
                  }
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <p className="error">{errors.confirmPassword}</p>
                )}
              </div>
              <button disabled={!isValid || isSubmitting} type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
