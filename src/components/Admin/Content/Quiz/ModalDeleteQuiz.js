import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteQuizByIdForAdmin } from "../../../../services/apiServices";
import { toast } from "react-toastify";

const ModalDeleteQuiz = (props) => {
  const { show, setShow, quizId, fetchQuiz } = props;
  const handleClose = () => setShow(false);

  const handleSubmitDeleteQuiz = async () => {
    let res = await deleteQuizByIdForAdmin(quizId);
    if (res && res.EC === 0) {
      toast.success(res.EM);
    } else {
      toast.error(res.EM);
    }
    fetchQuiz();
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete the Quiz?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this quiz. id = <b>{quizId}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => handleSubmitDeleteQuiz()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteQuiz;
