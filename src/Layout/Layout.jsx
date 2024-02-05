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
import Divider from "@mui/material/Divider";
import { useState } from "react";

// ForDialogMOdal
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

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

  // ForModalLocation
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        {/* header */}
        <header className="w-[100%] shadow-lg md:h-[14vh] md:flex  items-center">
          <div className="flex items-center justify-between w-[80%] m-auto ">
            <div className="flex items-center">
              {/* Logo */}
              <img
                src="/src/assets/images/logotip.jpg"
                alt=""
                className="w-auto h-[14vh] mr-3"
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
            </div>

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
            <div className="flex justify-evenly w-[240px]">
              <div className="flex flex-col  items-center">
                <AddLocationAltIcon
                  onClick={handleClickOpen}
                ></AddLocationAltIcon>
                <p>Худжанд</p>

                {/* ForMOdalLocation */}

                <BootstrapDialog
                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={open}
                >
                  <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Выберите ваш город
                  </DialogTitle>
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                      position: "absolute",
                      right: 8,
                      top: 8,
                      color: (theme) => theme.palette.grey[500],
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <DialogContent dividers>
                    <Typography gutterBottom>
                      Cras mattis consectetur purus sit amet fermentum. Cras
                      justo odio, dapibus ac facilisis in, egestas eget quam.
                      Morbi leo risus, porta ac consectetur ac, vestibulum at
                      eros.
                    </Typography>
                    <Typography gutterBottom>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur et. Vivamus sagittis lacus vel augue laoreet
                      rutrum faucibus dolor auctor.
                    </Typography>
                    <Typography gutterBottom>
                      Aenean lacinia bibendum nulla sed consectetur. Praesent
                      commodo cursus magna, vel scelerisque nisl consectetur et.
                      Donec sed odio dui. Donec ullamcorper nulla non metus
                      auctor fringilla.
                    </Typography>
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                      Save changes
                    </Button>
                  </DialogActions>
                </BootstrapDialog>
              </div>
              <div className="flex flex-col  items-center">
                <AccountCircleIcon></AccountCircleIcon>
                <p>Войти</p>
              </div>
              <div className="flex flex-col  items-center">
                <ShoppingCartIcon></ShoppingCartIcon>
                <p>Корзина</p>
              </div>
            </div>
          </div>
        </header>

        {/* OutLink */}
        <div>
          <Outlet></Outlet>
        </div>

        {/* Footer */}
        <footer className="bg-[black] text-[white] py-20">
          {/* Cards */}
          <div className="w-[80%] m-auto flex justify-between">
            <div>
              <ul className="font-semibold">
                <li className="py-2 hover:text-[#797933] hover:underline">Телефоны справочной службы</li>
                <li className="py-2 hover:text-[#797933] hover:underline">900</li>
                <li className="py-2 hover:text-[#797933] hover:underline">+992 48-888-1111</li>
                <li className="py-2 hover:text-[#797933] hover:underline">@alifshop_tj</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="py-2 hover:text-[#797933] hover:underline">Каталог товаров</li>
                <li className="py-2 hover:text-[#797933] hover:underline">Смартфоны</li>
                <li className="py-2 hover:text-[#797933] hover:underline">Телевизоры</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="py-2 hover:text-[#797933] hover:underline">Стиральные машины</li>
                <li className="py-2 hover:text-[#797933] hover:underline">Кондиционеры</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="py-2 hover:text-[#797933] hover:underline">Мы в соцмедиа</li>
                <li className="py-2 hover:text-[#797933] hover:underline">FaceBook</li>
                <li className="py-2 hover:text-[#797933] hover:underline">Instagramm</li>
                <li className="py-2 hover:text-[#797933] hover:underline">Telegram</li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;
