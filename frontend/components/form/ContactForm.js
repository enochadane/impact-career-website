import Link from "next/link";
import React from "react";
import Image from "next/image";

import { useState } from "react";

import { useFormik } from "formik";

import * as yup from "yup";

import "bootstrap/dist/css/bootstrap.min.css";

const ContactForm = () => {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  // const [validationSchema, setValidationSchema] = useState(false);

  const formik = useFormik({
    initialValues: {
      First_Name: "",
      Last_Name: "",
      email: "",
      Phone: "",
      Title: "",
      Organization: "",
      Website: "",
      Position_Location: "",
      Title_of_Position: "",
      How_Did_You_Hear_About_Us: "",
      Resume_Upload: "",
      message: "",
    },
    onSubmit: () => {
      setMessage("Thank you! Your submission has been received!");
      setSubmitted(true);

      // setValidationSchema(true);
    },
    validationSchema: yup.object({
      First_Name: yup.string().trim().required("First Name is required"),
      Last_Name: yup.string().trim().required("Last Name is required"),
      email: yup
        .string()
        .email("Must be a valid email")
        .required("Email is required"),
      Phone: yup
        .string()
        .required("Phone number is required!")
        .matches(new RegExp("[0-9]{10}")),
      Title: yup.string().trim().required("Title is required"),
      Organization: yup.string().trim().required("Organization is required"),
      Website: yup.string().trim().required("Website is required"),
      Position_Location: yup
        .string()
        .trim()
        .required("Position Location is required"),
      Title_of_Position: yup
        .string()
        .trim()
        .required("Title of Position is required"),
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
                name='Phone'
                className='form-control'
                placeholder='Phone'
                value={formik.values.Phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.Phone && (
                <div className='text-danger'>{formik.errors.Phone}</div>
              )}
            </div>
          </div>
        </div>

        <div className='mb-3'>
          <div className='row'>
            <div className='col-sm-6'>
              <input
                type='text'
                name='Title'
                className='form-control'
                placeholder='Title'
                value={formik.values.Title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.Title && (
                <div className='text-danger'>{formik.errors.Title}</div>
              )}
            </div>

            <div className='col-sm-6'>
              <input
                type='text'
                name='Organization'
                className='form-control'
                placeholder='Organization'
                value={formik.values.Organization}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.Organization && (
                <div className='text-danger'>{formik.errors.Organization}</div>
              )}
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <div className='row'>
            <div className='col-sm-6'>
              <input
                type='text'
                name='Website'
                className='form-control'
                placeholder='Website'
                value={formik.values.Website}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.Website && (
                <div className='text-danger'>{formik.errors.Website}</div>
              )}
            </div>

            <div className='col-sm-6'>
              <select
                className='form-select form-control'
                name='Position Type'
                value={formik.values.Position_Type}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value='Temporary / Contract'>
                  Temporary / Contract
                </option>
                <option value='Direct Hire / Permanent'>
                  Direct Hire / Permanent
                </option>
                <option value='Executive / Search'>Executive / Search</option>
                <option value='Payrolling'>Payrolling</option>
                <option value='Apply With Us As A Candidate'>
                  Apply With Us As A Candidate
                </option>
              </select>
              {formik.errors.Position_Type && (
                <div className='text-danger'>{formik.errors.Position_Type}</div>
              )}
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <div className='row'>
            <div className='col-sm-6'>
              <input
                type='text'
                name='Position_Location'
                className='form-control'
                placeholder='Position Location'
                value={formik.values.Position_Location}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.Position_Location && (
                <div className='text-danger'>
                  {formik.errors.Position_Location}
                </div>
              )}
            </div>

            <div className='col-sm-6'>
              <input
                type='text'
                name='Title_of_Position'
                className='form-control'
                placeholder='Title of Position'
                value={formik.values.Title_of_Position}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.Title_of_Position && (
                <div className='text-danger'>
                  {formik.errors.Title_of_Position}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='mb-3'>
          <div className='row'>
            <div className='col-sm-6'>
              <input
                type='file'
                className='w-file-upload-input form-control UploadImg'
                accept='.pdf, .doc, .docx, .txt'
                name='Resume_Upload'
                data-iconName='fa-solid fa-cloud-arrow-up'
                data-name='Upload Job Description, If Available'
                aria-hidden='true'
                placeholder='Upload Job Description, If Available'
                tabindex='-1'
                value={formik.values.Resume_Upload}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.Resume_Upload && (
                <div className='text-danger'>{formik.errors.Resume_Upload}</div>
              )}
            </div>

            <div className='col-sm-6'>
              <input
                type='text'
                name='How_Did_You_Hear_About_Us'
                className='form-control'
                placeholder='How Did You Hear About Us?'
                value={formik.values.How_Did_You_Hear_About_Us}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.How_Did_You_Hear_About_Us && (
                <div className='text-danger'>
                  {formik.errors.How_Did_You_Hear_About_Us}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className='mb-3'>
          <textarea
            name='message'
            className='form-control'
            placeholder='Or Alternately, Describe Position:'
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.message && (
            <div className='text-danger'>{formik.errors.message}</div>
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

export default ContactForm;
// $("#formButton").click(function () {
//   $("#registerForm").toggle();
// });
