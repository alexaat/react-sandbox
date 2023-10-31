import {
    FormHelperText,
    TextField,
    TextFieldProps,
    FormControl,
    styled,
    OutlinedInputProps,
    Button
  } from '@mui/material';

export const StyledButton = styled(Button)( ({ theme, size }) => ( 
    {
        color: theme.palette.primary.contrastText,
        backgroundColor: 'pink',
        height: size === 'small' ? '24px' : '36px',
        marginTop: '4px',
        marginBottom: '4px'

    })
);


export const TextInput = styled(TextField)(({theme}) => ({
    height: '42px',
      backgroundColor: 'pink',
}));

export const StyledTextField = styled(TextField)(
  //  '& .MuiInputBase-root': {
    
  //     border: '2px solid #666',
  //     borderRadius: '8px',
  //     height: '42px'
  //   },
  //   '& .MuiOutlinedInput-notchedOutline': {
  //     border: '0'
  //   }

);


export const RedditTextField = styled((props) => (
    <TextField {...props} />
  ))(({ theme }) => ({
    '& .MuiInputLabel-root': {
      transform: 'translate(12px, 14px)',
      '&.Mui-focused': {
        color: '#A1A1A1',
      },
      '&.MuiInputLabel-shrink': {
        transform: 'translate(12px, 7px) scale(0.75)',
      },
    },
    '& .MuiFilledInput-root': {
      overflow: 'hidden',
      borderRadius: 8,
      backgroundColor: theme.palette.background.container,
      border: '1px solid',
      borderColor: theme.palette.secondary.A300,
      height: '48px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      '&>.MuiFilledInput-input': {
        paddingTop: '18px',
      },
      '&:hover': {
        backgroundColor: theme.palette.background.container,
      },
      '&.Mui-focused': {
        backgroundColor: theme.palette.background.container,
        boxShadow: 'none',
        borderColor: '#00C0B4',
      },
    },
    '& .MuiFormHelperText-root': {
      color: '#3D3D3D',
    },
  }));
  



