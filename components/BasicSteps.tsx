import React from "react";
import styled from "styled-components";

export interface BasicStepsProps {
  title?: string;
  description?: string;
}

export const BasicSteps = ({ title, description }: BasicStepsProps) => {
  return (
    <Basic>
      <h2>{title}</h2>
      <p>{description}</p>
    </Basic>
  );
};

const Basic = styled.div`
  max-width: 700px;
`;

export default BasicSteps;
