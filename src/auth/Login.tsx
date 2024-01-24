import { useContext, useState } from "react";
import Title from "../components/Title";
import "./register.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../services/ApiService";
import { Button, Container, Stack, TextField, Typography } from "@mui/material";

const LabelRtl = {
    ".MuiInputLabel-root": {
        right: 0,
    },
    ".css-1c2i806-MuiFormLabel-root-MuiInputLabel-root": {
        right: 0,
        left: "unset",
    },
};

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const validate = (): boolean => {
        if (!email) {
            // also check that email is required with regex
            toast.error("email is required.");
            return false;
        }

        if (!password || password.length < 6) {
            toast.error("Password must contain at least 6 characters.");
            return false;
        }

        return true;
    };

    const handleClick = () => {
        if (!validate()) {
            return;
        }

        login({
            email,
            password,
        })
            .then((status) => {
                if (status) {
                    navigate("/");
                }
            })
            .catch((error) => {
                //TODO: handle if has error
            });
    };

    return (
        <Container>
            <Typography variant="h2" align="center">
                התחברות
            </Typography>
            <Stack dir="rtl" width={300} margin="0 auto">
                <TextField
                    id="email"
                    name="email"
                    type="email"
                    label="אימייל"
                    variant="standard"
                    style={{ textAlign: "right" }}
                    defaultValue={email}
                    dir="rtl"
                    sx={LabelRtl}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    id="password"
                    name="password"
                    type="password"
                    label="סיסמה"
                    variant="standard"
                    style={{ textAlign: "right" }}
                    defaultValue={password}
                    dir="rtl"
                    sx={LabelRtl}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={handleClick}>כניסה</Button>
            </Stack>
        </Container>
    );
};

export default Login;
