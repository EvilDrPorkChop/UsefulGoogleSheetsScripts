function checkDigit() {
  ss = SpreadsheetApp.getActiveSpreadsheet();
  sheets = ss.getSheets();
  s = sheets[0];
  var r = s.getRange("A:A");
  var w = s.getRange("B:B");
  var v = r.getValues();
  for(var i = 0; i < v.length; i++) {
    var hold = v[(1, (i))].toString();
    if(hold != null){
    var array = hold.split("").reverse();
    var total = 0;
    var j = 1;
    array.forEach((number) => {
      number = parseInt(number);
      if (j % 2 === 0) {
        total = total + number;
      } else {
        total = total + number * 3;
      }
      j++;
    });
    SpreadsheetApp.getActiveSpreadsheet()
      .getSheetByName("Sheet1")
      .getRange((i + 1), 2)
      .setValue(Math.ceil(total / 10) * 10 - total);
    }
  }
}
