import * as React from 'react'
import { styled } from '@mui/material/styles'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { white } from 'utils/constant'

const GatorInputStyled = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        borderRadius: 20,
        backgroundColor: white,
        '& .MuiOutlinedInput-input': {
            height: '0.475em',
        },
    },
})

type IGatorInput = {
    chidren?: React.ReactNode
} & TextFieldProps

export default function GatorInput(props: IGatorInput) {
    const { children, ...rest } = props
    return (
        <GatorInputStyled id="gator-input" {...rest}>
            {children}
        </GatorInputStyled>
    )
}
