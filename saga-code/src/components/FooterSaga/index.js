import styled from 'styled-components'
import LogoSaga from '../LogoSaga'

const FooterSaga = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
font-size: 15px;
background-color: var(--color-grey);
color: var(--color-white);
padding: 5px 5px;
border-top: 3px solid purple;

& > ${LogoSaga} {
margin-bottom: 20rem;

}
`;
export default FooterSaga