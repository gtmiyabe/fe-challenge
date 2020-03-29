import React, { lazy, Suspense, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const TimelineChallengeL1 = lazy(() =>
  import("pages/TimelineChallengeL1/TimelineChallengeL1")
);

const TimelineChallengeL2 = lazy(() =>
  import("pages/TimelineChallengeL2/TimelineChallengeL2")
);

class App extends Component {
  render() {
    return (
      <Router>
        <Suspense fallback={() => <div>Loading...</div>}>
          <Switch>
            <Route
              exact
              path="/timeline-challenge-l1"
              render={() => <TimelineChallengeL1 />}
            />
            <Route
              exact
              path="/timeline-challenge-l2"
              render={() => <TimelineChallengeL2 />}
            />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
