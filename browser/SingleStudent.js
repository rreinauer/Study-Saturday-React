import React from 'react';
import axios from 'axios';
import Tests from './Tests';
import { Link } from 'react-router-dom';

export default class SingleStudent extends React.Component {
  constructor() {
    super();
    this.state = {
      student: {},
      tests: [],
    };
  }
  async componentDidMount() {
    const studentId = this.props.match.params.studentId;
    console.log('student Id: ', studentId);
    const [student, test] = await Promise.all([
      axios.get(`/student/${studentId}`),
      axios.get(`/test`),
    ]);
    const studentTests = test.data.filter(el => el.student.id == studentId);
    this.setState({
      student: student.data,
      tests: studentTests,
    });
  }
  render() {
    return (
      <div>
        <h2>{this.state.student.fullName}</h2>
        <Tests tests={this.state.tests} />
      </div>
    );
  }
}
