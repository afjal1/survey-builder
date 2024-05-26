// components/QuestionTypes/MultipleTextboxes.js
import React from 'react';
import { Field, FieldArray } from 'formik';

const MultipleTextboxes = ({ name }) => (
    <div>
        <h3>Multiple Textboxes</h3>
        <Field name={`${name}.question`} placeholder="Enter your question" />
        <FieldArray name={`${name}.textboxes`}>
            {({ push, remove, form }) => (
                <div>
                    {form.values[name].textboxes.map((textbox, index) => (
                        <div key={index}>
                            <Field name={`${name}.textboxes.${index}`} placeholder={`Textbox ${index + 1}`} />
                            <button type="button" onClick={() => remove(index)}>Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={() => push('')}>Add Textbox</button>
                </div>
            )}
        </FieldArray>
    </div>
);

export default MultipleTextboxes;
