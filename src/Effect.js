import React from 'react'
import {useEffect,useState} from 'react'
function ExampleComponent()
{
  const [data,setData]=useState(null);
    useEffect()=>
    {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
    }
    return (
  <div>
    {data?
    (<p>Data:{JSON.stringify(data)}</p>)
    :(<p>Loading...</p>)
    }
  </div>
  )
}
