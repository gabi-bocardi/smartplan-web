import { AbsoluteCenter, Center, Container } from '@chakra-ui/react';

export function PageWrapper({ children }: { children: JSX.Element }): JSX.Element {
  return (
    <Container minW='320px' maxW='1920px' minH='100vh' p='20px'>
      {children}
    </Container>
  );
}
