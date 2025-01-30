import { useFormik } from "formik";
import * as Yup from "yup";

const UserForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required")
    }),
    onSubmit: values => {
      fetch("http://127.0.0.1:5555/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      })
        .then(res => res.json())
        .then(data => {
          console.log("User created", data);
          formik.resetForm();
        })
        .catch(err => console.log(err));
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="">
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-red-500 text-sm mt-2">{formik.errors.name}</div>
        ) : null}
      </div>
      <div className="mb-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-sm mt-2">{formik.errors.email}</div>
        ) : null}
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};
export default UserForm;
