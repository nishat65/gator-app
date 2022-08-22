import * as React from 'react'
import { styled } from '@mui/material/styles'
import Button, { ButtonProps } from '@mui/material/Button'

import { tertiaryColor } from 'utils/constant'

const GatorStyledButton = styled(Button)({
    borderRadius: 20,
    boxShadow: 'none',
    '&:hover': {
        backgroundColor: tertiaryColor,
        boxShadow: 'none',
    },
})

type IGatorButton = {
    chidren?: React.ReactNode
} & ButtonProps

export default function GatorButton(props: IGatorButton) {
    const { children, ...rest } = props
    return (
        <GatorStyledButton id="gator-button" {...rest}>
            {children}
        </GatorStyledButton>
    )
}
