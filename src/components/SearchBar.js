import React, { useState } from 'react';

const SearchBar = ({ blogs }) => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = event => {
    setSearch(event.target.value);
// setSearch('satyam');
    // if (event.target.value !== '') {
    //   const filteredResults = blogs.filter(blog => 
    //     blog.title.toLowerCase().includes(event.target.value.toLowerCase())
    //   );
    //   setResults(filteredResults);
    // } else {
    //   setResults([]);
if(event.target.value=='satyam')
{
    setResults([{blog:'satyam'},{blog:'satyam'},{blog:'satyam'},{blog:'satyam'},{blog:'satyam'},{blog:'satyam'},{blog:'satyam'},{blog:'satyam'},{blog:'satyam'}]);
}
else
{
    setResults([]);
}
    }
  

  return (
    <div>
      <input 
        type="text"
        placeholder="Search blogs..."
        value={search}
        onChange={handleSearch}
        className='search-bar'
      />

      {results.length > 0 && (
        <div className="search-results">
          {results.map((result, index) => (
            <div key={index} className="search-result-item">
              {result.blog}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
