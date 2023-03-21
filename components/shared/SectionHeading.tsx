import React from "react";
import styled from "styled-components";

export const SectionHeading = styled.h2`
  position: relative;
  margin: 0;
  padding-bottom: 8px;
  font-weight: 900;
  font-size: 20px;
  letter-spacing: 0.3em;
  text-transform: uppercase;

  &::before {
    position: absolute;
    bottom: 0;
    left: 0;
    display: block;
    width: 40px;
    border-bottom: 4px;
    content: "";
  }
`;

export default SectionHeading;
