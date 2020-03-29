import React, { lazy, Suspense, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const TimelineChallenge = lazy(() =>
  import("pages/TimelineChallenge/TimelineChallenge")
);

class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={() => <div>Loading...</div>}>
          <Switch>
            <Route
              exact
              path="/timeline-challenge"
              render={() => <TimelineChallenge />}
            />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
