// TODO: replace with postcss-cssnext
const autoprefixer = require('autoprefixer')
const path = require('path')
const { fs, postcss } = require('@pluralsight/ps-design-system-build')
const postcssImport = require('postcss-import')

const autoprefixerOptions = { browsers: 'last 4 versions' }
const propNameTests = [
  { match: /psMotion/, props: ['transition-duration'] },
  { match: /psTypeFontFamily/, props: ['font-family'] },
  { match: /psTypeFontSize/, props: ['font-size'] },
  { match: /psTypeLetterSpacing/, props: ['letter-spacing'] },
  { match: /psTypeFontWeight/, props: ['font-weight'] },
  { match: /psTypeLineHeight/, props: ['line-height'] },
  {
    match: /psLayoutSpacing/,
    props: [
      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',
      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left'
    ]
  },
  { match: /psColors/, props: ['color', 'background-color'] }
]
const postcssCssVarSelectorsOptions = { propNameTests }
;(async _ => {
  await fs.mkdir('dist')

  const src = path.join('css', 'index.css')
  postcss.transform(src, path.join('dist', 'index.css'), [
    postcssImport,
    postcss.postcssCssVarSelectors(postcssCssVarSelectorsOptions),
    autoprefixer(autoprefixerOptions)
  ])

  postcss.transform(src, path.join('dist', 'index.module.scss'), [
    postcssImport,
    postcss.postcssCssVarSassVar(),
    autoprefixer(autoprefixerOptions)
  ])
})()
