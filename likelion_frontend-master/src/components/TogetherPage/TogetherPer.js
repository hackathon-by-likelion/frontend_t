import React, { useState } from "react";
import "./TogetherPer.css";
import { SlArrowDown } from "react-icons/sl";
import Modal from "react-modal";
import TogetherPerChoice from "./TogetherPerChoice";

Modal.setAppElement("#root");

const TogetherPer = ({ totalPeople = 1 }) => {
  const [person, setPerson] = useState(`어른 ${totalPeople}명`);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [perMessage, setPermessage] = useState(false);

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
  const handlePerMessage = () => {
    setPermessage(!perMessage);
  };

  return (
    <div className="t_per_frame">
      <div className="t_per_info">
        <p>승객 연령 및 좌석 수</p>
        <div className="t_per_data">{person}</div>
        <div>
          <button
            className="t_per_button"
            onClick={arrowButton}
            onMouseEnter={handlePerMessage}
            onMouseLeave={handlePerMessage}
          >
            <SlArrowDown size={15} color="blue" />
            {perMessage && (
              <div className="per_message">총 인원이 1명이 맞나 확인하세요!</div>
            )}
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
        <TogetherPerChoice onSelectPerson={handlePersonSelect} />
      </Modal>
    </div>
  );
};

export default TogetherPer;
