import React from 'react';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { startIPCEventListener } from '../event/ipc-event-listener';
import configureStore from '../redux/stores';

const store = configureStore();
// Import IPC event listener
startIPCEventListener(store);

const Index = (props) => {
  const match = props.match;
  const AsyncAppFrame = new Loadable({
    loader: () => import('./AppFrame'),
    loading: () => [],
  });
  return (
    <Provider store={store}>
      <React.Fragment>
        <Switch>
          <Route exact path={match.url} render={() => <AsyncAppFrame />} />
        </Switch>
      </React.Fragment>
    </Provider>
  );
};

export default Index;
