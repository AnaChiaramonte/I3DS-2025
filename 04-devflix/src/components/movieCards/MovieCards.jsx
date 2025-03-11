import styles from './MovieCard.module.css';

const MovieCards = (props) => {
  return (
    <div className={styles.movie}>
     <div>
    <p>{props.Year}</p>
  </div>
  
<img src={props.Poster} alt="" />
<h2>{props.Type}</h2>
<h3>{props.Title}</h3>

</div>
  );
};

export default MovieCards;