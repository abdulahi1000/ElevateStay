import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from "yup";
import React from 'react'
import { notification } from 'antd';
import openNotification from '../../components/Notification';

function DeliveryForm() {
  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
  return (
    <div className="">

          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              email: "",
              phone: "",
              address: "",
            }}
            validationSchema={Yup.object().shape({
              first_name: Yup.string()
                .min(4, "First name must be at least 2 characters")
                .required("First name is required"),
                last_name: Yup.string()
                .min(4, "Last name must be at least 2 characters")
                .required("Last name is required"),
                address: Yup.string()
                .min(4, "address must be at least 2 characters")
                .required("address is required"),
              email: Yup.string().required(
                "email is required"
              ),
              phone: Yup.number()
              .min(11, "number must be 11 digit")
              .required("phonse is required")
              
            })}
            onSubmit={(values) => {
              // setLoading(true);
              try {
                // highlight-next-line
                // const formData = new FormData();
                // formData.append("business_name", values.business_name);
                // formData.append("is_registered", values.business_registration);
                // formData.append("description", values.description);
                // formData.append("amount", values.amount);
                // formData.append("proposal", values.proposal);
                console.log(values)
                openNotification(
                  "success",
                  "Order Request",
                  "Order placed successful. We will get back to you within 24 hours"
                );
                localStorage.removeItem("cartItems")
                localStorage.removeItem("cartCount")
                setTimeout(() => {
                  location.reload()
                }, 2000);

              
              } catch (err) {
                //error
              }
              setTimeout(() => {
                setLoading(false);
              }, 5000);
            }}
          >
            {({ values, setFieldValue, handleBlur, handleChange, isValid }) => (
              <Form className="grid grid-cols-12 gap-3">
                <div className="col-span-6 xs:col-span-12 flex flex-col mb-3">
                  <label className=" text-[#888]">
                    First Name <span className="text-[red]">*</span>
                  </label>
                  <Field
                    type="text"
                    name="first_name"
                    placeholder="Enter First Name"
                    className="border border-[#D0D0D0] px-6 h-[40px] rounded-md mt-1"
                  />
                  <ErrorMessage
                    name="first_name"
                    component="span"
                    className="text-[red]"
                  />
                </div>
                <div className="col-span-6 xs:col-span-12 flex flex-col mb-3">
                  <label className=" text-[#888]">
                    Last Name <span className="text-[red]">*</span>
                  </label>
                  <Field
                    type="text"
                    name="last_name"
                    placeholder="Enter Last Name"
                    className="border border-[#D0D0D0] px-6 h-[40px] rounded-md mt-1"
                  />
                  <ErrorMessage
                    name="last_name"
                    component="span"
                    className="text-[red]"
                  />
                </div>
                <div className="col-span-12 xs:col-span-12 flex flex-col mb-3">
                  <label className=" text-[#888]">
                   Email
                    <span className="text-[red]">*</span>
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    className="border border-[#D0D0D0] px-6 h-[40px] rounded-md mt-1"
                  />
                   
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="text-[red]"
                  />
                </div>
                <div className="col-span-12 xs:col-span-12 flex flex-col mb-3">
                  <label className=" text-[#888]">
                   Phone Number
                    <span className="text-[red]">*</span>
                  </label>
                  <Field
                    type="number"
                    name="phone"
                    placeholder="Enter phone Number"
                    className="border border-[#D0D0D0] px-6 h-[40px] rounded-md mt-1"
                  />
                   
                  <ErrorMessage
                    name="phone"
                    component="span"
                    className="text-[red]"
                  />
                </div>
                <div className="col-span-12 xs:col-span-12 flex flex-col mb-3">
                  <label className=" text-[#888]">
                    Address <span className="text-[red]">*</span>
                  </label>
                  <Field
                    type="text"
                    name="address"
                    placeholder="Enter Address"
                    className="border border-[#D0D0D0] px-6 h-[40px] rounded-md mt-1"
                  />
                  <ErrorMessage
                    name="address"
                    component="span"
                    className="text-[red]"
                  />
                </div>
               
                
                <div className="col-span-12">
                    <button
                type="submit"
                className="text-white rounded-[5px]  p-3 bg-secondary my-5"
              >
                 Submit


              </button>
                  {/*<button type='submit' className="w-full p-5 my-5 bg-primary text-secondary">*/}
                  {/*  Apply Here*/}
                  {/*</button>*/}
                </div>
              </Form>
            )}
          </Formik>
        </div>
  )
}

export default DeliveryForm