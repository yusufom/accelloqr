import React from 'react'
import { TextInput } from '../../customs/Input';


function Website({ formik }) {

    const handleWebsiteChange = (e, index, field) => {
        const { value } = e.target;
        formik.setValues((prevState) => {
            const updatedWebsiteEmployee = [...prevState.website_employee];
            updatedWebsiteEmployee[index][field] = value;
            return { ...prevState, website_employee: updatedWebsiteEmployee };
        });
    };

    const addWebsiteInput = () => {
        formik.setValues((prevState) => {
            const updatedWebsiteEmployee = [...prevState.website_employee, { name: '', url: '' }];
            return { ...prevState, website_employee: updatedWebsiteEmployee };

        });
    };
    const removeWebsiteInput = () => {
        formik.setValues((prevState) => {
            const updatedWebsiteEmployee = [...prevState.website_employee];
            updatedWebsiteEmployee.pop()
            return { ...prevState, website_employee: updatedWebsiteEmployee };

        });
    };
    return (
        <div >
            {formik.values.website_employee.map((item, index) => (
                <div className='flex flex-wrap md:gap-4 gap-1 my-4 items-center' key={index}>
                    <div className='md:w-2/5 w-[40%]'>
                        <TextInput label={`Title`} require={false} value={item.name} onChange={(e) => handleWebsiteChange(e, index, 'name',)} placeHolder={`Enter title`} error={formik.errors.website_employee && formik.touched.website_employee} helperText={formik.errors.website_employee &&
                            formik.errors.website_employee[index]
                            ? formik.errors.website_employee[index].name
                            : ''} />
                    </div>
                    <div className='md:w-[55%] w-[58.5%]'>
                        <TextInput label={`URL`} require={false} value={item.url} onChange={(e) => handleWebsiteChange(e, index, 'url')} placeHolder={`https://www.example.com`} error={formik.errors.website_employee && formik.touched.website_employee} helperText={formik.errors.website_employee &&
                            formik.errors.website_employee[index]
                            ? formik.errors.website_employee[index].url
                            : ''} />
                    </div>

                </div>
            ))}

            <div className=' mt-7 w-full'>
                <button className='bg-primary text-white px-8 py-2 flex items-center justify-center rounded-full text-center max-w-sm mx-auto' onClick={addWebsiteInput}>+ Add Wesite</button>
                {formik.values.website_employee.length > 1 &&
                    <button className='bg-red-800 text-white px-8 py-2 flex items-center justify-center rounded-full text-center max-w-sm mx-auto mt-2' onClick={removeWebsiteInput}>- Remove Website</button>

                }
            </div>
        </div>
    )
}

export default Website