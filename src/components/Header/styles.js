import styled from 'styled-components';
import {primaryColor, primeryDarkColor} from '../../config/colors'


export const Nav = styled.nav`
      background: ${primaryColor};
      padding:20px;
      display:flex;
      align-items: center;
      justify-content: center;

      a{
        color: #FFF;
        margin:0 20px 0 0;
        font-weight: bold;
      }
`;
