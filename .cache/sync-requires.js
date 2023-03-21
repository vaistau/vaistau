
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/vaiva/Code/vaivas_computer/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/vaiva/Code/vaivas_computer/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/home/vaiva/Code/vaivas_computer/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/home/vaiva/Code/vaivas_computer/src/pages/index.js")),
  "component---src-pages-work-js": preferDefault(require("/home/vaiva/Code/vaivas_computer/src/pages/work.js"))
}

