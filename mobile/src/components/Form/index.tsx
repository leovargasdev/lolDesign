import React, {useState, useCallback, useMemo} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Container,
  Title,
  ContainerRow,
  Button,
  Label,
  Value,
  InputTime,
} from './styles';

const Form: React.FC = () => {
  const [plan, setPlan] = useState(30);
  const [origin, setOrigin] = useState(11);
  const [destiny, setDestiny] = useState(16);
  const [timeCall, setTimeCall] = useState('100');

  const DDDs = [11, 16, 17, 18];
  const plans = [30, 60, 120];

  const priceMin = useMemo(() => {
    const prices = [1.9, 1.7, 0.9];
    // Como os destinos são em sequenciais, dá para subitrair o primeiro e criar uma sequência com um array de valores
    // Assim os valores e os destinos se tornam respectivos
    // Quando a Origem for o DD 11 é acrescentado R$ 1,00 no valor do minuto, pois existe esse padrão na tabela do exemplo
    return origin === 11 ? prices[destiny - 16] : prices[origin - 16] + 1;
  }, [destiny, origin]);

  const pricePlan = useMemo(() => {
    const timeNumber = Number(timeCall);
    if (timeNumber <= plan) {
      return '0.00';
    }
    const value = (timeNumber - plan) * (priceMin * 1.1);
    return value.toFixed(2);
  }, [timeCall, plan, priceMin]);

  const setDDD = useCallback(
    (type, value) => {
      if (type === 'origin') {
        setOrigin(value);
        setDestiny(value === 11 ? 16 : 11);
      } else {
        setDestiny(value);
        setOrigin(value === 11 ? 16 : 11);
      }
    },
    [setDestiny, setOrigin],
  );

  return (
    <Container>
      <Icon name="phone-classic" size={60} color="#f2630f" />
      <Title>Calculo da Ligação</Title>

      <ContainerRow>
        <View>
          <Label>Origem</Label>
          {DDDs.map((ddd) => (
            <Button
              key={ddd}
              active={origin === ddd}
              onPress={() => setDDD('origin', ddd)}>
              <Text style={{color: origin === ddd ? '#FFF' : '#333'}}>
                {ddd}
              </Text>
            </Button>
          ))}
        </View>
        <View>
          <Label>Destino</Label>
          {DDDs.map((ddd) => (
            <Button
              key={ddd}
              active={destiny === ddd}
              onPress={() => setDDD('destiny', ddd)}>
              <Text style={{color: destiny === ddd ? '#FFF' : '#333'}}>
                {ddd}
              </Text>
            </Button>
          ))}
        </View>
        <View>
          <Label>Plano</Label>
          {plans.map((planButton) => (
            <Button
              key={planButton}
              active={plan === planButton}
              onPress={() => setPlan(planButton)}>
              <Text style={{color: plan === planButton ? '#FFF' : '#333'}}>
                FaleMais {planButton}
              </Text>
            </Button>
          ))}
        </View>
      </ContainerRow>

      <ContainerRow style={{marginTop: 10}}>
        <Label>Tempo em minutos</Label>
        <InputTime
          keyboardType="number-pad"
          placeholder="0"
          value={timeCall}
          onChangeText={setTimeCall}
          returnKeyType="done"
        />
      </ContainerRow>

      <ContainerRow style={{marginTop: 10}}>
        <Label>Preço por minuto</Label>
        <Value>R$ {priceMin.toString().concat('0')}</Value>
      </ContainerRow>

      <ContainerRow style={{marginTop: 10}}>
        <Label>Com FaleMais</Label>
        <Value>R$ {pricePlan}</Value>
      </ContainerRow>

      <ContainerRow style={{marginTop: 10}}>
        <Label>Sem FaleMais</Label>
        <Value>R$ {(priceMin * Number(timeCall)).toFixed(2)}</Value>
      </ContainerRow>

      {/*
          <label>Tempo</label>
          <BoxInput isFocus={isFocused}>
            <TextInput
              name="timeCall"
              placeholder="20"
              value={timeCall}
              onChangeText={setTimeCall}
            />
          </BoxInput>
        </ContentInput>*/}
    </Container>
  );
};

export default Form;
