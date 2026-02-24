import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { id: 1, name: "Alice Johnson", subject: "Mathematics", grade: 92, passed: true },
        { id: 2, name: "Bob Smith", subject: "Physics", grade: 78, passed: true },
        { id: 3, name: "Charlie Davis", subject: "Chemistry", grade: 45, passed: false },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>Student Grade Tracker</h1>
          <p>Class Component Design</p>
        </header>

        <div className="cards">
          {this.state.students.map((student) => (
            <div key={student.id} className="card">
              <h3>{student.name}</h3>
              <p>{student.subject}</p>
              <p>Grade: {student.grade}</p>
              <span className={student.passed ? "pass" : "fail"}>
                {student.passed ? "PASS" : "FAIL"}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;

