// components/QuestionTypes/Checkboxes.js
import React from 'react';
import { Field, FieldArray } from 'formik';

const Checkboxes = ({ name }) => (
    <div>
        <h3>Checkboxes</h3>
        <Field name={`${name}.question`} placeholder="Enter your question" />
        <FieldArray name={`${name}.options`}>
            {({ push, remove, form }) => (
                <div>
                    {form.values[name].options.map((option, index) => (
                        <div key={index}>
                            <Field type="checkbox" name={`${name}.options.${index}.checked`} />
                            <Field name={`${name}.options.${index}.label`} placeholder={`Option ${index + 1}`} />
                            <button type="button" onClick={() => remove(index)}>Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={() => push({ label: '', checked: false })}>Add Option</button>
                </div>
            )}
        </FieldArray>
    </div>
);

export default Checkboxes;
