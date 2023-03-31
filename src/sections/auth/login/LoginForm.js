import React, { useCallback, useState } from "react";
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../components/iconify';
import { magic } from "../../../magic";


// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  // const history = useHistory();

  const handleClick = () => {
    navigate('/dashboard', { replace: true });
  };

  /**
   * Perform login action via Magic's passwordless flow. Upon successuful
   * completion of the login flow, a user is redirected to the homepage.
   */
  const loginWithEmail = useCallback(async () => {
    setIsLoggingIn(true);

    try {
      await magic.auth.loginWithMagicLink({ email });
      navigate('/dashboard', { replace: true });
      // history.push("/");
    } catch (err) {
      console.log(err);
      setIsLoggingIn(false);
    }
  }, [email]);  

  /**
   * Saves the value of our email input into component state.
   */
  const handleEmailInputOnChange = useCallback((event) => {
    setEmail(event.target.value);
  }, []);

  return (
    <>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" onClick={handleClick}>
        Login
      </LoadingButton>

      <div className="container">
      <h1>Please sign up or login</h1>
      <input
        type="email"
        name="email"
        required="required"
        placeholder="Enter your email"
        onChange={handleEmailInputOnChange}
        disabled={isLoggingIn}
      />
      <button onClick={loginWithEmail} disabled={isLoggingIn}>Send</button>
      
    </div>


    </>
  );
}
