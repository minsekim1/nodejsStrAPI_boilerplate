import { useState, ChangeEvent, MouseEvent } from 'react';
import router from 'next/router';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import { useSetRecoilState } from 'recoil';
import { getFetch } from '../../../api/config';
import { createUser, loginUser } from '../../../api/User';
import { inputDefaultProps, InputProps } from '../../../types';
import { grey } from '@mui/material/colors';
import { isEmail, isPassword } from '../../../utils';
import { dialogState, loaderState } from '../../../recoil/modal';
import Icon from '../../atoms/Icon';
import { getUserDataQuery } from '../../../utils/apollo/useUserQuery';
import { tokenState } from '../../../pages/_app';
export default function Signup() {
  const setDialog = useSetRecoilState(dialogState);
  const setLoader = useSetRecoilState(loaderState);
  const { refetch } = getUserDataQuery();

  const [email, setEmail] = useState<InputProps>(inputDefaultProps);
  const [password, setPassword] = useState<InputProps>(inputDefaultProps);
  const [checkPassword, setCheckPassword] = useState<InputProps>(inputDefaultProps);
  const [nickname, setNickname] = useState<InputProps>(inputDefaultProps);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showCheckPassword, setShowCheckPassword] = useState<boolean>(false);

  const setToken = useSetRecoilState(tokenState);
  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail({ value: e.target.value, error: false, helperText: '' });
  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => setPassword({ value: e.target.value, error: false, helperText: '' });
  const handleChangeCheckPassword = (e: ChangeEvent<HTMLInputElement>) =>
    setCheckPassword({ value: e.target.value, error: false, helperText: '' });
  const handleChangeNickname = (e: ChangeEvent<HTMLInputElement>) => setNickname({ value: e.target.value, error: false, helperText: '' });
  const handleClickPassword = () => setShowPassword((prev) => !prev);
  const handleClickCheckPassword = () => setShowCheckPassword((prev) => !prev);
  const handleMouseDown = (event: MouseEvent<HTMLButtonElement>) => event.preventDefault();
  const handleClickBack = () => router.back();
  const handleClickConfirm = () => {
    if (!email.value) {
      setEmail({ ...email, error: true, helperText: '이메일을 주소를 입력해 주세요!' });
      return;
    }
    if (!isEmail(email.value)) {
      setEmail({ ...email, error: true, helperText: '이메일 형식에 맞지 않습니다.' });
      return;
    }
    if (!password.value) {
      setPassword({ ...password, error: true, helperText: '비밀번호를 입력해 주세요!' });
      return;
    }
    if (!isPassword(password.value)) {
      setPassword({ ...password, error: true, helperText: '영문, 숫자, 특수문자 포함 6 ~ 20자' });
      return;
    }
    if (password.value !== checkPassword.value) {
      setCheckPassword({ ...password, error: true, helperText: '입력하신 비밀번호가 다릅니다!' });
      return;
    }
    setLoader({ open: true, fill: false, dark: false });
    getFetch(`/users?filters[email][$eq]=${email.value}`).then((d: any) => {
      if (d && d.length && d.length > 0) {
        setLoader({ open: false, fill: false, dark: false });
        setEmail({ ...email, error: true, helperText: '이미 가입된 이메일입니다.' });
      } else {
        getFetch(`/users?filters[nickname][$eq]=${nickname.value}`).then((d: any) => {
          setLoader({ open: false, fill: false, dark: false });
          if (d && d.length && d.length > 0) {
            setNickname({ ...nickname, error: true, helperText: '이미 사용중인 닉네임입니다.' });
          } else {
            createUser(email.value, password.value, nickname.value).then((d: any) => {
              if (d.error) {
                if (d.error.message.includes('email')) {
                  setEmail({ ...email, error: true, helperText: '이메일 형식에 맞지 않습니다.' });
                }
              } else {
                setEmail(inputDefaultProps);
                setPassword(inputDefaultProps);
                setCheckPassword(inputDefaultProps);
                setNickname(inputDefaultProps);
                setDialog((prev) => {
                  return {
                    ...prev,
                    open: true,
                    pathname: router.asPath,
                    back: false,
                    content: '회원가입이 완료되었습니다! 이제 React-Boilerplate와 함께하는 일상을 시작해 보세요!',
                    confirm: {
                      ...prev.confirm,
                      onClick: () => {
                        loginUser(email.value, password.value).then((d: any) => {
                          setToken(d.jwt);
                          router.push({ pathname: '/main/home', query: { state: 'login' } });
                        });
                      },
                    },
                  };
                });
              }
            });
          }
        });
      }
    });
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        pt: 'var(--sait)',
        pb: 'var(--saib)',
      }}
    >
      <Container>
        <IconButton onClick={handleClickBack} sx={{ ml: -2 }}>
          <Icon name="arrow-left" size={20} />
        </IconButton>
      </Container>
      <Container sx={{ flex: 1 }}>
        <Typography variant="h1" sx={{ mt: 4 }}>
          회원가입
        </Typography>
        <Typography sx={{ mt: 1, color: grey[500] }}>
          React-Boilerplate에 회원가입하시고, <br />
          매일을 즐겁게 함께하세요!
        </Typography>
        <Box sx={{ mt: 4 }}>
          <TextField
            autoFocus
            fullWidth
            variant="outlined"
            type="email"
            label="이메일"
            value={email.value}
            error={email.error}
            helperText={email.helperText}
            placeholder="email@address.com"
            onChange={handleChangeEmail}
          />
          <FormControl fullWidth sx={{ width: '100%', mt: 2 }} variant="outlined">
            <InputLabel htmlFor="auth-login-password" error={password.error}>
              비밀번호
            </InputLabel>
            <OutlinedInput
              id="auth-login-password"
              color="primary"
              autoComplete="off"
              type={showPassword ? 'text' : 'password'}
              label="비밀번호"
              value={password.value}
              error={password.error}
              onChange={handleChangePassword}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleClickPassword} onMouseDown={handleMouseDown}>
                    {showPassword ? (
                      <Icon name="eye" prefix="fas" size={20} sx={{ color: grey[500] }} />
                    ) : (
                      <Icon name="eye-slash" prefix="fas" size={20} sx={{ color: grey[500] }} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              sx={{ pr: 0 }}
            />
            <FormHelperText error={password.error}>{password.helperText}</FormHelperText>
          </FormControl>
          <FormControl fullWidth sx={{ width: '100%', mt: 2 }} variant="outlined">
            <InputLabel htmlFor="auth-login-check-password" error={password.error}>
              비밀번호 확인
            </InputLabel>
            <OutlinedInput
              id="auth-login-check-password"
              color="primary"
              autoComplete="off"
              type={showCheckPassword ? 'text' : 'password'}
              label="비밀번호 확인"
              value={checkPassword.value}
              error={checkPassword.error}
              onChange={handleChangeCheckPassword}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={handleClickCheckPassword} onMouseDown={handleMouseDown}>
                    {showCheckPassword ? (
                      <Icon name="eye" prefix="fas" size={20} sx={{ color: grey[500] }} />
                    ) : (
                      <Icon name="eye-slash" prefix="fas" size={20} sx={{ color: grey[500] }} />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              sx={{ pr: 0 }}
            />
            <FormHelperText error={checkPassword.error}>{checkPassword.helperText}</FormHelperText>
          </FormControl>
          <TextField
            fullWidth
            variant="outlined"
            label="닉네임"
            value={nickname.value}
            error={nickname.error}
            helperText={nickname.helperText}
            placeholder="한글, 영문 혹은 숫자"
            onChange={handleChangeNickname}
            sx={{ mt: 2 }}
          />
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button
            fullWidth
            onClick={handleClickConfirm}
            disabled={
              email.value.length === 0 || password.value.length === 0 || checkPassword.value.length === 0 || nickname.value.length === 0
            }
          >
            회원가입
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
