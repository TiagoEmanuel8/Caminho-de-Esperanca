import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/300.css';

import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  Heading,
  extendTheme
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

const theme = extendTheme({
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
  },
});

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3} bg="gray.50">
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="32vmin" pointerEvents="none" />
          <Heading as="h1" size="xl">Ajude você também</Heading>
          <Text>
            Muitas pessoas estão necessitadas nesse momento, dê uma esperança a elas.
          </Text>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
