import React, { lazy, Suspense, Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const TimelineChallengeL1 = lazy(() =>
  import("pages/TimelineChallenge/TimelineChallengeL1")
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
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
