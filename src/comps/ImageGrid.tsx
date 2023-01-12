import React, { useEffect, useState } from "react";
import useFireStore from "../hooks/useFireStore";
import { Button, Image, Modal, Icon } from "semantic-ui-react";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import ImageCard from "./ImageCard";
import { useData } from "../context/DataProvider";
import ImageModal from "./ImageModal";

const ImageGrid: React.FC = () => {
  const { viewModal, setViewModal, openImage, setOpenImage } = useData();
  const { docs } = useFireStore("images");

  useEffect(() => {
    console.log(docs);
  });

  const handleModalClose = () => {
    setViewModal(false);
    setOpenImage(undefined);
  };

  return (
    <>
      <div className="img-grid">
        {docs && docs.map((doc) => <ImageCard image={doc} />)}
        <ImageModal />
      </div>
    </>
  );
};

export default ImageGrid;
