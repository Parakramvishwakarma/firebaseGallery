import React, { useEffect, useState } from "react";
import useFireStore from "../hooks/useFireStore";
import { Button, Image, Modal, Icon } from "semantic-ui-react";
import { doc } from "firebase/firestore";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const ImageGrid: React.FC = () => {
  const { docs } = useFireStore("images");

  const [openImage, setOpenImage] = useState<Image | undefined>();
  const [modal, setModal] = useState<boolean>(false);

  const handleImageClick = (doc: Image) => {
    setOpenImage(doc);
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
    setOpenImage(undefined);
  };

  useEffect(() => {
    console.log(modal);
    console.log(docs);
  }, [modal]);

  return (
    <>
      <div className="img-grid">
        {docs &&
          docs.map((doc) => (
            <div className="img-wrap" key={doc.id}>
              <img
                src={doc.url}
                alt={doc.comment}
                onClick={() => handleImageClick(doc)}
              ></img>
            </div>
          ))}
        {openImage && (
          <Modal
            onClose={handleModalClose}
            onOpen={() => setModal(true)}
            open={modal}
          >
            <Modal.Header>Image</Modal.Header>
            <Modal.Content image>
              <Image size="massive" src={openImage.url} wrapped />
            </Modal.Content>
            <div style={{ display: "flex", padding: "0 20px 20px 20px" }}>
              <div style={{ width: "80%" }}>
                <h3>Comments:</h3>
                <span>Hello this ios the commemnt in he imqage lesgo</span>
              </div>
              <div
                style={{
                  width: "20%",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex"
                }}
              >
                {openImage.liked ?       
                <IconButton aria-label="Liked" color={'error'} size={"large"} onClick={() => {}}>
                  <FavoriteIcon />
                </IconButton> : 
                  <IconButton aria-label="Like" color={'error'} size={"large"} onClick={() => {}}>
                  <FavoriteBorderIcon />
                </IconButton>
                }
          
              </div>
            </div>
            <Modal.Actions>
              <Button onClick={() => setModal(false)}>Close</Button>
              <Button negative> Delete</Button>
            </Modal.Actions>
          </Modal>
        )}
      </div>
    </>
  );
};

export default ImageGrid;
