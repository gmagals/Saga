import React, { Fragment } from 'react'
import LogoSaga from './components/LogoSaga/index.js'
import HeaderSaga from './components/HeaderSaga/index'
import ButtonSaga from './components/ButtonSaga/index'
import FooterSaga from './components/FooterSaga/index'
import LinkSaga from './components/LinkSaga/index'
import HighLightSaga from './components/HighLightSaga/index'

function App() {
  return (
    <Fragment> {/*<> = Fragment. Também poderia ser uma div*/}
      <HeaderSaga>
        <LogoSaga />
        <ButtonSaga> Novo vídeo </ButtonSaga>
      </HeaderSaga>

      <FooterSaga>
        <LogoSaga />
        <p>Site feito na <HighLightSaga >#Imersão React</HighLightSaga > da {' '}<LinkSaga href="https://alura.com.br">Alura</LinkSaga>
        </p>
      </FooterSaga>

    </Fragment>
  );
}

export default App;
