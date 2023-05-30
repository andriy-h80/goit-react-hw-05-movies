import { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchForm, SearchFormBtn, SearchFormLabel, SearchFormInput } from './Searchbar.styled';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
  
const Searchbar = ({ onSubmit }) => {
    const [value, setValue] = useState('');
       
    const handleChange = event => {
        setValue(event.currentTarget.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
    
        if (value.trim() === '') {
             toast('What are you searching for?');
            return;
        };
        onSubmit(value);
    }  

    return (
        <SearchForm onSubmit={handleSubmit}>
                <SearchFormInput
                    className='input'
                    type='search'
                    autoComplete='off'
                    autoFocus
                    placeholder="Let's find your favorite movie"
                    value={value}
                    onChange={handleChange}
                />
                <SearchFormBtn type='submit'>
                    <ImSearch size={20}/>
                    <SearchFormLabel>Search</SearchFormLabel>
                </SearchFormBtn>
            </SearchForm>
    );
  };
  
Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
