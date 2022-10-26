import React from 'react';
import { Link } from 'react-router-dom';

import { useSocial } from '../../hooks/social';

import { Container, Card } from './styles';

const PersonalCard: React.FC<ICard> = ({ data }) => {
  const { setIndex } = useSocial();

  return (
    <Container>
      {Object.keys(data).length !== 0 ? (
        data.map((item, index) => [
          <Link to='detalhes' key={index}>
            <Card
              key={index}
              id={`${index}`}
              onClick={(e) => setIndex(e.currentTarget.id)}>
              <img src={item.picture} alt='Foto do perfil' id={`${index}`} />
              <div id={`${index}`}>
                <b>Nome:</b> {item.name}
              </div>
              <div id={`${index}`}>
                <b>Idade:</b> {item.age}
              </div>
              <div id={`${index}`}>
                <b>Cor dos olhos:</b> {item.eyeColor}
              </div>
              <div id={`${index}`}>
                <b>Companhia:</b> {item.company}
              </div>
              <div id={`${index}`}>
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
