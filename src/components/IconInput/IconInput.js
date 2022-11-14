import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    heightSize: 24,
    paddingTop: 4,
    paddingBottom: 3,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    heightSize: 36,
    paddingTop: 8,
    paddingBottom: 5,
  },
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {

  const styles = STYLES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper style={{'--size': styles.iconSize + 'px'}}>
        <Icon id={icon} size={styles.iconSize} />
      </IconWrapper>
      <TextInput {...delegated} 
        style={{
          '--width': width + 'px',
          '--height': styles.heightSize / 16 + 'rem',
          '--fontSize': styles.fontSize / 16 + 'rem',
          '--borderThickness': styles.borderThickness + 'px',
          '--paddingTop': styles.paddingTop + 'px',
          '--paddingBottom': styles.paddingBottom + 'px',
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
  color: inherit;
`;

const TextInput = styled.input`
  height: var(--height);
  width: var(--width);
  border: none;
  border-bottom: var(--borderThickness) solid ${COLORS.black};
  padding-left: var(--height);
  padding-top: var(--paddingTop);
  padding-bottom: var(--paddingBottom);
  color: inherit;
  font-weight: 700;
  outline-offset: 2px;
  font-size: var(--fontSize);

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline: 2px auto hsla(218, 57%, 53%, 1);
  }
`;

export default IconInput;
