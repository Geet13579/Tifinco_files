import React from "react";
const BookList = props => {
  return props.bookDetails.map((val, idx) => {
    let name = `name-${idx}`,
      author = `author-${idx}`,
      dateOfPublish = `dateOfPublish-${idx}`,
      type = `type-${idx}`,
      price = `price-${idx}`;
    return (
      <div className="form-row" key={val.index}>
        <div className="col">
          <label>Name</label>
          <input
            type="text"
            className="form-control required"
            placeholder="Name"
            name="name"
            data-id={idx}
            id={name}
          />
        </div>
        <div className="col">
          <label>Author</label>
          <input
            type="text"
            className="form-control required"
            placeholder="Author"
            name="author"
            id={author}
            data-id={idx}
          />
        </div>
        <div className="col">
          <label>Type</label>
          <select className="form-control" name="type" id={type} data-id={idx}>
            <option>Select</option>
            <option>Biography</option>
            <option>Cooking</option>
            <option>Computer Programming</option>
            <option>Dictionary</option>
            <option>Fiction</option>
            <option>Horror</option>
            <option>Journalism</option>
          </select>
        </div>
        <div className="col">
          <label>Date of Publish</label>
          <input
            type="date"
            className="form-control"
            placeholder="Enter Date"
            name="dateOfPublish"
            id={dateOfPublish}
            data-id={idx}
          />
        </div>
        <div className="col">
          <label>Price</label>
          <input
            type="text"
            className="form-control"
            placeholder="Price"
            name="price"
            id={price}
            data-id={idx}
          />
        </div>
        <div className="col p-4">
          {idx === 0 ? (
            <button
              onClick={() => props.add()}
              type="button"
              className="btn btn-primary text-center"
            >
              <i className="fa fa-plus-circle" aria-hidden="true" />
            </button>
          ) : (
            <button
              className="btn btn-danger"
              onClick={() => props.delete(val)}
            >
              <i className="fa fa-minus" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>
    );
  });
};
export default BookList;
