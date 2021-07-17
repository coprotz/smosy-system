import './searchform.css'
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';

const SearchForm = ( placeholder ) => {
  return (
    <form action="" className="searchbar">
        <button className="btn-search"><SearchIcon className="btnIcon"/></button>
        <input type="text" {...placeholder} className="inputType"/>
          
          
    </form>
  )
}

export default SearchForm

SearchForm.propTypes = {
    placeholder: PropTypes.string,
}
