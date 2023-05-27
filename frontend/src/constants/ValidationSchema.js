
import * as yup from 'yup';


const ValidationSchema = yup.object({
    surname: yup.string('Enter Surname of Employee').required('Surname is required'),
    firstName: yup.string('Enter First Name of Employee').required('First Name is required'),
    gender: yup.string('Choose gender').required('Gender is required'),
    company: yup.string('Enter company name').required('Company is required'),
    address: yup.string('Enter company address').required('Company Address is required'),
    position: yup.string('Enter postion').required('Position is required'),
    telephone_employee: yup.array().of(
        yup.object().shape({
            type: yup.string().required('Telephone type is required'),
            name: yup.string().required('Telephone name is required'),
            phone: yup.string().required('Telephone phone number is required'),
        })
    ),
    email_employee: yup.array().of(
        yup.object().shape({
            name: yup.string().required('Email name is required'),
            email: yup.string().email('Invalid email address').required('Email address is required'),
        })
    ),
    website_employee: yup.array().of(
        yup.object().shape({
            name: yup.string().required('Website name is required'),
            url: yup.string().url('Invalid URL format').required('Website URL is required'),
        })
    ),
    socials_employee: yup.array().of(
        yup.object().shape({
            type: yup.string().required('Social type is required'),
            name: yup.string().required('Social name is required'),
            url: yup.string().url('Invalid URL format').required('Social URL is required'),
        })
    ),
});


export { ValidationSchema }