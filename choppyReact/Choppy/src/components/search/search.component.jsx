import PropTypes from 'prop-types'; // Import PropTypes
import './search.styles.css';

const Search = ({ onClose }) => {
  return (
    <div className="search" id="search">
      <form action="" className="search__form">
        <i className="ri-search-line search__icon"></i>
        <input type="search" placeholder="What are you looking for?" className="search__input" />
      </form>
      <i className="ri-close-line search__close" id="search-close" onClick={onClose}></i>
    </div>
  );
};

// Add prop type validation
Search.propTypes = {
  onClose: PropTypes.func.isRequired, // onClose should be a function and required
};

export default Search;
