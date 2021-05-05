import React from 'react';
import { Form } from './form';
import { Contact } from './contact';



export const Wrapper = () => {
    return (
        <div className="wrapper ">
            <div className="contact-form container">
                <Form />
                <Contact />
            </div>
        </div>
    )
}