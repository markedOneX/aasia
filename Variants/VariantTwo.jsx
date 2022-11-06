import { useRef, useState } from "react";
import { sampleData } from "./datafile";

export default function VariantTwo() {
  //Declarations
  const [Team, setTeam] = useState();
  const [Employees, setEmployees] = useState([]);
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
          <form onSubmit={(e) => e.preventDefault()} className="formClass">
            <input
              type="text"
              placeholder="Add Employee"
              ref={EmployeeRef}
              list="employeeDataList"
            />
            <button
              className="btnClass"
              onClick={() => {
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
              }}
            >
              Add Employee
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
