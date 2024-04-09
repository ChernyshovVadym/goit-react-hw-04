const ImageCard = ({ image, openModal }) => {
  return (
    <div>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() => openModal(image.urls.regular, image.alt_description)}
      />
    </div>
  );
};

export default ImageCard;
