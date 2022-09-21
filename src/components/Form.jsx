import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Form() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [purpose, setPurpose] = useState("");
  const [date, setDate] = useState("");
  const [visitors, setVisitors] = useState([
    {
      id: 1,
      lastname: "John",
      firstname: "Ritchie",
      purpose: "Payment",
      date: "05-20-22",
    },
    {
      id: 2,
      lastname: "Juan",
      firstname: "Dela Cruz",
      purpose: "Payment",
      date: "03-10-22",
    },
   
  ]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    // visitors.splice(index, 1);
    // console.log("delete btn");
    console.log(index);
    history("/");
  };

  const history = useNavigate();

  const addVisitor = () => {
    const newPeople = {
      lastname: lastname,
      firstname: firstname,
      purpose: purpose,
      date: date,
    };

    setVisitors((prev) => [...prev, newPeople]);
    console.log(visitors);
  };

  const handleDelete = (id) => {
    //getting the index of the visitor
    let index = visitors
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    visitors.splice(index, 1);
    console.log(index);
    console.log("delete btn");
    history("/");
  };
  const handleEdit = (id) => {};

  return (
    <div className="container m-4 p-2 d-flex justify-content-between">
      <div className="form">
        <h1>Visitor Entry</h1>
        <label htmlFor="lastname">Lastname</label>
        <br />
        <input
          type="text"
          name="lastname"
          onChange={(e) => {
            setLastname(e.target.value);
          }}
          className="w-100"
        />
        <br />
        <label htmlFor="firstname">Firstname</label>
        <br />
        <input
          type="text"
          name="firstname"
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
          className="w-100"
        />
        <br />
        <label htmlFor="purpose">Purpose</label>
        <br />
        <input
          type="text"
          name="purpose"
          onChange={(e) => {
            setPurpose(e.target.value);
          }}
          className="w-100"
        />
        <br />
        <label htmlFor="date">Date</label>
        <br />
        <input
          type="date"
          name="purpose"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          className="w-100"
        />
        <br />
        <button
          onClick={addVisitor}
          className="btn btn-success btn-sm mt-3 w-100"
        >
          Submit
        </button>
      </div>
      <div className="table w-175">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Lastname</th>
              <th scope="col">Firstname</th>
              <th scope="col">Purpose</th>
              <th scope="col">Date</th>
              <th scope="col"></th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {visitors.map((visitor, index) => {
              return (
                <tr key={index}>
                  <td>{visitor.lastname}</td>
                  <td>{visitor.firstname}</td>
                  <td>{visitor.purpose}</td>
                  <td>{visitor.date}</td>
                  <td>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm bg-danger m-1 w-100 text-white"
                      onClick={() => handleDelete(visitor.id)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Form;
