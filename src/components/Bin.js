import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import BinHeader from '../subcomponents/BinHeader';
import Button from '../subcomponents/Button';
import '../styles/Bin.css';

class Bin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contents: 10,
    };
  }

  render() {
    return (
      <div className="bin-main">
        <BinHeader
          shelfid={this.props.match.params.shelfbin[0]}
          binid={this.props.match.params.shelfbin[1]}
        />
        <div className="bin-holder">
          <div className="bin-column-one" />
          <div className="bin-column-two">
            <img src="http://lorempixel.com/200/200/business/" />
          </div>
          <div className="bin-column-three">
            <div className="element-one">Name</div>
            <div className="element-two">
              <input className="name" placeholder="Dynamic Placeholder" />
            </div>
            <div className="element-three">Price</div>
            <div className="element-four">
              <input className="price" placeholder="Dynamic Placeholder" />
            </div>
            <div className="form-buttons">
              <div className="edit">
                <button className="edit-button">Edit</button>
              </div>
              <div className="delete">
                <button className="delete-button">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bin;
