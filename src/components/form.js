import React from 'react';


const initialFormData = Object.freeze({
    firstname: "",
    lastname: "",
    email: '',
    phone: '',
    select: '',
    message: ''
});

export const Form = () => {
    let [formData, updateFormData] = React.useState(initialFormData);
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            // Trimming any whitespace
            [e.target.name]: e.target.value.trim()
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        formData = initialFormData;
        // ... submit to API or something
    };

    return (
        <section className="input-fields">
            <form className="form-control">
                <input name="firstname" className="input" onChange={handleChange} placeholder="Firstname" type="text" />
                <input name="lastname" className="input" onChange={handleChange} placeholder="Lastname" type="text" />
                <input name="email" className="input" onChange={handleChange} placeholder="Email" type="text" />
                <input name="phone" className="input" onChange={handleChange} placeholder="Phone" type="text" />
                <select name="select" className="input" onChange={handleChange} placeholder="Select option">
                    <option value="cloud">Cloud</option>
                    <option value="finance">Finance</option>
                    <option value="management">Management</option>
                    <option value="timeservice">Time service</option>
                </select>
                <input name="message" className="input" onChange={handleChange} placeholder="Message" type="text" />
                <button type="submit" onClick={handleSubmit}>Submit</button></form>
        </section>
    )
}