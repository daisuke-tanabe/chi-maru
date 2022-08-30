import { ThemeProvider } from '@mui/material'
import { Story } from '@storybook/react'

import { theme } from '../theme'
export const decorators = [(Story: Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
]
