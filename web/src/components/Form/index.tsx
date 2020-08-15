import React, { useState, useCallback, useMemo } from 'react';

import { Container, ContentInput, BoxInput, Button } from './styles';

const Form: React.FC = () => {
  const [plan, setPlan] = useState(30);
  const [origin, setOrigin] = useState(11);
  const [destiny, setDestiny] = useState(16);
  const [timeCall, setTimeCall] = useState(1);
  const [isFocused, setIsFocused] = useState(false);

  const DDDs = [11, 16, 17, 18];
  const plans = [30, 60, 120];

  const priceMin = useMemo(() => {
    const prices = [1.90, 1.70, 0.90];
    // Como os destinos são em sequenciais, dá para subitrair o primeiro e criar uma sequência com um array de valores
    // Assim os valores e os destinos se tornam respectivos
    // Quando a Origem for o DD 11 é acrescentado R$ 1,00 no valor do minuto, pois existe esse padrão na tabela do exemplo
    return origin === 11 ? prices[destiny - 16] : prices[origin - 16] + 1;
  }, [destiny, origin]);

  const pricePlan = useMemo(() => {
    if(timeCall <= plan) return '0.00';
    const value = (timeCall - plan) * (priceMin * 1.1);
    return value.toFixed(2);
  }, [timeCall, plan, priceMin]);

  const setDDD = useCallback((type, value) => {
    if(type === 'origin') {
      setOrigin(value);
      setDestiny(value === 11 ? 16 : 11);
    } else {
      setDestiny(value);
      setOrigin(value === 11 ? 16 : 11);
    }
  }, [setDestiny, setOrigin]);

  return (
    <Container>
      <h1>Calculo da Ligação</h1>
      <form>
      <ContentInput>
          <label>Origem</label>
          {DDDs.map(ddd =>
            <Button type="button" key={ddd} onClick={() => setDDD('origin', ddd)} active={origin===ddd}>{ddd}</Button>
          )}
        </ContentInput>

        <ContentInput>
          <label>Destino</label>
          {DDDs.map(ddd =>
            <Button type="button" key={ddd} onClick={() => setDDD('destiny', ddd)} active={destiny===ddd}>{ddd}</Button>
          )}
        </ContentInput>

        <ContentInput>
          <label>Tempo</label>
          <BoxInput isFocus={isFocused}>
            <input
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              name="timeCall"
              type="number"
              placeholder="20"
              value={timeCall}
              onChange={e => setTimeCall(Number(e.target.value))}
            />
          </BoxInput>
        </ContentInput>
        
        <ContentInput>
          <label>Plano FaleMais</label>
          {plans.map(planButton =>
            <Button type="button" key={planButton} onClick={() => setPlan(planButton)} active={plan===planButton}>FaleMais {planButton}</Button>
          )}
        </ContentInput>
        
        <ContentInput>
          <label>Preço Minuto</label>
          <strong>R$ {priceMin.toString().concat('0')}</strong>
        </ContentInput>

        <ContentInput>
          <label>Com FaleMais</label>
          <strong>R$ {pricePlan}</strong>
        </ContentInput>

        <ContentInput>
          <label>Sem FaleMais</label>
          <strong>R$ {(priceMin * timeCall).toFixed(2)}</strong>
        </ContentInput>
      </form>
    </Container>
  );
};

export default Form;