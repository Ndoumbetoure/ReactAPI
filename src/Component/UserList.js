import React, {useEffect, useState} from 'react'
import User from "./User";
import axios from 'axios'

const UserList = () => {

    const [usersList, setUsersList] = useState([]);

    useEffect(() => 
    {

        axios.get('https://jsonplaceholder.typicode.com/users')
           .then((json) => {
              setUsersList(json.data);})
            .catch((error) =>  console.log(error))
        
    }, []);
    
         

  return (
    <div>

        <h2 style={{color : '#132a13', marginBottom:'90px'}}>Liste des utilisateurs</h2>
        <div>
            {
                usersList.map((item) => (<User user={item} key={item.id} />))
            }
        </div>
    </div>
  )
}

export default UserList