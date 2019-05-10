import React from 'react';
import Tests from './Tests';
import Students from './Students';
import { Link } from 'react-router-dom';

const SingleStudent = props => {
  const students = props.students;
  const studentId = props.match.params.studentId;
  const tests = props.tests;
  const student = students.filter(student => student.id == studentId)[0];
  const studentTests = tests.filter(test => test.student.id == studentId);
  console.log(student.fullName);

  return (
    <div>
      <h3>{student.fullName}</h3>
      <Tests tests={studentTests} />
    </div>
  );
};

export default SingleStudent;
