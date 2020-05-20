import React, { useState } from "react";
import "./App.css";

import { pieces } from "./data";
import Tile from "./components/tile";
import { Col, Container, Row, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import _ from "lodash";
import FadeIn from "react-fade-in";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const groupedPieces = _.groupBy(
    pieces.filter(
      (p) =>
        p.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.title.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    (p) => p.category
  );
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          paddingTop: 20,
          fontWeight: "bold",
        }}
      >
        Welcome to
        <br />
        Galería Paloma
      </h1>
      <FadeIn>
        <h4 style={{ textAlign: "center", paddingBottom: 20 }}>
          Email us with inquiries at
          <br />
          <a href="mailto:galeriapaloma@aol.com" style={{ color: "#222" }}>
            <em>galeriapaloma@aol.com</em>
          </a>
        </h4>
      </FadeIn>
      <Form style={{ width: "100%", display: "flex" }}>
        <Form.Control
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for title or artist"
          size="lg"
          type="text"
          style={{ margin: 12 }}
        />
      </Form>
      <Container fluid>
        {Object.keys(groupedPieces)
          .sort((c1, c2) => c1.localeCompare(c2))
          .map((category) => {
            return (
              <div key={category}>
                <h2
                  style={{
                    borderTop: "lightgrey 1px solid",
                    padding: 20,
                    textAlign: "center",
                  }}
                >
                  {category}
                </h2>
                <Row style={{ marginBottom: 20 }}>
                  {groupedPieces[category]
                    .sort((p1, p2) => {
                      if (p1.artist === p2.artist) {
                        return p1.title.localeCompare(p2.title);
                      }
                      return p1.artist.localeCompare(p2.artist);
                    })
                    .map((pieceData) => (
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
