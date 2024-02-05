// import "./App.css";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, Outlet, useLocation } from "react-router-dom";

const Layout = () => {
  let { pathname } = useLocation();

  return (
    <>
      <div>
        {/* header */}
        <header className="w-[100%] shadow-lg md:h-[14vh] md:flex justify-evenly items-center">
          <div>
          <Link to="/">
            <li className="m-[50px]  text:pathname=='/' ? red:blue  ">Home</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>
          </div>
          {/* Logo */}
          <img
            src="/src/assets/images/logotip.jpg"
            alt=""
            className="w-auto h-[14vh]"
          />
          {/* buttonCatalog */}
          <Button variant="contained">
            <MenuIcon></MenuIcon>Каталог товаров
          </Button>
          {/* Input for Search */}
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,
            }}
          >
            <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search ........"
              inputProps={{ "aria-label": "search google maps" }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>

            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
            ></IconButton>
          </Paper>
          {/* Location/Account/Shopping */}
          <div className="flex">
            <AddLocationAltIcon></AddLocationAltIcon>
            <AccountCircleIcon></AccountCircleIcon>
            <ShoppingCartIcon></ShoppingCartIcon>
          </div>
        </header>

        {/* OutLink */}
        <div>
          <Outlet></Outlet>
        </div>

        {/* Footer */}
        <footer className="bg-[black] text-[white] flex justify-evenly">
          {/* Cards */}
          <div>
            <ul>
              <li>Телефоны справочной службы</li>
              <li>900</li>
              <li>+992 48-888-1111</li>
              <li>@alifshop_tj</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Каталог товаров</li>
              <li>Смартфоны</li>
              <li>Телевизоры</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Стиральные машины</li>
              <li>Кондиционеры</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Мы в соцмедиа</li>
              <li>FaceBook</li>
              <li>Instagramm</li>
              <li>Telegram</li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
