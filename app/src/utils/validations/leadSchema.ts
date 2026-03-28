import * as yup from "yup";

export const leadFormSchema = yup.object().shape({
  name: yup.string().optional(),
  lastName: yup.string().optional(),
  stAddress: yup.string().optional(),
  email: yup.string().email("Invalid email format").optional(),
  phone: yup
  .string()
  .required("Phone number is required")
  .matches(
    /^\+1[\d\s.-]+$/,
    "Phone number must be valid"
  )
});
