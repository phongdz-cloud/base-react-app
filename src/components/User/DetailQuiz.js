import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiServices";
const DetailQuiz = (props) => {
  const params = useParams();
  const quizId = params.id;
  useEffect(() => {
    console.log(quizId);
    fetchQuestions();
  }, [quizId]);

  const fetchQuestions = async () => {
    const res = await getDataQuiz(quizId);

    console.log(">>> check question: ", res);
  };
  return <div className="detail-quiz-container">DetailQuiz</div>;
};

export default DetailQuiz;
