import { useEffect } from 'react';

// ...

// Add this component at the top of your form
const FormErrors = ({ errors }) => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top of the page when errors are displayed
    }, [errors]);

    const errorMessages = [];

    for (const key in errors) {
        if (typeof errors[key] === 'string') {
            errorMessages.push(errors[key]);
        } else if (typeof errors[key] === 'object' && errors[key] !== null) {
            for (const subKey in errors[key]) {
                errorMessages.push(errors[key][subKey]);
            }
        }
    }

    return (
        <div className="text-red-500 mb-4">
            {errorMessages.map((error, index) => (
                <p key={index}>{error}</p>
            ))}
        </div>
    );
};
export default FormErrors