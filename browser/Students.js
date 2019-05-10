import React from 'react';
import axios from 'axios';
import SingleStudent from './SingleStudent';
import { Link, Route } from 'react-router-dom';

const Students = props => {
  return (
    <div>
      <h1>Students</h1>
      <table id="students">
        <tbody>
          <tr align="left">
            <th>Name:</th>
            <th>Email:</th>
            <th>Tests:</th>
          </tr>
          {props.students.map(student => (
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
};
export default Students;
