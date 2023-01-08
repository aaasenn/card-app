import styled from 'styled-components';
import { grey } from '@mui/material/colors'

const softDropShadow = "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086), 0 100px 80px rgba(0, 0, 0, 0.12)"

export const Wrapper = styled.div`
  position: absolute;
  border-radius: 8px;
  padding: 10px 15px;
  box-shadow: ${softDropShadow};
  width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 3px solid ${grey[300]};
  background-color: ${grey[50]};
  box-sizing: border-box;

  .card-title {
    font-size: 14px;
    margin-bottom: 16px;
  }

  .card-word {
    font-size: 24px;
  }

  .card-example {
    margin-bottom: auto;
  }
`