import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const AlertComponent = ({ message = 'This is a CoronaVirus alert' }) => (
  <span>{message}</span>
)

AlertComponent.propTypes = {
  message: PropTypes.string,
}

const StyledAlertComponent = styled.div`
  color: red;
  font-family: Artifika;
`

export default (props) => (
  <StyledAlertComponent>
    <AlertComponent {...props} />
  </StyledAlertComponent>
)