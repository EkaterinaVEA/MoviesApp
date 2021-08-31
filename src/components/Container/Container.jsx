import PropTypes from 'prop-types'
import { ContainerStyle } from './Container.styles'

const Container = ({ children }) => {
  return <ContainerStyle>{children}</ContainerStyle>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container