import React from "react";
import Event from "./Event";
import { Link } from "react-router-dom";

const EventList = ({ events }) => {
  const titleMsg = `${
    events.length === 0
      ? "Você ainda não possui nenhum evento criado"
      : "Lista de eventos"
  }`;

  const renderIfEmpty = () => (
    <>
      <h5 className="card-title text-center mb-3">{titleMsg}</h5>
      <p
        style={{ display: `${events.length === 0 ? "" : "none"}` }}
        className="card-text text-center mb-2"
      >
        Crie o seu primeiro evento :)
      </p>
    </>
  );

  const renderCard = () => (
    <div className="card text-center">
      <div className="card-body">
        {renderIfEmpty()}

        {events.map(event => (
          <Event key={event.id} {...event} />
        ))}

        <Link to="/events/new" className="btn btn-primary mt-4">
          Criar evento
        </Link>
      </div>
    </div>
  );

  return <div>{renderCard()}</div>;
};

export default EventList;
