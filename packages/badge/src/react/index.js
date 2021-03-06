import * as glamor from 'glamor'
import React from 'react'
import PropTypes from 'prop-types'

import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import { withTheme } from '@pluralsight/ps-design-system-theme/react'

import css from '../css'
import { defaultWithColor, subtleThemeWithColor } from '../js'
import * as vars from '../vars'

const styles = {
  badge: props =>
    glamor.css(
      css['.psds-badge'],
      props.appearance === appearances.default
        ? css[defaultWithColor(props.color)]
        : css[subtleThemeWithColor(props.themeName, props.color)]
    )
}

const Badge = props => (
  <div {...styles.badge(props)} {...filterReactProps(props)} />
)

Badge.appearances = vars.appearances
Badge.colors = vars.colors

Badge.propTypes = {
  appearance: PropTypes.oneOf(Object.values(vars.appearances)),
  color: PropTypes.oneOf(Object.values(vars.colors))
}

Badge.defaultProps = {
  appearance: vars.appearances.default,
  color: vars.colors.gray
}

export const appearances = vars.appearances
export const colors = vars.colors

export default withTheme(Badge)
