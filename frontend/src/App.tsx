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
import { useQuery, useSubscription } from 'urql';
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import { Counter } from './donation/Counter';

const TotalDonationsQuery = `
  query Query {
    totalDonations
  }
`;

const TotalUpdatedQuery = `
  subscription Subscription {
    totalUpdated {
      total
    }
  }
`;

const theme = extendTheme({
  fonts: {
    heading: 'Montserrat',
    body: 'Montserrat',
  },
});

const handleSubscription = (previous: any, newTotal: any) => {
  return newTotal?.totalUpdated?.total;
};

export const App = () => {
  const [res] = useSubscription(
    { query: TotalUpdatedQuery },
    handleSubscription
  );
  const [{ data, fetching, error }] = useQuery({
    query: TotalDonationsQuery,
  });

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
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

            <Heading as="h2" size="4xl">
              <Counter from={0} to={res.data || data.totalDonations} />
            </Heading>

          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}