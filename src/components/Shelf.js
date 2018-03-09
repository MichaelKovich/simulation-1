import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ShelfHeader from '../subcomponents/ShelfHeader';
import Button from '../subcomponents/Button';
import '../styles/ShelfList.css';

class Shelf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shelfID: 0,
    };
  }

  componentWillMount() {
    this.setState({shelfID: this.props.match.params.shelf});
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
                <Button title="Bin 1" />
              </div>
            </Link>
            <Link to={`/bin/${this.state.shelfID}2`}>
              <div className="bin-button">
                <Button title="Bin 2" />
              </div>
            </Link>
            <Link to={`/bin/${this.state.shelfID}3`}>
              <div className="bin-button">
                <Button title="Bin 3" />
              </div>
            </Link>
            <Link to={`/bin/${this.state.shelfID}4`}>
              <div className="bin-button">
                <Button title="Bin 4" />
              </div>
            </Link>
            <Link to={`/bin/${this.state.shelfID}5`}>
              <div className="bin-button">
                <Button title="Bin 5" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Shelf;
