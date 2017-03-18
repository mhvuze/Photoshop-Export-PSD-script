# Simple export of a Photoshop document to PNG

This is a fork of the [Auto Save PSD](https://github.com/joonaspaakko/Photoshop-Auto-Save-PSD-script) script by [joonaspaakko](https://github.com/joonaspaakko). It's modified to export PNG images of the document to the Desktop (or any other folder with minimal configuration). So, if you're working on Picture.psd, running this script will create Picture.png on the desktop.

Furthermore, this fork uses incremental naming.

# Installation

Place the `Export-PSD.jsx` at `{Photoshop_root}\Presets\Scripts\Export-PSD.jsx` and restart Photoshop.

# Change save directory

In the `Export-PSD.jsx` file, change the line that looks like

    var desktop               = '//some//path//';

Change the `//some//path//` bit to whatever path you'd like.
