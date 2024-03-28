import React from "react";

const Alert = ({ title, iconClass, LoadNo, BillTo, date }) => {
  return (
    // <div class="col mb-3">

    <div className="card rounded-2 py-2 col">
      <div className="d-flex flex-row">
        <div className="icon rounded-2 px-3 p-2 text-center">
          <div>
            <i className="fa-regular fa-user"></i>
          </div>
        </div>

        <div className="flex-grow-1 d-flex flex-column px-2">
          <div className="d-flex flex-row justify-content-between">
            <h6 className="m-0">{title}</h6>
            <p className="m-0">{date}</p>
          </div>
          <div>
            Load No : {LoadNo}, Bill To : {BillTo}
          </div>
        </div>
      </div>
      <div className="text row">
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
          libero. Ex exercitationem vitae officia, molestias nam nostrum
          perspiciatis autem.
        </p>
      </div>

      {/* <button>Left</button> */}
      <div className="text-end">
        <a href="#" className="mx-5">
          Ignore
        </a>
        <button type="button" className="btn btn-primary mx-3 resolve">
          Resolve
        </button>
      </div>
    </div>
    // </div>
  );
};

export default Alert;
