import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Icon from '@mui/material/Icon';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import styled from 'styled-components';
const SearchProduct = styled.li`
  &>div{
    display: none;
    transition: all 0.1s ease-in-out;
    &>input{
      padding: 10px;
      border-radius: 1rem;
    }
    &>input:focus{
      border: 1px solid black;
    }
  }
  &:hover>div{
    display: block;
  }
`
const Information = () => {
  return (
    <ul className="menu_nav">
      <SearchProduct className="nav_item" style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          inputProps={{ 'aria-label': 'search' }}
          className="search"
        />
        <IconButton >
          <SearchIcon className="icon_search icon" style={{ color: "#181818", fontSize: "1.75rem" }} />
        </IconButton>
      </SearchProduct>
      <li className="nav_item">
        <IconButton>
          <AccountCircleIcon className="icon_account icon" style={{ color: "#181818", fontSize: "1.75rem" }} />
        </IconButton>
      </li>
      <li className="nav_item">
        <IconButton>
          <Icon className="flag-icon flag-icon-us" style={{ color: "#181818", fontSize: "1.75rem", backgroundImage: "url('https://www.popsockets.com/on/demandware.static/Sites-AMER-Site/-/en_US/v1668229434652/fonts/flags//4x3/us.svg')", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}></Icon>
        </IconButton>
      </li>
      <li className="nav_item">
        <IconButton>
          <ShoppingBagIcon className="icon_bag icon" style={{ color: "#181818", fontSize: "1.75rem" }} />
        </IconButton>
      </li>
    </ul>
  );
}
export default Information;