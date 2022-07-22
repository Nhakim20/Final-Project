import React, { useState, useEffect, useContext } from 'react'
import axios from'axios'
import {Form} from 'react-bootstrap'
import ReactLoading from 'react-loading';
import CardComponent from '../../components/card/card-component'
import { Link } from 'react-router-dom'
import { DataContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const search = useContext(DataContext)
  const { dataSearch } = search
  // const [value, setValue] = useState("");
  // const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  return (
    
    <div>
    <h1> result</h1>
    {isLoading ? ( <ReactLoading type="spinningBubbles" color="#0D6EFD" className='m-auto mt-5'/> ): 
    (
     <div className="d-flex flex-wrap">
        {dataSearch. map((product) => (
          <Link to={`/detail-product/${product.id}`}
          className="text-decoration-none"
          >
          <CardComponent
          tittle={product.name} 
          price={product.price}
          image={product.image}
            />
          </Link>
        ))}
    </div>
    )}    
  </div>
  // </>
  )
}

export default SearchBar
