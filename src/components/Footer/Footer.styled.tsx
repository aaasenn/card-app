import styled from 'styled-components';
import { blue, grey } from '@mui/material/colors';

export const Wrapper = styled.div`
  padding: 10px 20px;
  color: ${grey[50]};
  background-color: ${blue[700]};

  .footer_medias {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .footer_media-title {
    align-self: center;
  }

  .footer_medias-icons {
    align-self: center;
    justify-self: center;
    ul {
      padding: 0;
      list-style-type: none;
      display: flex;
      gap: 10px;
      justify-content: center;

      li {
        cursor: pointer;
      }
    }
  }
`;