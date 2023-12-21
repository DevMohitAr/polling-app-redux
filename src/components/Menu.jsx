import React from 'react'
import { Link } from 'react-router-dom'
export default function Menu() {
  return (
    <>
      <ul className="bg-sky-100  text-slate-900 flex justify-around p-4 text-lg font-semibold">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/poll">Add a Poll</Link>
        </li>
      </ul>
     
    </>
  );
}
