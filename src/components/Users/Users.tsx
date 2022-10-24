import React from 'react';
import User from '../User/User';

// interface IProps {
//   id: number;
//   name: string;
//   username: string;
//   phone: string;
//   email: string;
//   address: {
//     city: string;
//     geo: {
//       lat: string;
//       lng: string;
//     }
//     street: string;
//     suite: string;
//     zipcode: string; 
//   }
//   company: {
//     bs: string;
//     catchPhrase: string;
//     name: string;
//   }

// }

const Users = ({users}: any) => {
  
  return (  
     <User  user={users} />     
  )
}

export default Users;