import React from "react";
import '../styles/components/solicitationCard.css'

interface ISolicitationCard {
  type: string
  student: string,
  status: string
}

function SolicitationCard({ status, student, type }: ISolicitationCard) {
  return (
    <div className="solicitation-card-container">
      <h4>{type}</h4>
      <p>Aluno: {student}</p>
      <p>Status: {status}</p>
      {/* <p>Pai</p>
      <p>Mae</p>
      <p>Ano de entrada</p>
      <p>Ano de saída</p> */}
    </div>
  );
};

export default SolicitationCard;