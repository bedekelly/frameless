# Image Viewer
A minimal image viewer for MacOS.

![IBM Datacenter](screenshot.png)

This came about because I needed a quick way of comparing a design for a webpage to the one in the browser, and the MacOS default Preview app had frames which got in the way of direct side-by-side comparison.

## Usage:

* Drag-and-drop a file from Finder anywhere onto the window to open it
* Click-and-drag anywhere on the window to move it
* Resize the window to automatically grow/shrink the image
* Use the controls on the bottom left if zooming is needed
* Toggle "always-on-top" behaviour in the menu bar

## Installation:

* Clone the repository
* `yarn && yarn make`
* Copy `out/Image Viewer-x-x/Image Viewer.app` into `Applications`
