import React from "react";
import Question from "../models/question";

interface QuestionProps {
    question: Question;
}
const QuestionAccordion = (props: QuestionProps) => {
    return (
    <div className="accordion-item">
        <h2 className="accordion-header" id={"heading"+props.question.id}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#collapse"+props.question.id}
                    aria-expanded="true" aria-controls={"collapse"+props.question.id}>
                {props.question.title}
            </button>
        </h2>
        <div id={"collapse"+props.question.id} className="accordion-collapse collapse" aria-labelledby={"heading"+props.question.id}
             data-bs-parent="#accordionExample">
            <div className="accordion-body">
                {props.question.text}
            </div>
        </div>
    </div>
    );
}

export default QuestionAccordion;
