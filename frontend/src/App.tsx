import * as React from "react"
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/300.css';
import { useQuery, useSubscription } from 'urql';
import { Logo } from "./Logo";
import { Counter } from './donation/Counter';
import { Leaderboard } from './leaderboard/Leaderboard';
import { DonationWizard } from './donation/DonationWizard';
import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  Heading,
  extendTheme
} from "@chakra-ui/react";

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
  }
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
          <VStack spacing={8}>
            <Logo h="32vmin" pointerEvents="none" />
            <Heading as="h1" size="xl">Projeto Caminhos de Esperança</Heading>
            <Text>
              Até o momento arracademos
            </Text>

            <Heading as="h2" size="4xl">
              <Counter from={0} to={res.data || data.totalDonations} />
            </Heading>

            <Text>
              Cestas Básicas
            </Text>

            <DonationWizard />

            <Leaderboard />

          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  )
}