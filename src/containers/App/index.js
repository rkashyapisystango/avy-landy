import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { interceptor } from 'utils/interceptor';
import HomeContainer from 'containers/Home';
import LiveMeet from 'containers/LiveMeet';

export default function App() {
  interceptor()
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route exact path="/meet/:id" component={LiveMeet} />
      </Switch>
    </Fragment>
  )
}
