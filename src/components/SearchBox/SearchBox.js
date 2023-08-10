import "./SearchBox.css";

const SearchBox = (props) => {
  return (
    <div>
      <input
        className="movieInput"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
        placeholder="Search movie..."
      />
    </div>
  );
};

export default SearchBox;
