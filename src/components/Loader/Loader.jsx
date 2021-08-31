import { useState } from "react";
import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";

const override = css`
  display: block;
  margin: 100px auto;
`;

export default function Spinner() {
  return (
      <PacmanLoader color="#ab2330" loading={useState(true)} css={override} size={50} />
  );
}