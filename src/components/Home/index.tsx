import React, { FC } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import { Container, List } from 'semantic-ui-react';

import { characterData } from '../../characterData';
import './index.css';

const codes = Object.keys(characterData);

const Home: FC<{}> = () => (
  <>
    <Helmet>
      <title>作品紹介 ｜ はねバド！</title>
    </Helmet>
    <header>
      <h1>『はねバド！』作品紹介</h1>
    </header>
    <Container className="sammary">
      <p>
        『はねバド！』は濱田浩輔による日本の漫画。高校女子バドミントンを題材にした作品で、『good！アフタヌーン』（講談社）にて2013年32号より現在も連載中。
      </p>
    </Container>
    <h2>登場人物</h2>
    <List as="ul">
      {codes.map(code => (
        <List.Item as="li" key={code}>
          <Link to={`/characters/${code}`}>{characterData[code].school}</Link>
        </List.Item>
      ))}
    </List>
  </>
);

export default Home;
