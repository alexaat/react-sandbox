import { Button, styled } from "@mui/material";

export const StyledButton = styled(Button)( ({ theme, size }) => ( 
    {
        color: theme.palette.primary.contrastText,
        backgroundColor: 'pink',
        height: size === 'small' ? '24px' : '36px',
        marginTop: '4px',
        marginBottom: '4px'

    })
);