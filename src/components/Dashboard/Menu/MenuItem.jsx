import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-3 my-2 transition-all duration-300 transform rounded-xl group ${
          isActive 
            ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/30' 
            : 'text-gray-600 hover:bg-brand-primary/10 hover:text-brand-primary'
        }`
      }
    >
      <Icon className='w-5 h-5' />
      <span className='mx-4 font-medium tracking-wide'>{label}</span>
    </NavLink>
  )
}
MenuItem.propTypes = {
  label: PropTypes.string,
  address: PropTypes.string,
  icon: PropTypes.elementType,
}

export default MenuItem