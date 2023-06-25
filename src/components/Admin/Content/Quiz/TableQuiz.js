import React, { useEffect, useState } from "react";
import { getAllQuizForAdmin } from "../../../../services/apiServices";
import ModalDeleteQuiz from "./ModalDeleteQuiz";
import ModalUpdateQuiz from "./ModalUpdateQuiz";

const TableQuiz = (props) => {
  const [listQuiz, setListQuiz] = useState([]);
  const [showModalDeleteQuiz, setShowModalDeleteQuiz] = useState(false);
  const [showModalUpdateQuiz, setShowModalUpdateQuiz] = useState(false);
  const [quizId, setQuizId] = useState(0);
  const [dataUpdateQuiz, setDataUpdateQuiz] = useState({});
  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    let res = await getAllQuizForAdmin();
    if (res && res.EC === 0) {
      setListQuiz(res.DT);
    }
  };

  const handleDeleteQuiz = (quizId) => {
    setShowModalDeleteQuiz(true);
    setQuizId(quizId);
  };

  const handleUpdateQuiz = (id, name, description, type, image) => {
    setDataUpdateQuiz({ id, name, description, type, image });
    setShowModalUpdateQuiz(true);
  };

  return (
    <>
      <div>List Quizzes: </div>
      <table className="table table-hover table-bordered my-2">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Type</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {listQuiz &&
            listQuiz.map((item, index) => {
              return (
                <tr key={`table-quiz-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.difficulty}</td>
                  <td style={{ display: "flex", gap: "15px" }}>
                    <button
                      className="btn btn-warning"
                      onClick={() =>
                        handleUpdateQuiz(
                          item.id,
                          item.name,
                          item.description,
                          item.difficulty,
                          item.image
                        )
                      }
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteQuiz(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <ModalDeleteQuiz
        show={showModalDeleteQuiz}
        setShow={setShowModalDeleteQuiz}
        quizId={quizId}
        fetchQuiz={fetchQuiz}
      />

      <ModalUpdateQuiz
        show={showModalUpdateQuiz}
        setShow={setShowModalUpdateQuiz}
        dataUpdateQuiz={dataUpdateQuiz}
        fetchQuiz={fetchQuiz}
      />
    </>
  );
};

export default TableQuiz;
