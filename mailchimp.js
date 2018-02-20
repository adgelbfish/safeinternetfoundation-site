let document = document || {
  getElementsByTagName: () => {},
  createElement: () => {}
};
let chimp = function (c, h, i, m, p) {
  m = c.createElement(h), p = c.getElementsByTagName(h)[0], m.async = 1, m.src = i, p.parentNode.insertBefore(m, p)
}
chimp(document, "script", "https://chimpstatic.com/mcjs-connected/js/users/b17bb4f8571c5a3c4c162f730/a57b32c343e45dd796cc62435.js")