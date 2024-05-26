// components/QuestionTypes/FileUpload.js
import React from 'react';
import { Field } from 'formik';

const FileUpload = ({ name }) => (
    <div>
        <h3>File Upload</h3>
        <Field name={`${name}.question`} placeholder="Enter your question" />
        <input type="file" name={`${name}.file`} />
    </div>
);

export default FileUpload;
