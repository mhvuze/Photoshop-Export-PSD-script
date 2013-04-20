// Export PSD.jsx 1.0
// by Edward Loveall
// Based on Auto Save PSD.jsx 1.4
// by Joonas Pääkkö
// https://github.com/joonaspaakko

/*

    <javascriptresource>
    <name>$$$/JavaScripts/Menu=Export PSD</name>
    <category>layers</category>
    <enableinfo>true</enableinfo>
    </javascriptresource>

*/

// enable double clicking from the Macintosh Finder or the Windows Explorer
#target photoshop

// on localized builds we pull the $$$/Strings from a .dat file, see documentation for more details
$.localize = true;

try {

    // Get the currently active document.
    var doc         = app.activeDocument;

    // Find out of the file has an extension
    var noExtension = doc.name.indexOf('.') == -1;

    // No file extension = File has not been saved yet
    if ( noExtension ) {

        // An action is triggered to prompt save as dialog.
        // You'd think that this would be easy to do, but I
        // couldn't figure out a better way for doing this.
        app.doAction('save','Export Document');

    }
    // Extension exists = File has been saved at least once
    else {

        // Save the original file.
        doc.save();

    }

    ExportPSD( doc );

} // try end

catch( e ) {
    // remove comments below to see error for debugging
    // alert( e );
}

function ExportPSD( doc, docName ) {

    // Extenstion
    var ext                   = '.png';

    // Document name
    var docName               = doc.name;

    // Save Path
    var desktop               = '~/Desktop';

    // Gets rid of the extension
    var docName               = docName.substring( 0, docName.indexOf('.') );

    // Options for the soon to be exported
    var png_Opt               = new PNGSaveOptions();
    png_Opt.compression       = 9;    // High compression
    png_Opt.interlaced        = true; // Interlaced

    // Save active document in the Save folder
    doc.saveAs( File( desktop + '/' + docName + ext ), png_Opt, true );

} // ExportPSD() end
