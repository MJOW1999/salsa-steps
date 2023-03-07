import React from "react";
import styled from "styled-components";

export interface BasicStepsProps {
  title?: string;
  description?: string;
}

export const BasicSteps = ({ title, description }: BasicStepsProps) => {
  return (
    <Basic>
      <Title>{title}</Title>
      <p>{description}</p>
    </Basic>
  );
};

const Basic = styled.div`
  max-width: 700px;
`;

const Title = styled.h2`
  margin: 24px 0 16px 0;
  font-weight: 600px;
  font-size: 18px;
`;

export default BasicSteps;
