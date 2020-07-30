import styled from 'styled-components'
import ButtonSaga from '../ButtonSaga/index'
import LogoSaga from '../LogoSaga/index'

const HeaderSaga = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 30px 40px;
background-color: var(--color-grey);;
border-bottom: 3px solid purple;

@media(max-width: 800px) {
    justify-content: center;
    padding: 15px 16px;
    & > ${LogoSaga}{
        height: 35px;
    }
    & > ${ButtonSaga} {
        background-color: #2f343d;
        border-radius: 0;
        border: 0;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100vw; 
    } 
}
`;
export default HeaderSaga

//background: linear-gradient(to right, rgb(83, 105, 118), rgb(41, 46, 73) )
