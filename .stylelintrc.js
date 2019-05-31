module.exports = {
  extends: 'stylelint-config-primer',
  processors: ['stylelint-processor-html'],
  rules: {
    indentation: 2,
    'max-nesting-depth': 2,
    'plugin/no-unsupported-browser-features': [true, {
      ignore: [
        'flexbox',
        'outline',
        'pointer',
        'css-masks',
        'object-fit',
        'multicolumn',
        'transforms3d',
        'border-image',
        'css-clip-path',
        'css-gradients',
        'viewport-units',
        'css-appearance',
        'css-touch-action',
        'font-unicode-range',
        'css3-cursors-newer'
      ]
    }],
    'declaration-no-important': [true, {
      message: '!important is not a scalable solution.'
    }]
  }
}
