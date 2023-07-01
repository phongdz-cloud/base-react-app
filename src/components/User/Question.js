import React, { useState } from "react";
import _ from "lodash";
import Lightbox from "react-awesome-lightbox";
const Question = (props) => {
  const { data, index, handleHandleCheckBox } = props;

  const [isPreviewImage, setIsPreviewImage] = useState(false);

  if (_.isEmpty(data)) {
    return <></>;
  }

  const handleCheckbox = (event, aId, qId) => {
    handleHandleCheckBox(aId, qId);
  };

  return (
    <>
      {data.image ? (
        <div className="q-image">
          <img
            style={{ cursor: "pointer" }}
            className="card-img-top"
            src={`data:image/jpeg;base64,${data.image}`}
            alt="Card image cap"
            onClick={() => setIsPreviewImage(true)}
          />
          {isPreviewImage && (
            <Lightbox
              image={`data:image/jpeg;base64,${data.image}`}
              title={"Qusetion Image"}
              onClose={() => setIsPreviewImage(false)}
            ></Lightbox>
          )}
        </div>
      ) : (
        <div className="q-image"></div>
      )}

      <div className="question-title">
        Question {index + 1}: {data.questionDescription} ?
      </div>
      <div className="answer">
        {data.answer &&
          data.answer.length &&
          data.answer.map((a, index) => {
            return (
              <div key={`answer-${index}`} className="a-child">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={a.isSelected}
                    onChange={(event) =>
                      handleCheckbox(event, a.id, data.questionId)
                    }
                  />
                  <label className="form-check-label">{a.description}</label>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Question;
