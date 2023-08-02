import './search-box.styles.css'

const SearchBox = (props) => {
    const { className, placeholder, onChangeHandler } = props;
    return (
        <input
            className={`search-box ${className}`}
            placeholder={placeholder}
            type='search'
            onChange={onChangeHandler}
        />
    );
}

export default SearchBox;
