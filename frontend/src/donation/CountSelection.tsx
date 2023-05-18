import {
  Button,
  Heading,
  NumberInput,
  NumberInputField,
  SimpleGrid,
  useRadioGroup,
  VStack,
  Text
} from '@chakra-ui/react';
import React, { useState } from 'react';
import RadioCard from './RadioCard';

interface Props {
  initialCount: number;
  next: (values: any) => void;
}

const options = [5, 10, 20, 50];

export const CountSelection = ({ initialCount, next }: Props) => {
  const [pounds, setPounds] = useState(initialCount);
  const [customAmount, setCustomAmount] = useState(
    '' + (options.includes(pounds) ? '' : pounds)
  );

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'pounds',
    value: pounds.toString(),
    onChange: (nextValue) => {
      setCustomAmount('');
      setPounds(parseInt(nextValue));
    },
  });

  const group = getRootProps();

  const nextStep = () => {
    next({ count: pounds });
  };

  return (
    <VStack spacing={4} align="stretch">
      <Heading as="h3" size="md">
        Ajude o projeto Caminhos de Esperança
      </Heading>
      <Text fontSize="md" fontWeight="bold">
        Cada cesta básica irá fazer a diferença para uma família
      </Text>
      <SimpleGrid mt={5} columns={2} spacing={2} {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value, enterKeyHint: '' });
          return (
            <RadioCard key={value} {...radio}>
              {value} Cestas Básicas
            </RadioCard>
          );
        })}
      </SimpleGrid>

      <NumberInput
        onFocus={() => setPounds(0)}
        onChange={(value) => {
          setPounds(parseInt(value));
          setCustomAmount(value);
        }}
        value={customAmount}
      >
        <NumberInputField placeholder="Outra quantidade" />
      </NumberInput>

      <hr />

      <Button
        colorScheme="orange"
        size="lg"
        borderRadius="full"
        onClick={nextStep}
      >
        Próximo
      </Button>
    </VStack>
  );
};
