// components/QuestionTypes/CommentBox.js
import React from 'react';
import { Field } from 'formik';

const CommentBox = ({ name }) => (
    <div>
        <h3>Comment Box</h3>
        <Field name={`${name}.question`} placeholder="Enter your question" />
        <Field as="textarea" name={`${name}.answer`} placeholder="Enter your comment" />
    </div>
);

export default CommentBox;
