import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, User, ArrowRight } from "lucide-react";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short")
    .max(50, "Name is too long")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required")
});

export const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    // TODO: Implement actual signup logic
    console.log("Signup values:", values);
    setTimeout(() => {
      setSubmitting(false);
      navigate("/dashboard");
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900">
            Create Account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Join MyWallet to start managing your expenses
          </p>
        </motion.div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
        >
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmPassword: ""
            }}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full Name
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <Field
                      type="text"
                      name="name"
                      className={`block w-full pl-10 pr-3 py-2 border ${
                        errors.name && touched.name
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                      placeholder="John Doe"
                    />
                  </div>
                  {errors.name && touched.name && (
                    <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-gray-400" />
                    </div>
                    <Field
                      type="email"
                      name="email"
                      className={`block w-full pl-10 pr-3 py-2 border ${
                        errors.email && touched.email
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                      placeholder="you@example.com"
                    />
                  </div>
                  {errors.email && touched.email && (
                    <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <Field
                      type="password"
                      name="password"
                      className={`block w-full pl-10 pr-3 py-2 border ${
                        errors.password && touched.password
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                      placeholder="••••••••"
                    />
                  </div>
                  {errors.password && touched.password && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.password}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-gray-400" />
                    </div>
                    <Field
                      type="password"
                      name="confirmPassword"
                      className={`block w-full pl-10 pr-3 py-2 border ${
                        errors.confirmPassword && touched.confirmPassword
                          ? "border-red-500"
                          : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500`}
                      placeholder="••••••••"
                    />
                  </div>
                  {errors.confirmPassword && touched.confirmPassword && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        Create Account
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </Form>
            )}
          </Formik>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Already have an account?
                </span>
              </div>
            </div>

            <div className="mt-6">
              <button
                onClick={() => navigate("/login")}
                className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in instead
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
