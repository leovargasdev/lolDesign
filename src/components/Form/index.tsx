import React from 'react';

import { Container } from './styles';
import Input from '../Input';

const Form: React.FC = () => (
  <Container>
    <h1>Calculo da Ligação</h1>
    <Input
      name="username"
      type="text"
      placeholder="Nome de Usuário"
    />
  </Container>
);


export default Form;