import React from 'react'
import { TextInput } from '../../customs/Input';


function Email({ formik }) {

    const handleEmailChange = (e, index, field) => {
        const { value } = e.target;
        formik.setValues((prevState) => {
          const updatedEmailEmployee = [...prevState.email_employee];
          updatedEmailEmployee[index][field] = value;
          return { ...prevState, email_employee: updatedEmailEmployee };
        });
      };

      const addEmailInput = () => {
        formik.setValues((prevState) => {
          const updatedEmailEmployee = [...prevState.email_employee, { name: '', email: '' }];
          return { ...prevState, email_employee: updatedEmailEmployee };
    
        });
      };
      const removeEmailInput = () => {
        formik.setValues((prevState) => {
          const updatedEmailEmployee = [...prevState.email_employee];
          updatedEmailEmployee.pop()
          return { ...prevState, email_employee: updatedEmailEmployee };
    
        });
      };
    return (
        <div >
            {formik.values.email_employee.map((item, index) => (
                <div className='flex flex-wrap md:gap-4 gap-1 my-4 items-center' key={index}>
                    {/* <div className='md:w-2/5 w-[40%]'>
                        <TextInput label={`Title`} require={false} value={item.name} onChange={(e) => handleEmailChange(e, index, 'name')} placeHolder={`Enter title`} error={formik.errors.email_employee && formik.touched.email_employee} helperText={formik.errors.email_employee &&
                                formik.errors.email_employee[index]
                                ? formik.errors.email_employee[index].name
                                : ''} />
                    </div> */}
                    <div className='w-full'>
                        <TextInput label={`Email Address`} require={false} value={item.email} onChange={(e) => handleEmailChange(e, index, 'email')} placeHolder={`Enter email`} error={formik.errors.email_employee && formik.touched.email_employee} helperText={formik.errors.email_employee &&
                                formik.errors.email_employee[index]
                                ? formik.errors.email_employee[index].email
                                : ''} />
                    </div>

                </div>
            ))}

            <div className='mt-7 w-full'>
                <button className='bg-primary text-white px-8 py-2 flex items-center justify-center rounded-full text-center max-w-sm mx-auto' onClick={addEmailInput}>+ Add Email</button>
                {formik.values.email_employee.length > 1 &&
                    <button className='bg-red-800 text-white px-8 py-2 flex items-center justify-center rounded-full text-center max-w-sm mx-auto mt-2' onClick={removeEmailInput}>- Remove Email</button>

                }
            </div>






        </div>
    )
}

export default Email
