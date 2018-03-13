import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import BinHeader from '../subcomponents/BinHeader';
import Button from '../subcomponents/Button';
import '../styles/Bin.css';

class Bin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      name: 'Name Here',
      price: 0.0,
      newName: '',
      newPrice: '',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.createItem = this.createItem.bind(this);
  }

  componentDidMount() {}

  handleNameChange(value) {
    this.setState({newName: value});
  }

  handlePriceChange(value) {
    this.setState({newPrice: value});
  }

  createItem() {
    const {shelfbin} = this.props.match.params;
    const shelfid = shelfbin[0];
    const binid = shelfbin[1];
    console.log('Creating');

    const {newName, newPrice} = this.state;
    axios
      .post('http://localhost:3001/api/create', {
        shelfid,
        binid,
        name: newName,
        price: newPrice,
      })
      .then(() => this.props.history.push(`/bin/${shelfid}${binid}`))
      .catch(err => console.log(err));
  }

  render() {
    const {shelfbin} = this.props.match.params;
    return (
      <div className="bin-main">
        <BinHeader shelfid={shelfbin[0]} binid={shelfbin[1]} />
        <div className="bin-holder">
          <div className="bin-column-one" />
          <div className="bin-column-two">
            <img src="https://picsum.photos/200/200?image=0" />
          </div>
          <div className="bin-column-three">
            <div className="element-one">Name</div>
            <div className="element-two">
              <input
                className="name"
                placeholder={this.state.name}
                onChange={event => this.handleNameChange(event.target.value)}
              />
            </div>
            <div className="element-three">Price</div>
            <div className="element-four">
              <input
                className="price"
                placeholder={this.state.price}
                onChange={event => this.handlePriceChange(event.target.value)}
              />
            </div>
            <div className="form-buttons">
              <div className="edit">
                <button className="create-button" onClick={this.createItem}>
                  + Add to Inventory
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bin;
