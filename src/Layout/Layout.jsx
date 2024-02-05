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

// forCatalog
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";

const Layout = () => {
  // forCatalog
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <div>
        <Link to="/">
          <li className="m-[50px]  text:pathname=='/' ? red:blue  ">Home</li>
        </Link>

        <Link to="/about">
          <li>Смартфоны и планшеты</li>
        </Link>
      </div>
    </Box>
  );

  let { pathname } = useLocation();
  return (
    <>
      <div>
        {/* header */}
        <header className="w-[100%] shadow-lg md:h-[14vh] md:flex justify-evenly items-center">
          {/* Logo */}
          <img
            src="/src/assets/images/logotip.jpg"
            alt=""
            className="w-auto h-[14vh]"
          />
          {/* buttonCatalog */}
          <Button variant="contained">
            <MenuIcon></MenuIcon>
            {/* forCatalog */}

            {["top"].map((anchor) => (
              <div key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>
                  <p className="text-[white]">Каталог товаров</p>
                </Button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </div>
            ))}
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
        <footer className="bg-[black] text-[white] md:flex justify-evenly">
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
