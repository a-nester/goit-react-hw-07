import * as Yup from "yup";

export const ValidSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short name!")
    .max(50, "Too long name!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too short number!")
    .max(50, "Too long name!")
    .required("Required"),
});

export const initialValues = { name: "", number: "" };
