
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("C:\\Users\\jkl\\Projects\\Arseniy\\cv-website\\src\\pages\\404.js")),
  "component---src-pages-about-js": preferDefault(require("C:\\Users\\jkl\\Projects\\Arseniy\\cv-website\\src\\pages\\about.js")),
  "component---src-pages-company-history-js": preferDefault(require("C:\\Users\\jkl\\Projects\\Arseniy\\cv-website\\src\\pages\\company\\history.js")),
  "component---src-pages-company-index-js": preferDefault(require("C:\\Users\\jkl\\Projects\\Arseniy\\cv-website\\src\\pages\\company\\index.js")),
  "component---src-pages-contact-js": preferDefault(require("C:\\Users\\jkl\\Projects\\Arseniy\\cv-website\\src\\pages\\contact.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\jkl\\Projects\\Arseniy\\cv-website\\src\\pages\\index.js"))
}

