import React from 'react';
import axios from 'axios';
import SingleStudent from './SingleStudent';
import { Link, Route } from 'react-router-dom';

export default class Students extends React.Component {
  constructor() {
    super();
    this.state = {
      students: [],
    };
  }
  async componentDidMount() {
    const { data } = await axios.get('../student');
    console.log(data);
    this.setState({
      students: data,
    });
  }
  render() {
    return (
      <div>
        <h1>Students</h1>
        <table>
          <tbody>
            <tr>
              <th>Name:</th>
              <th>Email:</th>
              <th>Tests:</th>
            </tr>
            {this.state.students.map(student => (
              <tr key={student.id}>
                <td>{student.fullName}</td>
                <td>{student.email}</td>
                <td>
                  <Link to={`/${student.id}`}>Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
