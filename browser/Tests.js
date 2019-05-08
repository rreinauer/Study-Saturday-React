import React from 'react';

const Tests = props => {
  const tests = props.tests;
  return (
    <table>
      <tbody>
        <tr>
          <th>Subject:</th>
          <th>Grade:</th>
        </tr>
        {tests.map(test => (
          <tr key={test.id}>
            <td>{test.subject}</td>
            <td>{test.grade}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Tests;
