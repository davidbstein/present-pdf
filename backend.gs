function JSONReturnObject(obj){
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}

function doGet(request) {
    let to_ret = {};
    to_ret.presos = JSON.parse(PropertiesService.getScriptProperties().getProperty("presos"));
    return JSONReturnObject(to_ret);
}

function setURLs(){
  PropertiesService.getScriptProperties().setProperty(
    "presos", JSON.stringify([
      ["example title", "example pdf url"]] // NOTE: replace www.dropbox.com...dl=0 with dl.dropbxousercontent.com...dl=1 to get a working dropbox link
    ])
  );
}