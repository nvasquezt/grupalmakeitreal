/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import './CategoriesCard.styles.scss';

function CategoriesCard(props) {
  const { imageService, nameService } = props.service;
  return (
    <section className="containerCard__cardbox">
      <img
        className="containerCard__cardbox--imageBackground"
        src={imageService}
        alt={nameService}
      />
      <h1 className="containerCard__cardbox--nameService">{nameService}</h1>
    </section>
  );
}

export default CategoriesCard;
