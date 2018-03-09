import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import ShelfHeader from '../subcomponents/ShelfHeader';
import Button from '../subcomponents/Button';
import '../styles/ShelfList.css';

class Shelf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shelfID: 0,
      bin1: '+ Add Inventory to Bin',
      bin2: '+ Add Inventory to Bin',
      bin3: '+ Add Inventory to Bin',
      bin4: '+ Add Inventory to Bin',
      bin5: '+ Add Inventory to Bin',
    };
  }

  componentWillMount() {
    this.setState({shelfID: this.props.match.params.shelf});
  }

  componentDidMount() {
    const arr = [];

    axios
      .get(`http://localhost:3001/api/getProducts/${this.props.match.params.shelf}`)
      .then((res) => {
        console.log(res);
        if (res.data.length < 1) {
        } else {
          res.data.forEach((element) => {
            arr.push(element.binid);
          });

          for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 1) this.setState({bin1: 'Bin 1'});
            if (arr[i] === 2) this.setState({bin2: 'Bin 2'});
            if (arr[i] === 3) this.setState({bin3: 'Bin 3'});
            if (arr[i] === 4) this.setState({bin4: 'Bin 4'});
            if (arr[i] === 5) this.setState({bin5: 'Bin 5'});
          }
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <ShelfHeader name={this.props.match.params.shelf} />
        <div className="shelf-main-content">
          <div className="shelf-left-column" />
          <div className="shelf-right-column">
            <Link to={`/bin/${this.state.shelfID}1`}>
              <div className="bin-button">
                <Button title={this.state.bin1} />
              </div>
            </Link>
            <Link to={`/bin/${this.state.shelfID}2`}>
              <div className="bin-button">
                <Button title={this.state.bin2} />
              </div>
            </Link>
            <Link to={`/bin/${this.state.shelfID}3`}>
              <div className="bin-button">
                <Button title={this.state.bin3} />
              </div>
            </Link>
            <Link to={`/bin/${this.state.shelfID}4`}>
              <div className="bin-button">
                <Button title={this.state.bin4} />
              </div>
            </Link>
            <Link to={`/bin/${this.state.shelfID}5`}>
              <div className="bin-button">
                <Button title={this.state.bin5} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Shelf;
