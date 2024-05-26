// components/QuestionTypes/SingleTextbox.js
import React from 'react';
import { Field } from 'formik';

const SingleTextbox = ({ name }) => (
    <div>
        <h3>Single Textbox</h3>
        <Field name={`${name}.question`} placeholder="Enter your question" />
        <Field name={`${name}.answer`} placeholder="Enter your answer" />
    </div>
);

export default SingleTextbox;
