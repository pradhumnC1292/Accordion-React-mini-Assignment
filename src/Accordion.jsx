import React, { useState } from "react";
import "./Accordion.css";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={onClick}>
        <h2>{title}</h2>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && <div className="accordion-content">{content}</div>}
    </div>
  );
};

const Accordion = () => {
  const [openIndexes, setOpenIndexes] = useState([]);
  const [allowMultipleOpen, setAllowMultipleOpen] = useState(true);

  const handleToggle = (index) => {
    if (allowMultipleOpen) {
      setOpenIndexes((prevIndexes) =>
        prevIndexes.includes(index)
          ? prevIndexes.filter((i) => i !== index)
          : [...prevIndexes, index]
      );
    } else {
      setOpenIndexes((prevIndexes) =>
        prevIndexes.includes(index) ? [] : [index]
      );
    }
  };

  const accordionItems = [
    {
      title: "Do I have to allow the use of cookies?",
      content:
        "Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art.",
    },
    {
      title: "How do I change my My Page password?",
      content:
        'You can change your My Page password by going to the settings and clicking on the "Change Password" option.',
    },
    {
      title: "What is BankID?",
      content:
        "BankID is a personal electronic credential that can be used for secure identification and signing online.",
    },
    {
      title: "Whose birth number can I use?",
      content:
        "You can only use your own birth number for identification purposes.",
    },
    {
      title: "When do I receive a password ordered by letter?",
      content:
        "If you ordered a password by letter, it will typically arrive within 5-7 business days.",
    },
  ];

  return (
    <div className="accordion">
      <h1>Accordion</h1>
      <label>
        <input
          type="checkbox"
          checked={allowMultipleOpen}
          onChange={() => setAllowMultipleOpen(!allowMultipleOpen)}
        />
        Is multiple open accordion allowed?
      </label>
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndexes.includes(index)}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
