import filterReactProps from '@pluralsight/ps-design-system-filter-react-props'
import * as glamor from 'glamor'
import Halo from '@pluralsight/ps-design-system-halo/react'
import Icon from '@pluralsight/ps-design-system-icon/react'
import PropTypes from 'prop-types'
import React from 'react'
import { defaultName as themeDefaultName } from '@pluralsight/ps-design-system-theme/react'

import css from '../css/index.js'
import * as vars from '../vars/index.js'

const styles = {
  error: _ => glamor.css(css['.psds-text-input__error']),
  field: ({ appearance, error, icon, iconAlign, themeName }) =>
    glamor.css(
      css['.psds-text-input__field'],
      css[`.psds-text-input__field--appearance-${appearance}`],
      icon && css[`.psds-text-input__field--icon-align-${iconAlign}`],
      css[`.psds-text-input__field.psds-theme--${themeName}`],
      error && css[`.psds-text-input__field--error.psds-theme--${themeName}`],
      {
        ':focus': {
          ...css['.psds-text-input__field:focus'],
          ...css[`.psds-text-input__field.psds-theme--${themeName}:focus`]
        }
      }
    ),
  fieldContainer: _ => glamor.css(css['.psds-text-input__field-container']),
  icon: ({ appearance, icon, iconAlign, themeName }) =>
    glamor.css(
      css['.psds-text-input__icon'],
      icon && css[`.psds-text-input__icon--icon-align-${iconAlign}`],
      css[`.psds-text-input__icon--appearance-${appearance}`],
      css[`.psds-text-input__icon.psds-theme--${themeName}`]
    ),
  input: ({ disabled, css: propsCss }) =>
    glamor.css(
      css['.psds-text-input'],
      disabled && css['.psds-text-input--disabled'],
      propsCss
    ),
  label: ({ themeName }) =>
    glamor.css(
      css['.psds-text-input__label'],
      css[`.psds-text-input__label.psds-theme--${themeName}`]
    ),
  subLabel: ({ themeName }) =>
    glamor.css(
      css['.psds-text-input__sub-label'],
      css[`.psds-text-input__sub-label.psds-theme--${themeName}`]
    )
}

const TextInput = (props, context) => {
  const themeName = context.themeName || themeDefaultName
  const allProps = { ...props, themeName }
  const { error, label, icon, style, subLabel, ...inputProps } = allProps

  return (
    <label
      {...styles.input(allProps)}
      {...(allProps.style ? { style: allProps.style } : null)}
      {...(allProps.className ? { className: allProps.className } : null)}
    >
      {label && <div {...styles.label(allProps)}>{label}</div>}

      <div {...styles.fieldContainer(allProps)}>
        <Halo error={error} gapSize={Halo.gapSizes.small}>
          <input
            {...filterReactProps(inputProps, { tagName: 'input' })}
            {...styles.field(allProps)}
            disabled={allProps.disabled}
            placeholder={allProps.placeholder}
            ref={allProps.innerRef}
          />
        </Halo>

        {icon && <div {...styles.icon(allProps)}>{icon}</div>}

        {error && (
          <div {...styles.error(allProps)}>
            <Icon id={Icon.ids.warning} />
          </div>
        )}
      </div>

      {subLabel && <div {...styles.subLabel(allProps)}>{subLabel}</div>}
    </label>
  )
}

TextInput.propTypes = {
  appearance: PropTypes.oneOf(Object.keys(vars.appearances)),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  icon: PropTypes.element,
  iconAlign: PropTypes.oneOf(Object.keys(vars.iconAligns)),
  label: PropTypes.node,
  placeholder: PropTypes.string,
  subLabel: PropTypes.node
}
TextInput.defaultProps = {
  appearance: vars.appearances.default,
  disabled: false,
  error: false,
  iconAlign: vars.iconAligns.left
}
TextInput.contextTypes = {
  themeName: PropTypes.string
}

TextInput.appearances = vars.appearances
TextInput.iconAligns = vars.iconAligns

export const appearances = vars.appearances
export const iconAligns = vars.iconAligns
export default TextInput
