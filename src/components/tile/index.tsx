import React, { FC, useState } from "react";

import { Badge, Card, Image, Modal } from "react-bootstrap";
import { IPieceData } from "./../../data";

const Tile: FC<IPieceData> = ({
  title,
  filename,
  height,
  width,
  notes,
  artist,
  price,
  isSold,
}) => {
  const [zoomVisibility, setZoomVisibility] = useState<boolean>(false);

  return (
    <>
      <Card style={{ marginBottom: "20px" }}>
        <Card.Img
          onClick={() => setZoomVisibility(true)}
          variant="top"
          src={`/galeria_paloma/inventory/${filename}`}
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
          <Card.Text style={{ textAlign: "right" }}>
            {!isSold ? `$ ${price}` : <Badge variant="danger">VENDIDO</Badge>}
          </Card.Text>
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
            <Image src={`/galeria_paloma/inventory/${filename}`} fluid />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default Tile;
