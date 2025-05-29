import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
      <div className='flex justify-center items-center gap-x-10 bg-gray-800 p-4 text-white'>
          <NavLink className={(e) => e.isActive ? 'text-red-500' : '' } to="/">
              Home
          </NavLink>
          <NavLink to="/recipes" className={(e) => e.isActive ? 'text-red-500' : '' }>
              Recipes
          </NavLink>
          <NavLink to="/about" className={(e) => e.isActive ? 'text-red-500' : '' }>
              About
          </NavLink>
            <NavLink to="/create-recipe" className={(e) => e.isActive ? 'text-red-500' : '' }>
                Create Recipe
            </NavLink>
    </div>
  )
}

export default NavBar