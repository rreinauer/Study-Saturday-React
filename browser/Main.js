import React from 'react';
import axios from 'axios';
import Students from './Students';
import SingleStudent from './SingleStudent';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [],
      tests: [],
    };
  }
  async componentDidMount() {
    const [students, test] = await Promise.all([
      axios.get(`/student/`),
      axios.get(`/test`),
    ]);
    this.setState({
      students: students.data,
      tests: test.data,
    });
  }

  render() {
    console.log(this.state);
    return (
      <Router>
        <Route
          path="/"
          render={() => <Students students={this.state.students} />}
        />
        <Route
          path="/:studentId"
          render={routeProps => (
            <SingleStudent
              students={this.state.students}
              tests={this.state.tests}
              {...routeProps}
            />
          )}
        />
      </Router>
    );
  }
}
