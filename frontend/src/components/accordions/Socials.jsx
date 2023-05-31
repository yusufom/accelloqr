import React from 'react'
import { SelectInput, TextInput } from '../../customs/Input';


function Socials({ formik }) {

    const handleSocialChange = (e, index, field) => {
        const { value } = e.target;
        formik.setValues((prevState) => {
            const updatedSocialsEmployee = [...prevState.socials_employee];
            updatedSocialsEmployee[index][field] = value;
            return { ...prevState, socials_employee: updatedSocialsEmployee };
        });
    };

    const addSocialInput = () => {
        formik.setValues((prevState) => {
            const updatedSocialsEmployee = [...prevState.socials_employee, { type: '', name: '', url: '' }];
            return { ...prevState, socials_employee: updatedSocialsEmployee };

        });
    };
    const removeSocialInput = () => {
        formik.setValues((prevState) => {
            const updatedSocialsEmployee = [...prevState.socials_employee];
            updatedSocialsEmployee.pop()
            return { ...prevState, socials_employee: updatedSocialsEmployee };

        });
    };
    return (
        <div >
            {formik.values.socials_employee.map((item, index) => (
                <div className='flex flex-wrap md:gap-4 gap-1 my-4 items-center' key={index}>
                    <div className='w-2/5'>
                        <SelectInput label={`Type`} data={['Facebook', 'Twitter', 'Linkedin', 'Instagram', 'Github']} firstOption={`Choose social media`} value={item.type} onChange={(e) => handleSocialChange(e, index, 'type')}  error={formik.errors.socials_employee && formik.touched.socials_employee} helperText={formik.errors.socials_employee &&
                                formik.errors.socials_employee[index]
                                ? formik.errors.socials_employee[index].type
                                : ''} />
                    </div>
                    {/* <div className='md:w-1/4 w-[49%]'>
                        <TextInput label={`Title`} require={false} value={item.name} onChange={(e) => handleSocialChange(e, index, 'name')} placeHolder={`Enter title`} error={formik.errors.socials_employee && formik.touched.socials_employee} helperText={formik.errors.socials_employee &&
                                formik.errors.socials_employee[index]
                                ? formik.errors.socials_employee[index].name
                                : ''}/>
                    </div> */}
                    <div className='w-[55%]'>
                        <TextInput label={`Url`} require={false} value={item.url} onChange={(e) => handleSocialChange(e, index, 'url')} placeHolder={`Enter url`} error={formik.errors.socials_employee && formik.touched.socials_employee} helperText={formik.errors.socials_employee &&
                                formik.errors.socials_employee[index]
                                ? formik.errors.socials_employee[index].url
                                : ''} />
                    </div>

                </div>
            ))}
            <div className=' mt-7 w-full'>
                <button className='bg-primary text-white px-8 py-2 flex items-center justify-center rounded-full text-center max-w-sm mx-auto' onClick={addSocialInput}>+ Add Socials</button>
                {formik.values.socials_employee.length > 1 &&
                    <button className='bg-red-800 text-white px-8 py-2 flex items-center justify-center rounded-full text-center max-w-sm mx-auto mt-2' onClick={removeSocialInput}>- Remove Socials</button>

                }
            </div>
        </div>
    )
}

export default Socials
