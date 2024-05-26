// components/QuestionTypes/Ranking.js
import React from 'react';
import { Field, FieldArray } from 'formik';

const Ranking = ({ name }) => (
    <div>
        <h3>Ranking</h3>
        <Field name={`${name}.question`} placeholder="Enter your question" />
        <FieldArray name={`${name}.options`}>
            {({ push, remove, form }) => (
                <div>
                    {form.values[name].options.map((option, index) => (
                        <div key={index}>
                            <Field name={`${name}.options.${index}`} placeholder={`Option ${index + 1}`} />
                            <button type="button" onClick={() => remove(index)}>Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={() => push('')}>Add Option</button>
                </div>
            )}
        </FieldArray>
    </div>
);

export default Ranking;
