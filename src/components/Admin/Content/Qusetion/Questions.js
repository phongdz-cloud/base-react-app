import React, { useState } from "react";
import Select from "react-select";
import { GoPlus } from "react-icons/go";
import { BiMinus } from "react-icons/bi";
import { AiOutlineMinusCircle, AiFillPlusCircle } from "react-icons/ai";

import "./Questions.scss";
//BiMinus
const Questions = (props) => {
  const options = [
    { value: "EASY", label: "EASY" },
    { value: "MEDIUM", label: "MEDIUM" },
    { value: "HARD", label: "HARD" },
  ];
  const [selectedQuiz, setSelectedQuiz] = useState({});
  return (
    <div className="questions-container">
      <div className="title">Manage Questions</div>
      <div className="add-new-question">
        <div className="col-6 form-group">
          <label>Select Quiz:</label>
          <Select
            defaultValue={selectedQuiz}
            onChange={setSelectedQuiz}
            options={options}
          />
        </div>
        <div className="mt-3">Add question:</div>
        <div className="question-content">
          <div className="form-floating description">
            <input
              type="text"
              className="form-control"
              placeholder="name@example.com"
            />
            <label>Description</label>
          </div>
          <div className="group-upload">
            <label className="label-upload">Upload Image</label>
            <input type="file" hidden />
            <span>0 file is uploaded</span>
          </div>
          <div className="btn-add">
            <GoPlus className="icon-add" />
            <BiMinus className="icon-remove" />
          </div>
        </div>
        <div className="answers-content">
          <input className="form-check-input iscorrect" type="checkbox" />
          <div className="form-floating answer-name">
            <input
              type="text"
              className="form-control"
              placeholder="name@example.com"
            />
            <label>Answer 1</label>
          </div>
          <div className="btn-group">
            <AiFillPlusCircle className="icon-add" />
            <AiOutlineMinusCircle className="icon-remove" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
