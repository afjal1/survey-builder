// components/SurveyView.js
import React from 'react';

const demoJson = [
    {
        "question_id": 1,
        "question": "What is the capital of India?",
        "questionType": "MultipleChoice",
        "options": [
            "Delhi",
            "Mumbai",
            "Kolkata",
            "Chennai"
        ]
    },
    {
        "question_id": 2,
        "question": "Select the programming languages you know.",
        "questionType": "Checkboxes",
        "options": [
            "JavaScript",
            "Python",
            "Java",
            "C++"
        ]
    },
    {
        "question_id": 3,
        "question": "Rate your experience with our service.",
        "questionType": "StarRating",
        "options": [
            "1 star",
            "2 stars",
            "3 stars",
            "4 stars",
            "5 stars"
        ]
    },
    {
        "question_id": 4,
        "question": "Choose the best and worst features of our product.",
        "questionType": "BestWorstScale",
        "options": [
            "Design",
            "Usability",
            "Performance",
            "Support"
        ]
    },
    {
        "question_id": 5,
        "question": "Upload your resume.",
        "questionType": "FileUpload"
    },
    {
        "question_id": 6,
        "question": "Provide your full name.",
        "questionType": "SingleTextbox"
    },
    {
        "question_id": 7,
        "question": "Please provide additional comments or feedback.",
        "questionType": "CommentBox"
    },
    {
        "question_id": 8,
        "question": "Rate the following aspects of our service.",
        "questionType": "MatrixRatingScale",
        "rows": [
            "Quality",
            "Speed",
            "Price"
        ],
        "columns": [
            "Poor",
            "Fair",
            "Good",
            "Very Good",
            "Excellent"
        ]
    },
    {
        "question_id": 9,
        "question": "Rank the following fruits from most to least favorite.",
        "questionType": "Ranking",
        "options": [
            "Apple",
            "Banana",
            "Cherry",
            "Date"
        ]
    },
    {
        "question_id": 10,
        "question": "Select your satisfaction level.",
        "questionType": "Slider",
        "min": 0,
        "max": 10
    },
    {
        "question_id": 11,
        "question": "Enter your contact information.",
        "questionType": "MultipleTextboxes",
        "textboxes": [
            "Name",
            "Email",
            "Phone"
        ]
    },
    {
        "question_id": 12,
        "question": "Select your appointment date and time.",
        "questionType": "DateTime"
    },
    {
        "question_id": 13,
        "question": "Evaluate the following options.",
        "questionType": "MatrixOfDropdownMenus",
        "rows": [
            "Option 1",
            "Option 2",
            "Option 3"
        ],
        "columns": [
            "Poor",
            "Average",
            "Good",
            "Excellent"
        ]
    }
];

const renderQuestion = (question) => {
    switch (question.questionType) {
        case 'MultipleChoice':
        case 'Checkboxes':
        case 'BestWorstScale':
        case 'Ranking':
            return (
                <div key={question.question_id}>
                    <h4>{question.question}</h4>
                    {question.options.map((option, index) => (
                        <div key={index}>
                            <input
                                type={question.questionType === 'Checkboxes' ? 'checkbox' : 'radio'}
                                name={question.question_id}
                                value={option}
                            />
                            <label>{option}</label>
                        </div>
                    ))}
                </div>
            );
        case 'StarRating':
            return (
                <div key={question.question_id}>
                    <h4>{question.question}</h4>
                    {question.options.map((option, index) => (
                        <div key={index}>
                            <input type="radio" name={question.question_id} value={option} />
                            <label>{option}</label>
                        </div>
                    ))}
                </div>
            );
        case 'FileUpload':
            return (
                <div key={question.question_id}>
                    <h4>{question.question}</h4>
                    <input type="file" name={question.question_id} />
                </div>
            );
        case 'SingleTextbox':
            return (
                <div key={question.question_id}>
                    <h4>{question.question}</h4>
                    <input type="text" name={question.question_id} />
                </div>
            );
        case 'CommentBox':
            return (
                <div key={question.question_id}>
                    <h4>{question.question}</h4>
                    <textarea name={question.question_id}></textarea>
                </div>
            );
        case 'MatrixRatingScale':
            return (
                <div key={question.question_id}>
                    <h4>{question.question}</h4>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                {question.columns.map((column, index) => (
                                    <th key={index}>{column}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {question.rows.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    <td>{row}</td>
                                    {question.columns.map((column, colIndex) => (
                                        <td key={colIndex}>
                                            <input
                                                type="radio"
                                                name={`${question.question_id}_${rowIndex}`}
                                                value={column}
                                            />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        case 'Slider':
            return (
                <div key={question.question_id}>
                    <h4>{question.question}</h4>
                    <input type="range" name={question.question_id} min={question.min} max={question.max} />
                </div>
            );
        case 'MultipleTextboxes':
            return (
                <div key={question.question_id}>
                    <h4>{question.question}</h4>
                    {question.textboxes.map((textbox, index) => (
                        <div key={index}>
                            <label>{textbox}</label>
                            <input type="text" name={`${question.question_id}_${textbox}`} />
                        </div>
                    ))}
                </div>
            );
        case 'DateTime':
            return (
                <div key={question.question_id}>
                    <h4>{question.question}</h4>
                    <input type="date" name={`${question.question_id}_date`} />
                    <input type="time" name={`${question.question_id}_time`} />
                </div>
            );
        case 'MatrixOfDropdownMenus':
            return (
                <div key={question.question_id}>
                    <h4>{question.question}</h4>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                {question.columns.map((column, index) => (
                                    <th key={index}>{column}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {question.rows.map((row, rowIndex) => (
                                <tr key={rowIndex}>
                                    <td>{row}</td>
                                    {question.columns.map((column, colIndex) => (
                                        <td key={colIndex}>
                                            <select name={`${question.question_id}_${rowIndex}`}>
                                                {question.columns.map((option, optionIndex) => (
                                                    <option key={optionIndex} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </select>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        default:
            return null;
    }
};

const SurveyView = () => {
    return (
        <div>
            <h2>Survey</h2>
            {demoJson.map(renderQuestion)}
        </div>
    );
};

export default SurveyView;
