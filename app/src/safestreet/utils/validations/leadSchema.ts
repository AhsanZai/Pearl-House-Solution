import * as yup from "yup";

export const leadFormSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  stAddress: yup.string().optional(),
  email: yup.string().email("Invalid email format").optional(),
  phone: yup.string().required("Phone is required"),
  zip: yup.string().required("Zip is required"),
});
