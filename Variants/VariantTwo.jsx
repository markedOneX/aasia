import { useRef, useState } from "react";
import { sampleData } from "./datafile";

export default function VariantTwo() {
  //Declarations
  //Used States to store the values of teams and employees
  const [Team, setTeam] = useState();
  const [Employees, setEmployees] = useState([]);
  //Used useRef hook to get the referance of a value from the input box
  const EmployeeRef = useRef();

  //Functions
  const handleTeamSelect = (e) => {
    switch (e.target.value) {
      case "Engineering":
        setTeam(e.target.value);
        sampleData.map((e) => {
          e.team === "Engineering" && setEmployees(e.employees);
        });
        break;

      case "Executive":
        setTeam(e.target.value);
        sampleData.map((e) => {
          e.team === "Executive" && setEmployees(e.employees);
        });
        break;

      case "Finance":
        setTeam(e.target.value);
        sampleData.map((e) => {
          e.team === "Finance" && setEmployees(e.employees);
        });
        break;

      case "Sales":
        setTeam(e.target.value);
        sampleData.map((e) => {
          e.team === "Sales" && setEmployees(e.employees);
        });
    }
  };

  const handleEntry = (e) => {
    e.preventDefault();
    let inputName = EmployeeRef.current.value;

    if (Team) {
      if (inputName) {
        setEmployees([...Employees, inputName]);
        alert("Entry Successful!");
        EmployeeRef.current.value = "";
      } else {
        alert("Please Enter Name");
      }
    } else {
      alert("Please Select Team");
    }
  };
  //Renders
  return (
    <div className="containerClass">
      <section className="modalClass">
        <div className="dropdownClasses">
          <select onChange={handleTeamSelect}>
            <option defaultValue="undefined" selected disabled>
              Select Team
            </option>
            {sampleData.map((e, i) => (
              <option key={i} value={e.team}>
                {e.team}
              </option>
            ))}
          </select>

          {/* Employee box won't show if team is not selected */}
          {/* In order to implement the filter/auto-complete functionality and keep it minimal and not use any plugin, i used <datalist> tag that comes with HTML integrated it with the logic */}
          {Employees.length !== 0 && (
            <>
              <select>
                {Employees.map((e, i) => (
                  <option key={i}>{e}</option>
                ))}
              </select>
              <datalist id="employeeDataList">
                {Employees.map((e, i) => (
                  <option key={i} value={e}>
                    {e}
                  </option>
                ))}
              </datalist>
            </>
          )}

          <form onSubmit={handleEntry} className="formClass">
            <input
              type="text"
              placeholder="Add Employee"
              ref={EmployeeRef}
              list="employeeDataList"
            />
            <button className="btnClass">Add Employee</button>
          </form>
        </div>
      </section>
    </div>
  );
}
