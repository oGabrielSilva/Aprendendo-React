import './styles.css';

export const Search = ({ handleChange, searchValue }) => {
    return (
        <input
            className="search-input"
            onChange={handleChange}
            value={searchValue}
            placeholder={'Type your search'}
            type="search"
        />
    );
}
