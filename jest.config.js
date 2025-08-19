module.exports = {
  reporters: [
    "default",
    [
      "jest-html-reporter",
      {
        pageTitle: "Laporan Hasil Testing API",
        outputPath: "reports/test-report.html",
        includeConsoleLog: true,
        includeFailureMsg: true,
        theme: "defaultTheme"
      }
    ]
  ]
};
