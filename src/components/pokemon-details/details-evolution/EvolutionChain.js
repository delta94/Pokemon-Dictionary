import React from "react";
import { View, Text } from "react-native";
import { styled } from "@shipt/react-native-tachyons/dist/styled";
import { commonStyles } from "../../../styles/styleConfig";
import uuid from "../../../utils/uuid";
import useEvolutionSearch from "../../../hooks/useEvolutionSearch";
import EvolutionLink from "./EvolutionLink";

const EvolutionInfoContainer = styled(View)`mt5 mh6 mb4`;
const EvolutionHeaderText = styled(Text, commonStyles.detailsHeaderTitleText)``;

const EvolutionChain = ({ url, evolution_ID }) => {
  const [fetchEvolutionResults, results, error] = useEvolutionSearch(
    url,
    `@POKEMON_EVOLUTION_CHAIN_${evolution_ID}`,
    "EVOLUTION_CHAIN"
  );

  return (
    <EvolutionInfoContainer>
      <EvolutionHeaderText>Evolutions: </EvolutionHeaderText>
      {results.length != 0
        ? results.map((item) => {
            return <EvolutionLink key={uuid()} link={item} />;
          })
        : null}
    </EvolutionInfoContainer>
  );
};

export default EvolutionChain;
