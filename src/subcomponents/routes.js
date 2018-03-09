import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ShelfList from '../components/ShelfList';
import Shelf from '../components/Shelf';
import Bin from '../components/Bin';
import Create from '../components/Create';

export default (
  <Switch>
    <Route component={ShelfList} exact path="/" />
    <Route path="/bins/:shelf" render={props => <Shelf {...props} />} />
    <Route path="/bin/:shelfbin" render={props => <Bin {...props} />} />
    <Route path="/create/:shelfbin" render={props => <Create {...props} />} />
  </Switch>
);
