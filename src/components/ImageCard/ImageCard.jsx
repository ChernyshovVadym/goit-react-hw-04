import css from "./ImageCard.module.css";

const ImageCard = ({ image, openModal }) => {
  return (
    <div className={css.big}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={css.img}
        onClick={() => openModal(image.urls.regular, image.alt_description)}
      />
    </div>
  );
};

export default ImageCard;
