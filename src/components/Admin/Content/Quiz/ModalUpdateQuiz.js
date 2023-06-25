import _ from "lodash";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiOutlineUpload } from "react-icons/ai";
import Select from "react-select";
import { putUpdateQuiz } from "../../../../services/apiServices";
import { toast } from "react-toastify";
const options = [
  { value: "EASY", label: "EASY" },
  { value: "MEDIUM", label: "MEDIUM" },
  { value: "HARD", label: "HARD" },
];
const ModalUpdateQuiz = (props) => {
  const { show, setShow, dataUpdateQuiz, fetchQuiz } = props;

  const handleClose = () => {
    setShow();
    setName("");
    setDescription("");
    setType("");
    setImage(null);
    setPreviewImage(null);
  };

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    if (!_.isEmpty(dataUpdateQuiz)) {
      setType(options.find((item) => item.value === dataUpdateQuiz.type));
      setName(dataUpdateQuiz.name);
      setDescription(dataUpdateQuiz.description);
      if (dataUpdateQuiz.image) {
        setPreviewImage(`data:image/jpeg;base64,${dataUpdateQuiz.image}`);
      }
    }
  }, [dataUpdateQuiz]);

  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    } else {
      setPreviewImage("");
    }
  };

  const handleSubmitUpdateUser = async () => {
    let res = await putUpdateQuiz(
      dataUpdateQuiz.id,
      description,
      name,
      type?.value,
      image
    );

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
      <Modal
        className="model-add-user"
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update a quiz</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                onChange={(event) => setDescription(event.target.value)}
                value={description}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Difficulty</label>
              <Select
                defaultValue={type}
                value={type}
                onChange={setType}
                options={options}
                placeholder={"Quiz type..."}
              />
            </div>

            <div className="col-md-12">
              <label className="form-label label-upload" htmlFor="labelUpload">
                <AiOutlineUpload /> Upload file image
              </label>
              <input
                type="file"
                hidden
                id="labelUpload"
                onChange={(event) => handleUploadImage(event)}
              />
            </div>

            <div className="col-md-12 img-preview">
              {previewImage ? (
                <img src={previewImage} />
              ) : (
                <span>Preview Image</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitUpdateUser()}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateQuiz;
