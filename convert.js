var markdownpdf = require("markdown-pdf");
 
markdownpdf().from("./md/amb.md").to("./pdf/amb.pdf", function () {
  console.log("Done")
});