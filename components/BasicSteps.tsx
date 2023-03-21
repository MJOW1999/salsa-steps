import React from "react";
import styled from "styled-components";
import Steps from "./shared/Steps";

export interface BasicStepsProps {
  title?: string;
  description?: string;
}

export const BasicSteps = ({ title, description }: BasicStepsProps) => {
  return (
    <Basic>
      <Title>{title}</Title>
      <p>{description}</p>
      <section>
        <Steps
          step={[1, 2, 3, 5, 6, 7]}
          instruction={[
            "Step forward with your left foot",
            "Step on the same spot with your right foot",
            "Step backwards to your original spot with your left foot",
            "Step backwards with your right foot",
            "Step on the same spot with your left foot",
            "Step forward to your original spot with your right foot",
          ]}
        />
      </section>
    </Basic>
  );
};

const Basic = styled.div`
  max-width: 700px;
  font-family: "Tahoma";
  line-height: 1.5;
`;

const Title = styled.h2`
  margin: 24px 0 16px 0;
  font-weight: 600px;
  font-size: 18px;
  font-family: "Arial";
`;

export default BasicSteps;
