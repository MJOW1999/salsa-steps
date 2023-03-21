import React from "react";
import styled from "styled-components";

/** Steps prop will outline the movement on each of the initial steps */

export interface StepsProps {
  step?: number[];
  instruction?: string[];
}

const Steps = ({ step, instruction }: StepsProps) => {
  return (
    <>
      {step && instruction && (
        <ul>
          {step.map((item, idx) => {
            return <li key={idx}>{`Step ${item}: ${instruction[idx]}`}</li>;
          })}
        </ul>
      )}
    </>
  );
};
export default Steps;
