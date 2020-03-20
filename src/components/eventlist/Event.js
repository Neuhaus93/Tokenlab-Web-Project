import React from "react";
import ReactTooltip from "react-tooltip";

import { Link } from "react-router-dom";

class Event extends React.Component {
  eventTag = () => {
    switch (this.props.category) {
      case "Trabalho":
        return "fas fa-briefcase";

      case "Lazer":
        return "far fa-grin-beam";

      case "Educação":
        return "fas fa-book";

      default:
        return "far fa-calendar-alt";
    }
  };

  eventDescription = () => (
    <div className="col-md-5">
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" data-tip={this.props.category}>
            <ReactTooltip place="left" effect="solid" />
            <i className={`${this.eventTag()}`}></i>
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          value={this.props.description}
          readOnly
        />
      </div>
    </div>
  );

  eventDate = () => (
    <div className="mr-auto">
      <input
        type="date"
        className="form-control"
        id="eventDate"
        name="eventDate"
        value={this.props.date}
        readOnly
      />
    </div>
  );

  eventTimeStart = () => (
    <div className="mr-auto">
      <input
        type="time"
        className="form-control"
        id="startTime"
        value={this.props.startTime}
        readOnly
      />
    </div>
  );

  eventTimeEnd = () => (
    <div className="mr-auto">
      <input
        type="time"
        className="form-control"
        id="endTime"
        value={this.props.endTime}
        readOnly
      />
    </div>
  );

  eventEditAndDelete = () => {
    // console.log(this.props.id);

    return (
      <div className="ml-auto">
        <div className="btn-group" role="group">
          <Link
            onClick={() => console.log(this.props)}
            // to={`/events/edit/${this.props.id}`}
            className="btn btn-secondary"
          >
            <i className="fas fa-edit mr-2"></i>
            Editar
          </Link>
          <button
            type="button"
            className="btn btn-dark"
            data-toggle="modal"
            data-target="#modalCenter"
          >
            <i className="fas fa-trash-alt mr-2"></i>
            Deletar
          </button>

          {/* <!-- Modal --> */}
          <div
            className="modal fade"
            id="modalCenter"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalCenterTitle"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Deletar evento?</h5>
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
                    // onClick={this.props.onDeleteClick}
                    onClick={() => console.log(this.props)}
                  >
                    Deletar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="d-flex flex-wrap mb-2">
        {this.eventDescription()}
        {this.eventDate()}
        {this.eventTimeStart()}
        {this.eventTimeEnd()}
        {this.eventEditAndDelete()}
      </div>
    );
  }
}

export default Event;
