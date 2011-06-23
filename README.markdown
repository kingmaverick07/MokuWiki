# MokuWiki
MokuWiki is a wiki based on javascript and able to run without any kind of webserver, but just on your local machine.

## Comparison to TiddlyWiki
You might think: "Hey, there is such a thing already. It's called TiddlyWiki". Well, yes, and I'm not a great fan of it. It's got all this animation stuff, and tries to do all on one page, in one file. And while I'm sure there's some amazing use-cases for that and there are people who can't live without it, I want something different.

## Features
* Javascript + HTML + CSS
* Pages are stored in files. One page, one file.
  * You should be able to edit those files without opening the wiki, but do the editing in your favorite text editor
* Online Publishing (see below)
* Markup Language: Creole

### Online publishing
It is possible to publish a MokuWiki on the web. Just copy all the files to your webserver. No need for configuration, databases etc. Editing pages will not work, but people will be able to browse the wiki, even with browers that do not support editing the wiki (see Compatibility).

You should be able to find a demo at [tiefpunkt.github.com/MokuWiki](http://tiefpunkt.github.com/MokuWiki).

### Compatibility
So far, MokuWiki has been successfully tested in Firefox 3.6, Firefox 4.0 and IE8 on a Windows 7 machine, as well as Firefox 3.6 on a Ubuntu machine. Tests in Opera and Chrome on the same Win7 box have not been successful. This is largely due to missing support in the TiddlyIO library.

Since TiddlyIO is not required when accessing MokuWiki on the web, even browser that don't support access to the wiki locally might be supported. This is the case for Opera and Chrome on Win7.

## Libraries used
* jQuery v1.5.1 ([Homepage](http://jquery.com/))<br />
    Plugins:
  * getUrlParam ([Homepage](http://www.mathias-bank.de/2007/04/21/jquery-plugin-geturlparam-version-2/))
  * TextArea Resizer ([Homepage](http://plugins.jquery.com/project/TextAreaResizer))
* TiddlyIO ([GitHub Repository](https://github.com/tiefpunkt/tiddlyIO))
* JavaScript Creole 1.0 Wiki Markup Parser ([Homepage](http://www.ivan.fomichev.name/2008/04/javascript-creole-10-wiki-markup-parser.html))

## License
MokuWiki is released under the MIT license. See LICENSE.markdown for details.
