import type { Component } from 'solid-js';
import { Router, Route } from '@solidjs/router';
import Home from './pages/Home';
import ProjectsPage from './pages/Projects';

const App: Component = () => {
  return (
    <Router>
      <Route>
        <Route path="/" component={Home} />
        <Route path="/projects" component={ProjectsPage} />
      </Route>
    </Router>
  );
};

export default App;
