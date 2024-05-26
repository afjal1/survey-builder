// components/QuestionTypes/MatrixOfDropdownMenus.js
import React from 'react';
import { Field, FieldArray } from 'formik';

const MatrixOfDropdownMenus = ({ name }) => (
    <div>
        <h3>Matrix of Dropdown Menus</h3>
        <Field name={`${name}.question`} placeholder="Enter your question" />
        <FieldArray name={`${name}.rows`}>
            {({ push: pushRow, remove: removeRow, form }) => (
                <div>
                    {form.values[name].rows.map((row, rowIndex) => (
                        <div key={rowIndex}>
                            <Field name={`${name}.rows.${rowIndex}`} placeholder={`Row ${rowIndex + 1}`} />
                            <button type="button" onClick={() => removeRow(rowIndex)}>Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={() => pushRow('')}>Add Row</button>
                </div>
            )}
        </FieldArray>
        <FieldArray name={`${name}.columns`}>
            {({ push: pushColumn, remove: removeColumn, form }) => (
                <div>
                    {form.values[name].columns.map((column, columnIndex) => (
                        <div key={columnIndex}>
                            <Field name={`${name}.columns.${columnIndex}`} placeholder={`Column ${columnIndex + 1}`} />
                            <button type="button" onClick={() => removeColumn(columnIndex)}>Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={() => pushColumn('')}>Add Column</button>
                </div>
            )}
        </FieldArray>
    </div>
);

export default MatrixOfDropdownMenus;
