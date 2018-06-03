import styled from 'styled-components';

import {
  Container as ContainerBase,
} from 'native-base';

import { FLEX } from './uiVars';

export const Container = styled(ContainerBase)`
  flex: ${FLEX.ONE};
  background-color: white;
`;

export const Content = {
  flex: FLEX.ONE,
  alignItems: 'center',
  justifyContent: 'center',
};

export const ModalContent = {
  alignItems: 'center',
  flex: FLEX.ONE,
  justifyContent: 'center',
};
