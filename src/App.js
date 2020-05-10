import React from "react";
import "./App.css";

import { pieces } from "./data";
import Tile from "./components/tile";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import _ from "lodash";

function App() {
  const groupedPieces = _.groupBy(pieces, p => p.category);
  return (
    <>
      <h1 style={{ textAlign: "center", paddingTop: 20 }}>
        Welcome to Galeria Paloma
      </h1>
      <p style={{ textAlign: "center", paddingBottom: 20 }}>
        Email us with inquiries at{" "}
        <a href="mailto:galeriapaloma@aol.com" style={{ color: "#222" }}>
          <em>galeriapaloma@aol.com</em>
        </a>
      </p>
      <Container fluid>
        {Object.keys(groupedPieces)
          .sort((c1, c2) => c1.localeCompare(c2))
          .map(category => {
            return (
              <div key={category}>
                <h2
                  style={{
                    borderTop: "lightgrey 1px solid",
                    padding: 20,
                    textAlign: "center"
                  }}
                >
                  {category}
                </h2>
                <Row style={{ marginBottom: 20 }}>
                  {groupedPieces[category]
                    .sort((p1, p2) => p1.title.localeCompare(p2.title))
                    .map(pieceData => (
                      <Col
                        key={pieceData.title}
                        md={4}
                        sm={6}
                        xs={12}
                        lg={3}
                        xl={2}
                      >
                        <Tile {...pieceData} />
                      </Col>
                    ))}
                </Row>
              </div>
            );
          })}
      </Container>
    </>
  );
}

export default App;
