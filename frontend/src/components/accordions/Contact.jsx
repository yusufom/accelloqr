
import React from 'react';
import { SelectInput, TextInput } from '../../customs/Input';


function Contact({ formik, onClickAdd, onCLickRemove }) {

    const handleTelephoneChange = (e, index, field) => {
        const { value } = e.target;
        formik.setValues((prevState) => {
            const updatedTelephoneEmployee = [...prevState.telephone_employee];
            updatedTelephoneEmployee[index][field] = value;
            return { ...prevState, telephone_employee: updatedTelephoneEmployee };
        });
    };

    const addTelephoneInput = () => {
        formik.setValues((prevState) => {
            const updatedTelephoneEmployee = [...prevState.telephone_employee, { type: '', name: '', phone: '' }];
            return { ...prevState, telephone_employee: updatedTelephoneEmployee };
        });
    };

    const removeTelephoneInput = () => {
        formik.setValues((prevState) => {
            const updatedTelephoneEmployee = [...prevState.telephone_employee];
            updatedTelephoneEmployee.pop()
            return { ...prevState, telephone_employee: updatedTelephoneEmployee };

        });
    };


    return (
        <div>
            {formik.values.telephone_employee.map((item, index) => (
                <div className='flex flex-wrap md:gap-4 gap-1 my-4 items-center' key={index}>
                    <div className='w-2/5'>
                        <SelectInput label={`Type`} data={['Mobile', 'Home', 'Work']} firstOption={`Choose Phone Type`} value={item.type}
                            onChange={(e) => handleTelephoneChange(e, index, 'type')} error={formik.errors.telephone_employee && formik.touched.telephone_employee} helperText={formik.errors.telephone_employee &&
                                formik.errors.telephone_employee[index]
                                ? formik.errors.telephone_employee[index].type
                                : ''}
                        />

                    </div>
                    {/* <div className='md:w-1/4 w-[49%]'>
                        <TextInput label={`Name`} require={false} value={item.name} placeHolder={`Enter title`}
                            onChange={(e) => handleTelephoneChange(e, index, 'name')} error={formik.errors.telephone_employee && formik.touched.telephone_employee} helperText={formik.errors.telephone_employee &&
                                formik.errors.telephone_employee[index]
                                ? formik.errors.telephone_employee[index].name
                                : ''}

                        />
                    </div> */}
                    <div className='w-[55%]'>
                        <TextInput label={`Phone`} require={false} value={item.phone} placeHolder={`Enter phone number`}
                            onChange={(e) => handleTelephoneChange(e, index, 'phone')} error={formik.errors.telephone_employee && formik.touched.telephone_employee} helperText={formik.errors.telephone_employee &&
                                formik.errors.telephone_employee[index]
                                ? formik.errors.telephone_employee[index].phone
                                : ''}
                        />
                    </div>

                </div>
            ))}
            <div className=' mt-7 w-full'>
                <button className='bg-primary text-white px-8 py-2 flex items-center justify-center rounded-full text-center max-w-sm mx-auto' onClick={addTelephoneInput}>+ Add Contact</button>
                {formik.values.telephone_employee.length > 1 &&
                    <button className='bg-red-800 text-white px-8 py-2 flex items-center justify-center rounded-full text-center max-w-sm mx-auto mt-2' onClick={removeTelephoneInput}>- Remove Contact</button>

                }
            </div>
        </div>
    )
}


export default Contact
