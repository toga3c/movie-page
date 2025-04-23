import React from 'react'

const search = ({searchTerm, setSearchTerm}) => {
     
  return (
    <div className='search'>
        <div>
            <img src="Search.svg" alt="search"/>
            
            <input
                type="text"
                placeholder = "Search Your Movies"
                value ={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
        </div>
    </div>
  )
}

export default search 