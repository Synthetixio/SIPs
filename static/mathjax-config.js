// https://docs.mathjax.org/en/latest/web/configuration.html#using-a-local-file-for-configuration
window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)']],
    displayMath: [['\\[', '\\]']],
  },
  svg: {
    fontCache: 'global',
  },
  'HTML-CSS': {
    linebreaks: { automatic: true },
  },
  SVG: {
    linebreaks: { automatic: true },
  },
}
