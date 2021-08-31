import PropTypes from "prop-types";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Form, Input,  Button } from "./SearchForm.styles";
 import { GiPopcorn } from "react-icons/gi";

const SearchForm = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.elements.searchQuery.value.trim() === "") {
    toast.info('Please, enter query!');
      return
    }
    onSearch(e.target.elements.searchQuery.value.toLowerCase().trim());
    e.target.elements.searchQuery.value = "";
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="searchQuery"
        id="movieSearch"
        placeholder="Search movies"
        autoComplete="off"
      />
      <Button type="submit" >
          <GiPopcorn />
      </Button>
    </Form>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;