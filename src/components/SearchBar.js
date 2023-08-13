import React, { useState } from 'react';
import BlogAction from '../actions/Blog.Action';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const SearchBar = ({ blogs }) => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  
  // const handleSearchResults=()=>
  // {
      
  // }
  const handleSearch = async(event) => {
    setSearch(event.target.value);
// setSearch('satyam');
    // if (event.target.value !== '') {
    //   const filteredResults = blogs.filter(blog => 
    //     blog.title.toLowerCase().includes(event.target.value.toLowerCase())
    //   );
    //   setResults(filteredResults);
    // } else {
    //   setResults([]);
    if(event.target.value!='')
    {
    let payload={
      token:localStorage.getItem('token'),keyword:event.target.value
    }
   BlogAction.searchPosts(payload,(err,res)=>{

    if(err)
    {
      toast(err);
    }
    else
    {
        // toast(res.msg);
        if(res.status==200)
        {
          setResults(res.postsList);
          // toast('success');
        }
        else
        {
          toast(res.msg);
        }
    }
   })
  }
  else
  {
    setResults([]);
  }
    }
  

  return (
    <div className='search-containerr'>
      <input 
        type="text"
        placeholder="Search blogs..."
        value={search}
        onChange={handleSearch}
        className='search-bar'
      />
 <Link to={`/search/${search}`}><button  className='icon-div' onClick={()=>{setSearch('');setResults([])}}>
        <i className="fa fa-search custom-icon-size" ></i>
      </button>
      </Link>
      {results.length > 0 && (
        <div className="search-results">
          {results.map((result, index) => (
            <div key={index} className="search-result-item">
              {result.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
