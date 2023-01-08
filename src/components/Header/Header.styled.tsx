import styled from "styled-components";
import { blue, grey } from "@mui/material/colors";

export const Wrapper = styled.div`
  padding: 10px 16px;
  background-color: ${blue[700]};
  color: ${grey[50]};

  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-profile {
    display: flex;
    gap: 8px;
  }

  .header_profile-name {
    cursor: pointer;
    display: flex;
    gap: 8px;
  }

  .header-navigation {
    cursor: pointer;
    display: flex;
    gap: 10px;
    text-transform: uppercase;
  }
`;
