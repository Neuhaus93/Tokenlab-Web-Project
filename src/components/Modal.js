import React from "react";
import { connect } from "react-redux";

import { deleteEvent } from "../actions";

const Modal = ({ eventId, deleteEvent }) => {
  return (
    <div
      className="modal fade"
      id={`modalCenter${eventId}`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Deletar evento</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            Tem certeza que deseja deletar esse evento?
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Fechar
            </button>
            <button
              data-dismiss="modal"
              type="button"
              className="btn btn-danger"
              onClick={() => deleteEvent(eventId)}
              // onClick={() => console.log(eventId)}
            >
              Deletar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { deleteEvent })(Modal);
