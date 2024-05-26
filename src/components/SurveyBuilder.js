import React, { useState } from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import MultipleChoice from './QuestionTypes/MultipleChoice';
import Checkboxes from './QuestionTypes/Checkboxes';
import StarRating from './QuestionTypes/StarRating';
import BestWorstScale from './QuestionTypes/BestWorstScale';
import FileUpload from './QuestionTypes/FileUpload';
import SingleTextbox from './QuestionTypes/SingleTextbox';
import CommentBox from './QuestionTypes/CommentBox';
import MatrixRatingScale from './QuestionTypes/MatrixRatingScale';
import Ranking from './QuestionTypes/Ranking';
import Slider from './QuestionTypes/Slider';
import MultipleTextboxes from './QuestionTypes/MultipleTextboxes';
import DateTime from './QuestionTypes/DateTime';
import MatrixOfDropdownMenus from './QuestionTypes/MatrixOfDropdownMenus';

const questionTypes = [
    { value: '', label: 'Select Question Type' },
    { value: 'MultipleChoice', label: 'Multiple Choice' },
    { value: 'Checkboxes', label: 'Checkboxes' },
    { value: 'StarRating', label: 'Star Rating' },
    { value: 'BestWorstScale', label: 'Best Worst Scale' },
    { value: 'FileUpload', label: 'File Upload' },
    { value: 'SingleTextbox', label: 'Single Textbox' },
    { value: 'CommentBox', label: 'Comment Box' },
    { value: 'MatrixRatingScale', label: 'Matrix / Rating Scale' },
    { value: 'Ranking', label: 'Ranking' },
    { value: 'Slider', label: 'Slider' },
    { value: 'MultipleTextboxes', label: 'Multiple Textboxes' },
    { value: 'DateTime', label: 'Date / Time' },
    { value: 'MatrixOfDropdownMenus', label: 'Matrix of Dropdown Menus' },
];

const SurveyBuilder = () => {
    const [questions, setQuestions] = useState([]);

    const handleAddQuestion = () => {
        const newQuestion = { id: `q-${questions.length + 1}`, question: '', type: '', options: [] };
        setQuestions([...questions, newQuestion]);
    };

    const handleRemoveQuestion = (index) => {
        const updatedQuestions = questions.filter((_, i) => i !== index);
        setQuestions(updatedQuestions);
    };

    const renderQuestionComponent = (question, index) => {
        const componentProps = { name: `questions.${index}`, question };
        switch (question.type) {
            case 'MultipleChoice': return <MultipleChoice {...componentProps} />;
            case 'Checkboxes': return <Checkboxes {...componentProps} />;
            case 'StarRating': return <StarRating {...componentProps} />;
            case 'BestWorstScale': return <BestWorstScale {...componentProps} />;
            case 'FileUpload': return <FileUpload {...componentProps} />;
            case 'SingleTextbox': return <SingleTextbox {...componentProps} />;
            case 'CommentBox': return <CommentBox {...componentProps} />;
            case 'MatrixRatingScale': return <MatrixRatingScale {...componentProps} />;
            case 'Ranking': return <Ranking {...componentProps} />;
            case 'Slider': return <Slider {...componentProps} />;
            case 'MultipleTextboxes': return <MultipleTextboxes {...componentProps} />;
            case 'DateTime': return <DateTime {...componentProps} />;
            case 'MatrixOfDropdownMenus': return <MatrixOfDropdownMenus {...componentProps} />;
            default: return null;
        }
    };

    return (
        <div>
            <button onClick={handleAddQuestion}>Add Question</button>
            <Formik
                initialValues={{ questions }}
                enableReinitialize
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ values, setFieldValue }) => (
                    <Form>
                        {values.questions.map((question, index) => (
                            <div key={question.id}>
                                <Field name={`questions.${index}.question`} placeholder="Enter your question" />
                                <Field as="select" name={`questions.${index}.type`} onChange={(e) => {
                                    setFieldValue(`questions.${index}.type`, e.target.value);
                                    setFieldValue(`questions.${index}.options`, []);
                                }}>
                                    {questionTypes.map((type) => (
                                        <option key={type.value} value={type.value}>{type.label}</option>
                                    ))}
                                </Field>
                                {renderQuestionComponent(question, index)}
                                <button type="button" onClick={() => handleRemoveQuestion(index)}>Remove Question</button>
                            </div>
                        ))}
                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default SurveyBuilder;
