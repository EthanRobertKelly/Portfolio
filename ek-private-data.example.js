// Private job data seed — DO NOT COMMIT (gitignored)
// Rename this file to ek-private-data.js to auto-seed localStorage on local open.
//
// To generate DATA:
//   1. Open job-searcher.html locally (or on the live site as Ethan)
//   2. Click "↓ Export XML" → copy the XML
//   3. Convert to JSON (or use the raw localStorage value from DevTools)
//   4. Paste the JSON string below as the value of DATA
//
// This script only seeds if the key is currently empty, so it won't overwrite existing data.

(function(){
  var DATA = null; // paste exported JSON string here, e.g.: '{"apps":[...],...}'
  if(DATA && !localStorage.getItem('ek-hq-v5')){
    localStorage.setItem('ek-hq-v5', DATA);
  }
})();
