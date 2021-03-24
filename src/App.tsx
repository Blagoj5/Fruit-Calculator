import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { Spinner } from './components/UI/Spinner';
import { Layout } from './hoc/Layout';
import Index from './pages/Index';

const Calculator = React.lazy(() => {
  return import('./pages/Calculator');
});

const About = React.lazy(() => {
  return import('./pages/About');
});

const Me = React.lazy(() => {
  return import('./pages/Me');
});

function App() {
  const routes = (
    <Switch>
      <Route path='/' exact component={Index} />
      <Route path='/calculator' component={Calculator} />
      <Route path='/me' component={Me} />
      <Route path='/about' component={About} />
      {/* <Route component={Index} /> */}
      <Redirect to='/' />
    </Switch>
  );
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>{routes}</Suspense>
    </Layout>
  );
}

export default App;
