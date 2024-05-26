// components/QuestionTypes/StarRating.js
import React from 'react';
import { Field } from 'formik';

const StarRating = ({ name }) => (
    <div>
        <h3>Star Rating</h3>
        <Field name={`${name}.question`} placeholder="Enter your question" />
        {/* Implement star rating selection */}
    </div>
);

export default StarRating;
