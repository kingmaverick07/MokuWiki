# JSwiki
JSwiki is (going to be) a wiki based on javascript and able to run without any kind of webserver, but just on your local machine.

## Comparison to TiddlyWiki
You might think: "Hey, there is such a thing already. It's called TiddlyWiki". Well, yes, and I'm not a great fan of it. It's got all this animation stuff, and tries to do all on one page, in one file. And while I'm sure there's some amazing use-cases for that and there are people who can't live without it, I want something different.

## Features
* Javascript + HTML + CSS
* Pages are stored in files. One page, one file.
  * You should be able to edit those files without opening the wiki, but do the editing in your favorite text editor
* Markup-Language: Markdown
  * Still needs some extensions to be able to easily link to Wiki pages
* So far, only Firefox is supported. TiddlyIO should work on other browsers as well, but some other coding doesn't (yet)
* `$imagination`
 
## Libraries used
* jQuery v1.5.1 ([Homepage](http://jquery.com/))<br />
    Plugins:
  * getUrlParam ([Homepage](http://www.mathias-bank.de/2007/04/21/jquery-plugin-geturlparam-version-2/))
  * TextArea Resizer ([Homepage](http://plugins.jquery.com/project/TextAreaResizer))
* Showdown ([Original Homepage](http://www.attacklab.net/) (currently offline))
* TiddlyIO ([GitHub Repository](https://github.com/tiefpunkt/tiddlyIO))