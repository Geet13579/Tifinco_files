import React, { Component } from 'react';

class Popuppage extends Component {
  closeCustomModal = (e) => {
    this.props.onCloseModal(e);
    console.log( this.props.onCloseModal(e))
  }
  render() {
    const { id, className, header, body, footer } = this.props;
    return (
      <div id="myModal" className="modal">
        <div className="modal-content">

          <div className="modal-header">
            <span className="close" onClick={this.closeCustomModal}>&times;</span>
            <h4>Modal Header</h4>
          </div>
          
          <div className="modal-body">
            <p>Some text in the Modal Body</p>
            <p>Some other text...</p>
          </div>

          <div className="modal-footer">
            <h3>Modal Footer</h3>
          </div>

        </div>
      </div>
    );
  }
}

export default Popuppage;