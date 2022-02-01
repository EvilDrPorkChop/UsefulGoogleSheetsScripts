function deleteRows() {
  ss = SpreadsheetApp.getActiveSpreadsheet();
  sheets = ss.getSheets();
  for (let j = 0; j < sheets.length; j++){
  var s = sheets[j];
  var r = s.getRange('A:A');
  var v = r.getValues();
  for(var i=v.length-1;i>=0;i--)
    if(v[0,i]=='text to delete')
      s.deleteRow(i+1);
  }
}
