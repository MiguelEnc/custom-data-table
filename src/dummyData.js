const columns = [
  { title: "Nombre", field: "name" },
  { title: "Apellido", field: "surname" },
  { title: "Profesión", field: "profession" },
  { title: "País", field: "country" },
];

const data = [
  {
    name: "Juan",
    surname: "Perez",
    profession: "Lawyer",
    country: "Puerto Rico",
    birthYear: 1995,
    midterm: "Web and Mobile",
    longterm: "Software Architecture",
    hobbies: "Camping",
    newActivities: "Surf",
  },
  {
    name: "Carlos",
    surname: "Cruz",
    profession: "Tourism",
    country: "Costa Rica",
    birthYear: 1995,
    midterm: "Web and Mobile Development",
    longterm: "Software Architecture",
    hobbies: "Camping",
    newActivities: "Surf",
  },
  {
    name: "Miguel",
    surname: "Encarnacion",
    profession: "Software Engineer",
    country: "Dominican Republic",
    birthYear: 1995,
    midterm: "Web and Mobile",
    longterm: "Software Architecture",
    hobbies: "Camping",
    newActivities: "Surf, Kitesurf",
  },
  {
    name: "Melissa",
    surname: "Sanchez",
    profession: "Advertising",
    country: "Colombia",
    birthYear: 1995,
    midterm: "Web and Mobile Development",
    longterm: "Software Architecture",
    hobbies: "Camping",
    newActivities: "Surf",
  },
  {
    name: "Juan",
    surname: "Perez",
    profession: "Lawyer",
    country: "Puerto Rico",
    birthYear: 1995,
    midterm: "Web and Mobile",
    longterm: "Software Architecture",
    hobbies: "Camping",
    newActivities: "Surf",
  },
  {
    name: "Carlos",
    surname: "Cruz",
    profession: "Tourism",
    country: "Costa Rica",
    birthYear: 1995,
    midterm: "Web and Mobile Development",
    longterm: "Software Architecture",
    hobbies: "Camping",
    newActivities: "Surf",
  },
  {
    name: "Melissa",
    surname: "Sanchez",
    profession: "Advertising",
    country: "Colombia",
    birthYear: 1995,
    midterm: "Web and Mobile Development",
    longterm: "Software Architecture",
    hobbies: "Camping",
    newActivities: "Surf",
  },
];

const wrapperStyle = {
  backgroundColor: "#e5e5e5",
  padding: "20px 0",
  lineHeight: "2em",
};

const innerStyle = {
  backgroundColor: "#fffdfd",
  border: "1px solid #bebcbc",
  borderRadius: "5px",
  padding: "30px",
};
const expandPanelFunc = (rowData) => {
  return (
    <div style={wrapperStyle}>
      <div className="container">
        <div style={innerStyle}>
          <div className="row">
            <div className="col-md-4 col-sm-4">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <strong>Full Name:</strong>
                    </td>
                    <td>
                      {rowData.name} {rowData.surname}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Birth Year:</strong>
                    </td>
                    <td>{rowData.birthYear}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-4 col-sm-4">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <strong>Profession:</strong>
                    </td>
                    <td>{rowData.profession}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Focus:</strong>
                    </td>
                    <td>{rowData.midterm}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-md-4 col-sm-4">
              <table>
                <tbody>
                  <tr>
                    <td>
                      <strong>Hobbies:</strong>
                    </td>
                    <td>{rowData.hobbies}</td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Want to learn:</strong>
                    </td>
                    <td>{rowData.newActivities}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default {
  columns,
  data,
  expandPanelFunc,
};
