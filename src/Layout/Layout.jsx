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
import { useEffect, useState } from "react";

// ForDialogMOdal
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
// import Slider2 from "../../components/Slider2";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../api/Home/home";
import { SubData } from "../reducers/Home/Home";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const Layout = () => {
  const dispatch = useDispatch();
  const category = useSelector((store) => store.Home.categories);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);


const subData=useSelector((store)=>store.Home.subData)  

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
      <div className="flex">
      <div className="m-3 overflow-y-auto w-[450px] h-[80vh]">
       <button className="text-[black] font-bold border-black border-solid border-[2px] w-[100px] h-[40px] hover:bg-[black] hover:text-[white] rounded-lg">Close</button>
        <Link to='/'>
        <p className="font-bold my-4 p-3 hover:bg-[black] hover:text-[white] rounded-lg">Главный</p>
        </Link>
        {category.map((e) => {
          return (
            <div   onMouseEnter={()=>dispatch(SubData(e.subCategories))}>
              <h1 className="my-4 p-3  font-bold hover:bg-[black] hover:text-[white] rounded-lg">{e.categoryName}</h1>
            </div>
          )
        })}
      </div>
      {/* SubCategory_Fix */}
      <div className="flex justify-center items-center w-[80%]">
      <div className="flex flex-wrap justify-center items-center font-bold font-mono w-[80%] h-[60vh] border-red border-solid border-[2px] rounded-lg shadow-md">
            {subData.map((e) => {
              return (
                <h1 key={e.id} className="hover:text-[white] p-3 rounded-[7px] text-[18px] hover:bg-[black]">
                  {e.subCategoryName}
                </h1>
                             );
            })}
          </div>
          </div>
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

  // ForModalAccount
  const [open1, setOpen1] = useState(false);

  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

  return (
    <>
      <div>
        {/* header */}
        <header className="w-[100%] top-0 fixed  z-50 shadow-lg md:h-[14vh]    bg-[white]">
          <div className="md:flex  items-center justify-between w-[80%] m-auto ">
            <div className="flex items-center">
              {/* Logo */}
              <img
                src="src/assets/images/1.png"
                alt=""
                className="w-auto h-[14vh] mr-3 rounded-full"
              />

              {/* buttonCatalog */}
              {/* <Button variant="contained"> */}
              <div className="w-[120px] h-[40px] border-solid flex justify-evenly items-center border-[black] border-[1px] rounded-lg hover:bg-[black] hover:text-[white]">
                <MenuIcon sx={{ fontSize: "18px" }}></MenuIcon>
                {/* forCatalog */}
                {["top"].map((anchor) => (
                  <div key={anchor}>
                    <button onClick={toggleDrawer(anchor, true)}>
                      <p className=" font-bold font-mono hover:text-[white]">Каталог</p>
                    </button>
                    <Drawer
                      anchor={anchor}
                      open={state[anchor]}
                      onClose={toggleDrawer(anchor, false)}
                    >
                      {list(anchor)}
                    </Drawer>
                  </div>
                ))}
              {/* </Button> */}
                </div>
            </div>

            {/* Input for Search */}
            <div className="mob:hidden md:inline-flex">
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
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>

                <IconButton
                  color="primary"
                  sx={{ p: "10px" }}
                  aria-label="directions"
                ></IconButton>
              </Paper>
            </div>

            {/* Location/Account/Shopping */}
            <div className="flex justify-evenly md:w-[240px]">
              <div className="flex flex-col  items-center hover:text-[#67f2fa] hover:cursor-pointer">
                <AddLocationAltIcon
                  onClick={handleClickOpen}
                  sx={{ fontSize: "28px" }}
                ></AddLocationAltIcon>
                <p className="font-bold">Dushanbe</p>

                {/* ForMOdalLocation */}

                <BootstrapDialog
                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={open}
                >
                  <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    <p className="font-mono">Выберите ваш город</p>
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
                    <div className="text-[20px] md:w-[450px]">
                      <p className="text-[#3f84e4] my-2 rounded-lg p-2 cursor-pointer hover:bg-[#d2d2d2]">
                        Душанбе
                      </p>
                      <p className="text-[#3f84e4] my-2 rounded-lg p-2 cursor-pointer hover:bg-[#d2d2d2]">
                        Худжанд
                      </p>
                      <p className="text-[#3f84e4] my-2 rounded-lg p-2 cursor-pointer hover:bg-[#d2d2d2]">
                        Вахдат
                      </p>
                      <p className="text-[#3f84e4] my-2 rounded-lg p-2 cursor-pointer hover:bg-[#d2d2d2]">
                        Гиссар
                      </p>
                      <p className="text-[#3f84e4] my-2 rounded-lg p-2 cursor-pointer hover:bg-[#d2d2d2]">
                        Куляб
                      </p>
                      <p className="text-[#3f84e4] my-2 rounded-lg p-2 cursor-pointer hover:bg-[#d2d2d2]">
                        Исфара
                      </p>
                      <p className="text-[#3f84e4] my-2 rounded-lg p-2 cursor-pointer hover:bg-[#d2d2d2]">
                        Истаравшан{" "}
                      </p>
                    </div>
                  </DialogContent>
                  <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                      Save changes
                    </Button>
                  </DialogActions>
                </BootstrapDialog>
              </div>

              {/*Войти_______________________________________________________________ */}
              <div
                className="flex flex-col  items-center hover:text-[#67f2fa]"
                onClick={handleClickOpen1}
              >
                <AccountCircleIcon
                  sx={{ fontSize: "28px" }}
                ></AccountCircleIcon>
                <p className="font-bold">Войти</p>
              </div>

              <div>
                <BootstrapDialog
                  onClose={handleClose1}
                  aria-labelledby="customized-dialog-title"
                  open={open1}
                >
                  <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Вход
                  </DialogTitle>
                  <IconButton
                    aria-label="close"
                    onClick={handleClose1}
                    sx={{
                      position: "absolute",
                      right: 8,
                      top: 8,
                      color: (theme) => theme.palette.grey[500],
                    }}
                  >
                    <CloseIcon />
                  </IconButton>

                  <p className="text-[16px] font-bold text-center m-3">
                    Введите номер телефона
                  </p>
                  <p className="text-[14px] text-[grey] m-4">
                    Мы отправим вам СМС с кодом подтверждения
                  </p>
                  <div className="flex justify-center">
                    <TextField
                      id="outlined-basic"
                      label="Phone"
                      variant="outlined"
                      placeholder="+992- - - - - -"
                    />
                  </div>
                  <DialogActions>
                    <Button autoFocus onClick={handleClose1}>
                      Save changes
                    </Button>
                  </DialogActions>
                </BootstrapDialog>
              </div>

              <Link to="/Basket">
                <div className="flex flex-col  hover:cursor-pointer hover:text-[#67f2fa] items-center">
                  <ShoppingCartIcon
                    sx={{ fontSize: "28px" }}
                  ></ShoppingCartIcon>
                  <p className="font-bold">Корзина</p>
                </div>
              </Link>
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
          <div className="w-[80%] m-auto md:flex justify-between">
            <div>
              <ul className="font-semibold">
                <li className="py-2 hover:text-[#5d91da] cursor-pointer hover:underline">
                  Телефоны справочной службы
                </li>
                <li className="py-2 hover:text-[#5d91da] cursor-pointer hover:underline">
                  000
                </li>
                <li className="py-2 hover:text-[#5d91da] cursor-pointer hover:underline">
                  +432 08-888-1111
                </li>
                <li className="py-2 hover:text-[#5d91da] cursor-pointer hover:underline">
                  @Mishop_tj
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="py-2 hover:text-[#5d91da] cursor-pointer hover:underline">
                  Каталог товаров
                </li>
                <li className="py-2 hover:text-[#5d91da] cursor-pointer hover:underline">
                  Смартфоны
                </li>
                <li className="py-2 hover:text-[#5d91da] cursor-pointer hover:underline">
                  Телевизоры
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="py-2 hover:text-[#5d91da] cursor-pointer hover:underline">
                  Стиральные машины
                </li>
                <li className="py-2 hover:text-[#5d91da] cursor-pointer hover:underline">
                  Кондиционеры
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="py-2 hover:text-[#5d91da] cursor-pointer hover:underline">
                  Мы в соцмедиа
                </li>
                <li className="py-2 hover:text-[#5d91da] cursor-pointer hover:underline">
                  FaceBook
                </li>
                <li className="py-2 hover:text-[#5d91da] cursor-pointer hover:underline">
                  Instagramm
                </li>
                <li className="py-2 hover:text-[#5d91da] cursor-pointer hover:underline">
                  Telegram
                </li>
              </ul>
            </div>
          </div>
          <hr className="w-[80%] m-auto my-4" />
          <p className="text-center m-4 text-[grey]">
            © 2024 ОАО г. Душанбе, 101 мкр-н, ул. Багаутдинова, 9
          </p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
