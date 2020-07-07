import React from 'react';
import './index.scss';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Money from './views/Money';
import Statistics from './views/Statistics';
import Tags from './views/Tags';
import NoMatch from './views/NoMatch';
import {Tag} from './views/Tag';


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/tags">
          <Tags/>
        </Route>
        {/*:tag意思是匹配任意除/的东西*/}
        <Route exact path="/tags/:id">
          <Tag/>
        </Route>
        <Route exact path="/money">
          <Money/>
        </Route>
        <Route exact path="/statistics">
          <Statistics/>
        </Route>
        <Redirect exact from="/" to="money"></Redirect>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
