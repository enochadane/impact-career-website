import Link from "next/link";
import React from "react";
import Image from "next/image";

import { useState } from "react";

import { useFormik } from "formik";

import * as yup from "yup";

import "bootstrap/dist/css/bootstrap.min.css";

const ApplyForm = () => {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      First_Name: "",
      Last_Name: "",
      email: "",
      Mobile_number: "",
      Notice_Period: "",
      LinkedIn_URL: "",
      Your_Location: "",
      Current_Salary: "",
      Resume_Upload: "",
    },
    onSubmit: () => {
      $("form").hide(
        setMessage("Thank you! Your submission has been received!")
      );
      setSubmitted(true);
      setvalidationSchema(false);
    },
    validationSchema: yup.object({
      First_Name: yup.string().trim().required("First Name is required"),
      Last_Name: yup.string().trim().required("Last Name is required"),
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
      Mobile_number: yup
        .string()
        .required("Mobile number is required!")
        .matches(new RegExp("[0-9]{10}")),
      Notice_Period: yup.string().trim().required("Notice_Period is required"),
      LinkedIn_URL: yup.string().trim().required("LinkedIn_URL is required"),
      Website: yup.string().trim().required("Website is required"),
      Your_Location: yup.string().trim().required("Your Location is required"),
      Current_Salary: yup
        .string()
        .trim()
        .required("Current Salary is required"),
      How_Did_You_Hear_About_Us: yup
        .string()
        .trim()
        .required("How Did You Hear About Us is required"),
      Resume_Upload: yup.string().trim().required("Resume Upload is missing"),

      message: yup.string().trim().required("Message is required"),
    }),
  });

  return (
    <div className='vh-100 d-flex flex-column justify-content-center align-items-center'>
      <div hidden={!submitted} className='alert alert-primary' role='alert'>
        {message}
      </div>
      <form
        id='registerForm'
        className='needs-validation'
        method='post'
        onSubmit={formik.handleSubmit}
      >
        <div className='mb-3'>
          <div className='row'>
            <div className='col-sm-6'>
              <input
                type='text'
                name='First_Name'
                className='form-control'
                placeholder='First Name'
                value={formik.values.First_Name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.First_Name && (
                <div className='text-danger'>{formik.errors.First_Name}</div>
              )}
            </div>

            <div className='col-sm-6'>
              <input
                type='text'
                name='Last_Name'
                className='form-control'
                placeholder='Last Name'
                value={formik.values.Last_Name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.Last_Name && (
                <div className='text-danger'>{formik.errors.Last_Name}</div>
              )}
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <div className='row'>
            <div className='col-sm-6'>
              <input
                type='email'
                name='email'
                className='form-control'
                placeholder='Email'
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && (
                <div className='text-danger'>{formik.errors.email}</div>
              )}
            </div>

            <div className='col-sm-6'>
              <input
                type='tel'
                name='Mobile_number'
                className='form-control'
                placeholder='Mobile number'
                value={formik.values.Mobile_number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.Mobile_number && (
                <div className='text-danger'>{formik.errors.Mobile_number}</div>
              )}
            </div>
          </div>
        </div>

        <div className='mb-3'>
          <div className='row'>
            <div className='col-sm-6'>
              <input
                type='text'
                name='Your_Location'
                className='form-control'
                placeholder='Your location'
                value={formik.values.Your_Location}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.Your_Location && (
                <div className='text-danger'>{formik.errors.Your_Location}</div>
              )}
            </div>
            <div className='col-sm-6'>
              <input
                type='text'
                name='Current_Salary'
                className='form-control'
                placeholder='Current-Salary'
                value={formik.values.Current_Salary}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.Current_Salary && (
                <div className='text-danger'>
                  {formik.errors.Current_Salary}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <div className='row'>
            <div className='col-sm-6'>
              <input
                type='text'
                name='Notice_Period'
                className='form-control'
                placeholder='Notice period'
                value={formik.values.Notice_Period}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.Notice_Period && (
                <div className='text-danger'>{formik.errors.Notice_Period}</div>
              )}
            </div>

            <div className='col-sm-6'>
              <input
                type='text'
                name='LinkedIn_URL'
                className='form-control'
                placeholder='LinkedIn URL'
                value={formik.values.LinkedIn_URL}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.LinkedIn_URL && (
                <div className='text-danger'>{formik.errors.LinkedIn_URL}</div>
              )}
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <input
            type='file'
            className='w-file-upload-input form-control UploadImg'
            accept='.pdf, .doc, .docx, .txt'
            name='Resume_Upload'
            data-iconname='fa-solid fa-cloud-arrow-up'
            data-name='Upload Job Description, If Available'
            aria-hidden='true'
            placeholder='Upload Job Description, If Available'
            tabIndex='-1'
            value={formik.values.Resume_Upload}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.Resume_Upload && (
            <div className='text-danger'>{formik.errors.Resume_Upload}</div>
          )}
        </div>

        {/* <button type="submit" className="btn btn-primary">
          Send
        </button> */}
        <div className='form-group text-center'>
          <input
            id='formButton'
            // onClick={SubmitHandler}
            type='submit'
            value='Submit'
            data-wait='Please wait...'
            className='site-btn'
          />
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;
