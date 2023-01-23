import { useState } from "react";
import User from "../User";


function App() {
  const defaultUsers=[
    {id: 1, name: 'Bred', lastname: 'Davis', age: 32, employee: 'Java Developer'},
    {id: 2, name: 'Kamilla', lastname: 'Miller', age: 36, employee: 'Project Manager'},
    {id: 3, name: 'Vanessa', lastname: 'Jones', age: 31, employee: 'DevOps Engineer'},
    {id: 4, name: 'Harry', lastname: 'Brown', age: 28, employee: 'Data Engineer'},
    {id: 5, name: 'Norman', lastname: 'Evans', age: 38, employee: 'Web Developer'}
]

const [users, setUsers] = useState(defaultUsers);

const deleteUser = (delId) => {
  const newArr = users.filter(({id}) => id !== delId);
  setUsers(newArr);
}
  return (
    <div>
      {
      users.map(user => <User key={user.id} {...user} deleteUser={deleteUser}/>)
      }
    </div>
  );
}

export default App;
