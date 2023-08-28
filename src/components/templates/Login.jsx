// Core
import { Link as RouterLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import GlobalContext from "../../contexts/Global/Context";
// Components
import { Checkbox, Typography, FormControlLabel, Link } from "@mui/material";
import { toast } from 'react-toastify';
import BlankPage from "../layout/BlankPage";
import FormCard from "../styles/FormCard";
// Styling
import { GoRocket as Rocket } from "react-icons/go";
import ButtonRegin from "../styles/ButtonRegin.style";
import FormFieldMain from "../styles/FormFieldMain.style";
import "../../scss/global.scss";
import 'react-toastify/dist/ReactToastify.css';
// utils
import useSearchQuery from "../../utils/useSearchQuery";

const Login = () => {
  const [global, globalActions] = useContext(GlobalContext);
  const { next } = useSearchQuery()

  const [disableLogin, setDisableLogin] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    if (global.user.loggedIn) {
      global.navigate(next || "/")
    } else {
      const email = localStorage.getItem("email");
      const password = localStorage.getItem("password");
      if (email && password) {
        setRemember(true);
        setEmail(email)
        setPassword(password)
      }
    }
  }, []);

  async function login() {
    setDisableLogin(true)
    const res = await axios.post(global.api("/user/login"), {
      email,
      password
    }, {withCredentials:true});

    globalActions.updateUser(res.data.user);

    if (remember) {
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
    } else {
      localStorage.removeItem("email");
      localStorage.removeItem("password");
    }
    global.navigate(next || "/");
  }

  async function submitHandler(e) {
    e.preventDefault();


    try {
      await login();
    } catch (err) {
      setDisableLogin(false)

      console.log(err)
      let msg = (err.code === "ERR_NETWORK") ? "Network error, Please chech your connection!" : 'Incorrect credential'
      toast.error(msg, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  }

  return (
    <BlankPage>
      <FormCard style={{ maxWidth: "450px" }}>
        <header style={{ textAlign: "center", margin: "20px" }}>
          <Typography variant="h4">
            <Rocket style={{ position: "relative", top: "5px" }} /> Starship
          </Typography>
        </header>
        <main>
          <form onSubmit={submitHandler}>
            <Typography style={{ margin: "10px 0px" }} variant="h5">
              Welcome to Starship
            </Typography>
            <FormFieldMain
              name="email"
              label="Email"
              type="email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value) }
            />
            <FormFieldMain
              name="password"
              type="password"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value) }
            />
            <div className="flex-middle">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={remember}
                    onClick={() => setRemember(!remember)}
                  />
                }
                label="Remember Me"
              />
              <Typography>
                <Link
                  style={{ position: "relative", top: "6px" }}
                  className="link-underline-animation"
                  to="/password/reset"
                  component={RouterLink}
                  underline="none"
                >
                  Forgot Password?
                </Link>
              </Typography>
            </div>
            <ButtonRegin disabled={disableLogin} type="submit" variant="contained">Login</ButtonRegin>
          </form>
        </main>
        <footer className="text-center" style={{ margin: "10px" }}>
          <Typography>
            New on our platform?{" "}
            <Link
              style={{ position: "relative", top: "6px" }}
              className="link-underline-animation"
              to="/register"
              component={RouterLink}
              underline="none"
            >
              Create an account
            </Link>
          </Typography>
        </footer>
      </FormCard>
    </BlankPage>
  );
};

export default Login;
