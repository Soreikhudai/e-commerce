import { Container } from "react-bootstrap";
import "./Section.css";
import Table from "react-bootstrap/Table";
import { TourData } from "./tourdata";

const Section = () => {
  return (
    <section style={{ minHeight: "80vh" }}>
      <h2 className="text-center mb-5 mt-2">Tours</h2>

      <Container width="60rem" className="d-flex justify-content-center">
        <Table responsive="sm">
          <tbody>
            {TourData.map((item, key) => {
              return (
                <tr key={key}>
                  <td>{item.date}</td>
                  <td>{item.place}</td>
                  <td>{item.spec_place}</td>
                  <td>
                    <button className="btn btn-outline-primary">
                      {item.button_text}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </section>
  );
};

export default Section;
