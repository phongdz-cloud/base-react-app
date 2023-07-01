import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz, postSubmitQuiz } from "../../services/apiServices";
import _ from "lodash";
import "./DetailQuiz.scss";
import Question from "./Question";
import ModalResult from "./ModalResult";
import RightContent from "./Content/RightContent";
const DetailQuiz = (props) => {
  const params = useParams();

  const quizId = params.id;

  const localtion = useLocation();

  const [dataQuiz, setDataQuiz] = useState([]);

  const [index, setIndex] = useState(0);

  const [isShowModalResult, setShowModalResult] = useState(false);

  const [dataModalResult, setDataModalResult] = useState(false);

  useEffect(() => {
    fetchQuestions();
  }, [quizId]);

  const handlePrev = () => {
    if (index - 1 < 0) return;
    setIndex(index - 1);
  };

  const handleNext = () => {
    if (dataQuiz && dataQuiz.length > index + 1) setIndex(index + 1);
  };

  const handleFinishQuiz = async () => {
    let payload = { quizId, answers: [] };
    let answers = [];
    if (dataQuiz && dataQuiz.length > 0) {
      dataQuiz.forEach((question) => {
        let questionId = +question.questionId;
        let userAnswerId = [];

        question.answer.forEach((a) => {
          if (a.isSelected) {
            userAnswerId.push(a.id);
          }
        });

        answers.push({
          questionId,
          userAnswerId,
        });
      });
      payload.answers = answers;

      // submit api
      let res = await postSubmitQuiz(payload);

      console.log("check res: ", res);

      if (res && res.EC === 0) {
        setDataModalResult({
          countCorrect: res.DT.countCorrect,
          countTotal: res.DT.countTotal,
          quizData: res.DT.quizData,
        });
        setShowModalResult(true);
      } else {
        alert("something wrongs....");
      }
    }
  };

  const handleHandleCheckBox = (answerId, questionId) => {
    // react hook doesn't merge state
    let dataQuizClone = _.cloneDeep(dataQuiz);
    let question = dataQuizClone.find(
      (item) => +item.questionId === +questionId
    );
    if (question && question.answer) {
      question.answer = question.answer.map((item) => {
        if (item.id === +answerId) {
          item.isSelected = !item.isSelected;
        }
        return item;
      });
      //   console.log(b);
    }
    let index = dataQuizClone.findIndex(
      (item) => +item.questionId === +questionId
    );
    if (index > -1) {
      dataQuizClone[index] = question;
      setDataQuiz(dataQuizClone);
    }
  };

  const fetchQuestions = async () => {
    const res = await getDataQuiz(quizId);
    if (res && res.EC === 0) {
      let raw = res.DT;
      let data = _.chain(raw)
        // Group the elements of Array based on `color` property
        .groupBy("id")
        // `key` is group's name (color), `value` is the array of objects
        .map((value, key) => {
          let answer = [];
          let questionDescription,
            image = null;
          value.forEach((item, index) => {
            if (index === 0) {
              questionDescription = item.description;
              image = item.image;
            }
            item.answers.isSelected = false;
            answer.push(item.answers);
          });
          return { questionId: key, answer, questionDescription, image };
        })
        .value();
      setDataQuiz(data);
    }
  };

  return (
    <div className="detail-quiz-container">
      <div className="left-content">
        <div className="title">
          Quiz {quizId}: {localtion?.state?.quizTitle}
        </div>
        <hr />
        <div className="q-body"></div>
        <div className="q-content">
          <Question
            handleHandleCheckBox={handleHandleCheckBox}
            data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : []}
            index={index}
          />
        </div>
        <div className="footer">
          <button className="btn btn-secondary" onClick={() => handlePrev()}>
            Prev
          </button>
          <button className="btn btn-primary" onClick={() => handleNext()}>
            Next
          </button>
          <button
            className="btn btn-warning"
            onClick={() => handleFinishQuiz()}
          >
            Finish
          </button>
        </div>
      </div>
      <div className="right-content">
        <RightContent dataQuiz={dataQuiz} handleFinishQuiz={handleFinishQuiz} />
      </div>
      <ModalResult
        show={isShowModalResult}
        setShow={setShowModalResult}
        dataModalResult={dataModalResult}
      />
    </div>
  );
};

export default DetailQuiz;
