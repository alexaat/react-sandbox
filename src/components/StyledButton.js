import {
  FormHelperText,
  TextField,
  TextFieldProps,
  FormControl,
  styled,
  OutlinedInputProps,
  Button
} from '@mui/material';

export const StyledButton = styled(Button)(({ theme, size }) => (
  {
    color: theme.palette.primary.contrastText,
    backgroundColor: 'pink',
    height: size === 'small' ? '24px' : '36px',
    marginTop: '4px',
    marginBottom: '4px'

  })
);


export const TextInput = styled(TextField)(({ theme }) => ({
  height: '42px',
  backgroundColor: 'pink',
}));



export const StyledInputText = (props) => {
  const { label, height, colorActive, colorNotActive, sx, ...extra_props } = props;

  const h = height ? height : '42px';

  const color_active = colorActive ? colorActive : 'red';
  const color_not_active = colorNotActive ? colorNotActive : 'pink';

  return (
    <TextField

      {...extra_props}

      label={label}
      size='small'
   

    

      sx={(theme) => ({
        // accessing theme
        //backgroundColor: theme.palette.primary.main,

        //Label Color
        '& .MuiFormLabel-root.MuiInputLabel-root': {
          color: color_not_active
        },
        '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
          color: color_active
        },

        //Text Color
        '& .MuiInputBase-input.MuiOutlinedInput-input': {
          color: color_not_active
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused input': {
          color: color_active
        },

        //Border
        '& .MuiOutlinedInput-notchedOutline': {
          border: `2px solid ${color_not_active}`,
          borderRadius: '8px'
        },
        '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
          border: `2px solid ${color_active}`,
        },

        //Border hover
        '& .MuiInputBase-root.MuiOutlinedInput-root:hover': {
          '& > fieldset': {
            borderColor: color_not_active
          }
        },

        //Height:
        '& .MuiInputBase-root.MuiOutlinedInput-root': {
          height: h
        },

        //Helper text
        '& .MuiFormHelperText-root': {
          color: theme.palette.error,
          fontSize: '0.7em'
        },
        ...sx


      })}

      // sx={{




      // }}

    />

  );
}




export const StyledTextField = styled(TextField, {

})
  (
    ({ label, theme }) => ({
      label: { label },

      size: 'small',

      //Label Color
      '& .MuiFormLabel-root.MuiInputLabel-root': {
        color: 'pink'
      },
      '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused': {
        color: 'red'
      },

      //Text Color
      '& .MuiInputBase-input.MuiOutlinedInput-input': {
        color: 'pink',
      },
      '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused input': {
        color: 'red',
      },

      //Border
      '& .MuiOutlinedInput-notchedOutline': {
        border: '2px solid pink',
        borderRadius: '8px'
      },
      '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: '2px solid red',
      },

      //Border hover
      '& .MuiInputBase-root.MuiOutlinedInput-root:hover': {
        '& > fieldset': {
          borderColor: "pink"
        }
      },

      //Height:
      '& .MuiInputBase-root.MuiOutlinedInput-root': {
        height: '42px'
      },

      //Helper text
      '& .MuiFormHelperText-root': {
        color: 'red',
        fontSize: '0.7em'
      }
    })
  )


// export const StyledTextField = styled(TextField)(({ theme }) => (
//   <TextField
//   label='Display Name'
//   size='small'
//   helperText='Some error'

//   sx={{
//       //Label Color
//       '& .MuiFormLabel-root.MuiInputLabel-root':{
//           color: 'pink'   
//       },
//       '& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused':{
//           color: 'red'
//       },

//       //Text Color
//       '& .MuiInputBase-input.MuiOutlinedInput-input':{
//           color: 'pink',
//       },
//       '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused input':{
//           color: 'red',
//       },

//       //Border
//       '& .MuiOutlinedInput-notchedOutline' :{
//           border: '2px solid pink',
//           borderRadius: '8px'
//       },
//       '& .MuiInputBase-root.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':{
//           border: '2px solid red',
//       },

//       //Border hover
//       '& .MuiInputBase-root.MuiOutlinedInput-root:hover': {
//           '& > fieldset': {
//             borderColor: "pink"
//           }
//       },

//       //Height:
//       '& .MuiInputBase-root.MuiOutlinedInput-root':{
//           height: '42px'
//       },

//       //Helper text
//       '& .MuiFormHelperText-root':{
//           color: 'red',
//           fontSize: '0.7em'
//       }

//   }}

// />


//));


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




