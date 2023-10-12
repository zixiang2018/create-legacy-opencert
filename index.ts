const openCert = require("@govtechsg/open-certificate");
const fs = require("fs");
const path = require("path");
const exampleCert = require("./raw/sample-cert.1.5.json");
const schema = require("./schemas/schema.1.5.json"); // replace schema file name if needed

(async () => {
  const issuedCert = openCert.issueCertificate(exampleCert, schema);
  fs.writeFileSync(
    path.join(__dirname, "./output/issued-cert.1.5.json"), // replace naming if needed
    JSON.stringify(issuedCert)
  );
})();
