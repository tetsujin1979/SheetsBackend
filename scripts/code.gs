const sheetName = "Sheet1";
const spreadSheetId = "<spreadsheet id>";
const activeSpreadSheet = SpreadsheetApp.openById(spreadSheetId);
const sheet = activeSpreadSheet.getSheetByName(sheetName);

function doGet() {
  const employees = sheet.getDataRange().getValues();
  const jsonData = employees.map(e => {
    return {
      id: Number(e[0]),
      firstName: e[1],
      surName: e[2]
    }
  });
  return ContentService.createTextOutput(JSON.stringify(jsonData)).setMimeType(ContentService.MimeType.JSON);  
}
