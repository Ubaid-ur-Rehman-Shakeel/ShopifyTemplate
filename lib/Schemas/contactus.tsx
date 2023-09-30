import * as Yup from "yup";
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
export const Contactusscehema = Yup.object({
  firstname: Yup.string()
  .required("First Name is required")
  .min(3, "Please enter more then 3 characters")
  .max(100, "Character limit reached, maximum allowed characters is 100."),
  lastname: Yup.string()
  .required("Last Name is required")
  .min(3, "Please enter more then 3 characters")
  .max(100, "Character limit reached, maximum allowed characters is 100."),
  phoneNumber: Yup
  .string()
  .required("Phone Number is required")
  .min(10, "Please enter more then 10 characters")
  .max(10, "Character limit reached, maximum allowed characters is 10."),
  email: Yup .string()
  .email("Email is not valid")
  .required("Email is required")
  .max(55, "Character limit reached, maximum allowed characters is 55.")
  .matches(emailRegex, "Email is not valid"),
  comment:Yup.string().min(25).max(250).required("Leave a comment")
});