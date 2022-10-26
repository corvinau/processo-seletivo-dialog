import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Card } from './styles';

const PersonalCard: React.FC<ICard> = ({ data }) => {
  return (
    <Container>
      {Object.keys(data).length !== 0 ? (
        data.map((item, index) => [
          <Link to='detalhes' key={index}>
            <Card key={index}>
              <img
                src={item.picture}
                alt='Foto do perfil'
                width='268'
                height='268'
              />
              <div>
                <b>Nome:</b> {item.name}
              </div>
              <div>
                <b>Idade:</b> {item.age}
              </div>
              <div>
                <b>Cor dos olhos:</b> {item.eyeColor}
              </div>
              <div>
                <b>Companhia:</b> {item.company}
              </div>
              <div>
                <b>E-mail:</b> {item.email}
              </div>
            </Card>
          </Link>,
        ])
      ) : (
        <></>
      )}
    </Container>
  );
};

export default PersonalCard;
