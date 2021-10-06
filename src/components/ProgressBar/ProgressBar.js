/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

const SIZES_STYLE = {
  small: {
    '--bar-height': '8px',
    '--border-radius': '4px',
  },
  medium: {
    '--bar-height': '12px',
    '--border-radius': '4px',
  },
  large: {
    '--bar-height': '16px',
    '--padding': '4px',
    '--border-radius': '8px',
  },
}
const ProgressBar = ({ value, size }) => {
  const styles = SIZES_STYLE[size]
  return (
    <Wrapper
      role='progressbar'
      aria-valuenow={value}
      value={value}
      aria-valuemin='0'
      aria-valuemax='100'
      max='100'
      style={styles}
    >
      <InnerBar value={value}>{value}</InnerBar>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  padding: var(--padding);
  border-radius: var(--border-radius);
`

const InnerBar = styled.div`
  height: var(--bar-height);
  width: ${(p) => p.value + '%'};
  background-color: ${COLORS.primary};
  color: transparent;
  border-radius: 4px;
  border-top-right-radius: ${(p) => (p.value > 98 ? '4px' : '0px')};
  border-bottom-right-radius: ${(p) => (p.value > 98 ? '4px' : '0px')};
`

export default ProgressBar
