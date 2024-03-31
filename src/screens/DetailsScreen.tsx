//@ts-ignore

import { Text, View } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import ReadabilityView from 'react-native-readability';
import { RootStackParams } from 'src/routes/RootStackParams';
import { observer } from 'mobx-react-lite';

type Props = NativeStackScreenProps<RootStackParams, 'DetailsScreen'>;
const DetailsScreen = ({ route }: Props) => {
  const css = `
  body {
    color: #2a2a2a;
    font-family: sans-serif, Roboto, monospace;
  }
  img, figure {
    display: none;
  }
  h1 {
    border-bottom-width: 1px;
    border-color: #ccc;
    padding-bottom: 3px;
    border-bottom-style:solid;
    font-size: 1.6em;
    font-weight: bold;
    letter-spacing: .05em;
  }
  p {
    letter-spacing: .03em;
  }
`;
  return <ReadabilityView url={route.params.url} htmlCss={css} />;
};

export default observer(DetailsScreen);
