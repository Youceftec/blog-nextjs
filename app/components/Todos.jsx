"use client";

import { useState, useEffect } from "react"

export default function Todos(){

    const [todo, setTodo] = useState({});

    useEffect(() => {
        // declare the async data fetching function
        const fetchData = async () =>  {
          // get the data from the api
          const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
          // convert the data to json
          const json = await data.json();
          // set state with the result
          setTodo(json);
        }
      
        // call the function
        fetchData();
      }, [])


    return(
        <div>
                {todo.title}
        </div>
    )
}