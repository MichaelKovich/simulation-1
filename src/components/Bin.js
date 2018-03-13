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
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  componentDidMount() {
    const {shelfbin} = this.props.match.params;

    let s,
      b,
      a;

    s = shelfbin[0];
    b = shelfbin[1];

    axios
      .get(`http://localhost:3001/api/getProducts/${s}`)
      .then((res) => {
        a = res.data;
        const f = [];
        a.forEach((element) => {
          if (element.binid === parseInt(b, 10)) {
            f.push(element);
          }
        });
        this.setState({id: f[0].id, name: f[0].productname, price: f[0].price});
      })
      .catch(err => this.props.history.push(`/create/${s}${b}`));
  }

  handleNameChange(value) {
    this.setState({newName: value});
  }

  handlePriceChange(value) {
    this.setState({newPrice: value});
  }

  updateItem() {
    const {shelfbin} = this.props.match.params;
    const shelfid = shelfbin[0];
    const binid = shelfbin[1];

    const {newName, newPrice} = this.state;
    axios
      .put('http://localhost:3001/api/update', {
        shelfid,
        binid,
        name: newName,
        price: newPrice,
      })
      .then()
      .catch(err => console.log(err));
  }

  deleteItem() {
    const {shelfbin} = this.props.match.params;
    const shelfid = shelfbin[0];
    const binid = shelfbin[1];

    axios
      .delete('http://localhost:3001/api/delete', {params: {shelfid, binid}})
      .then((req, res) => {
        this.props.history.push('/bins/A');
      })
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
                <button className="edit-button" onClick={this.updateItem}>
                  Edit
                </button>
              </div>
              <div className="delete">
                <button className="delete-button" onClick={this.deleteItem}>
                  Delete
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
