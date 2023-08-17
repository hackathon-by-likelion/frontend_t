import React, { useState } from "react";
import "./ReservePer.css";
import { SlArrowDown } from "react-icons/sl";
import Modal from "react-modal";
import ReservePerChoice from "./ReservePerChoice";

Modal.setAppElement("#root");

const ReservePer = ({totalPeople = 1}) => {
  const [person, setPerson] = useState(`어른 ${totalPeople}명`);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePersonSelect = (selectedPerson) => {
    setPerson(selectedPerson);
    closeModal();
  };

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const arrowButton = () => {
    openModal();
    handleToggle();
  };

  return (
    <div className="per_frame">
      <div className="per_info">
        <p>승객 연령 및 좌석 수</p>
        <div className="per_data">{person}</div>
        <div>
          <button className="per_button" onClick={arrowButton}>
            <SlArrowDown size={15} color="blue" />
          </button>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="인원수 선택"
        className="per_modal-content"
        overlayClassName="per_modal-overlay"
      >
        <ReservePerChoice onSelectPerson={handlePersonSelect}/>
      </Modal>
    </div>
  );
};

export default ReservePer;
