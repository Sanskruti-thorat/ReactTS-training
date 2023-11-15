import * as Yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}/;


export const basicSchemaVal = Yup.object().shape({
  username: Yup.string().required("Please enter your username."),
  email: Yup.string()
    .trim()
    .required("Email address is required.")
    .matches(
      emailRegex,
      "Please enter a valid email."
    ),
  age: Yup.number()
    .positive()
    .integer()
    .min(0, "Please enter a valid age.")
    .moreThan(0, "Age must be more than 0")
    .test(
      "is-valid-age",
      "Age must be between 0 and 100",
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (value: any) => value >= 0 && value <= 100
    )
    .required("Please enter your age."),
  password: Yup.string()
    .min(5,"password should be more than 5")
    .matches(
      passwordRules,
      "Please create a stronger password."
    )
    .required("Please enter password."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords must match.")
    .required("Please confirm your password."),
  dateofBirth: Yup.date()
    .max(new Date(), "Date of birth cannot be in the future.")
    .max(
      Yup.ref("yesterday"),
      "Date of birth cannot be today or in the future."
    )
    .required("Please enter your date of birth."),
  yesterday: Yup.date().default(
    () => new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
  ),
})



export const tableVal =Yup.object().shape({
  type: Yup.string().min(10, "Type must be at least 10 characters").required(),
  date: Yup.date()
  .min(
    Yup.ref("today"),
    "Date must be in the future."
  )
  .required("Please enter a date."),
today: Yup.date().default(() => new Date()),
  percent:Yup.number()
  .required("Percent is required")
  .integer("Percent must be an integer")
  .positive("Percent must be a positive number")
  .min(1, "Percent must be greater than or equal to 1")
  .max(100, "Percent must be less than or equal to 100"),
  notes: Yup.string().test({
    name: 'requiredWithPercent',
    test: function(value) {
      const percentValue = this.parent.percent;
      return !percentValue || (percentValue && value && value.length <= 20);
    },
    message: 'Notes must be at most 20 characters if a Percent value is provided',
  }),
  
  
});

