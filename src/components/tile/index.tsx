import React, { FC, useState } from "react";

import { Card, Image, Modal } from "react-bootstrap";
import { IPieceData } from "./../../data";

import { priceRangeMap } from "../../data";

const Tile: FC<IPieceData> = ({
  title,
  filename,
  height,
  width,
  notes,
  artist,
  priceRangeKey
}) => {
  const [zoomVisibility, setZoomVisibility] = useState<boolean>(false);

  const priceRange = priceRangeMap[priceRangeKey];
  const priceLine = `$${priceRange.low} ${
    priceRange.high ? ` - $${priceRange.high}` : "+"
  }`;

  return (
    <>
      <Card style={{ marginBottom: "20px" }}>
        <Card.Img
          onClick={() => setZoomVisibility(true)}
          variant="top"
          src={`/inventory/${filename}`}
          width="100%"
          height="250rem"
          style={{ objectFit: "cover", cursor: "pointer" }}
        />
        <Card.Body>
          <Card.Title>
            <strong>{title}</strong>
          </Card.Title>
          <Card.Text>
            by {artist}
            <br />
            <em>
              {width} in. by {height} in.
            </em>
            <br />
            {!!notes && <>({notes})</>}
          </Card.Text>
          <Card.Text style={{ textAlign: "right" }}>{priceLine}</Card.Text>
        </Card.Body>
      </Card>
      {zoomVisibility && (
        <Modal
          centered
          show={zoomVisibility}
          size="xl"
          onHide={() => setZoomVisibility(false)}
        >
          <Modal.Body style={{ textAlign: "center" }}>
            <Image src={`/inventory/${filename}`} fluid />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default Tile;
