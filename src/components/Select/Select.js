import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>

      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationaBit>
        {displayedValue}
        <IconWrapper style={{'--size': 24 + 'px'}}>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </PresentationaBit>

    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  /* Allow the select to span the full height in Safari */
  -webkit-appearance: none;
`;

const PresentationaBit = styled.div`
  padding: 12px 16px;
  padding-right: 52px;
  color: ${COLORS.gray700};
  font-size: ${16 / 16}rem;
  background-color: ${COLORS.transparentGray15};
  font-family: 'Roboto', sans-serif;
  line-height: 19px;
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 5px auto hsla(218, 57%, 53%, 1);
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);
  pointer-events: none;
`

export default Select;
