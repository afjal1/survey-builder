// components/QuestionTypes/Slider.js
import React from 'react';
import { Field } from 'formik';

const Slider = ({ name }) => (
    <div>
        <h3>Slider</h3>
        <Field name={`${name}.question`} placeholder="Enter your question" />
        <Field type="range" name={`${name}.value`} min="0" max="100" />
    </div>
);

export default Slider;
