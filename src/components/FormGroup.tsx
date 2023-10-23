import { Flex } from '@chakra-ui/react';

export function FormGroup({ children }: { children: JSX.Element[] }): JSX.Element {
  return (
    <Flex direction='column' gap='5px'>
      {children}
    </Flex>
  );
}
