import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ShelfList from '../ShelfList';
import Shelf from '../Shelf';
import Bin from '../Bin';
import Create from '../Create';

export default (
  <Switch>
    <Route component={ShelfList} exact path="/" />
    <Route component={Shelf} path="/bins/:shelf" />
    <Route component={Bin} path="/bin/:shelf/:bin" />
    <Route component={Create} path="/create/" />
  </Switch>
);
