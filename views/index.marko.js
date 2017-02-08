function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<!DOCTYPE html> <html lang=\"en\"> <head> <title>" +
      escapeXml(data.name) +
      "</title> </head> <body> <h1>" +
      escapeXml(data.name) +
      "!!!</h1> <ul> ");

    for (var i=1; i <= 100; i++) {
      out.w(" ");

      if ((i % 15) === 0) {
        out.w(" <li style=\"color:red\">FizzBizz</li> ");
      } else if ((i % 5) === 0) {
        out.w(" <li style=\"color:blue\">Bizz</li> ");
      } else if ((i % 3) === 0) {
        out.w(" <li style=\"color:green\">Fizz</li> ");
      } else {
        out.w(" <li style=\"color:orange\">" +
          escapeXml(i) +
          "</li> ");
      }

      out.w(" ");
    }

    out.w(" </ul> </body> </html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
