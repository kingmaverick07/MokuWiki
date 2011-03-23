/*
*  JSwiki
*
*   Copyright (c) 2011 Severin Schols
*    Licensed under the MIT license. See LICENSE.markdown for details.
*/

/* BEGIN Configuration */
var config = {
  name: "JSwiki",
  default_page: "home"
}
/* END Configuration */

/* BEGIN Page class */
/**
    Creates a new JSwiki Page.
    @class Represents a JSwiki page. 
 */ 
function Page(name) {
  this.name = name
  this.title = name;
  this.hasOwnTitle = false;
  this.tiddlyIO = new TiddlyIO();
  this.converter = new Showdown.converter();
  this.text = '';
  
  var localPath = this.tiddlyIO.localPath;
  if((p = localPath.lastIndexOf("/")) != -1)
    this.path = localPath.substr(0,p) + "/";
  else if((p = localPath.lastIndexOf("\\")) != -1)
    this.path = localPath.substr(0,p) + "\\";
  else
    this.path = localPath + ".";
  this.path += "data" + this.tiddlyIO.separator + this.name + ".txt";
}

/* page.load(): Load the page from the file system */
Page.prototype.load = function () {
  this.setText( this.tiddlyIO.loadFile(this.path) );
}

/* page.save(): Save the page to the file system */
Page.prototype.save = function () {
  var output = this.tiddlyIO.saveFile(this.path, this.text);
  return output;
}

/* page.getHTML(): Runs Markdown interpreter over the page content and returns the resulting HTML */
Page.prototype.getHTML = function () {
  var output;
  if (this.text != null) {
    var text = this.text.replace(/^#[^#\n]+/, ""); //Remove first headline from text
    output = this.converter.makeHtml(text);
  } else {
    output = "Error: Page is empty!<br/>Maybe you didn't create it yet?";
  }
  return output;
}

/* page.setText(text): Set Text and update page title */
Page.prototype.setText = function (text) {
  this.text = text;
  var headlinePattern = /^#([^#\n]+)/;
  var match = headlinePattern.exec(this.text);
  if (match === null) {
    this.title = this.name
    this.hasOwnTitle = false;
  } else {
    this.title = match[1];
    this.hasOwnTitle = true;
  }
}
/* END Page class */

  $(document).ready(function() { 
    // jQuery textarea resizer plugin usage
    $('textarea.resizable:not(.processed)').TextAreaResizer();
    
     // Set wiki name
    $('#wiki_name').html(config.name);

    // Determine page title
    var page_title = config.default_page;
    if ($.getURLParam("page") != null) {
      page_title = $.getURLParam("page");
    }

    // Load given page from file
    var page = new Page(page_title);
    page.load();

    // Insert page contents into site
    $('#page_title').html(page.title);
    $('#page_content').html(page.getHTML());
    $('#page_content_edit').html(page.text);
    document.title = config.name + " - " + page.title;

    // Save page
    $('#page_content_edit_save').click(function(event) {
      event.preventDefault();
      page.setText( $('#page_content_edit').val() );
      var r = page.save();
      if (r) {
        $('#page_content').html(page.getHTML());
        $('#page_title').html(page.title);
        document.title = config.name + " - " + page.title;
      } else {
        alert("Error while saving");
      }
	  $('#page_content_editor').slideUp('slow');
	  $('#page_content_edit_bar').slideDown();
    });
	
	// Cancel Editing
	$('#page_content_edit_cancel').click(function(event) {
	  $('#page_content_edit').html(page.text);
	  $('#page_content_editor').slideUp('slow');
	  $('#page_content_edit_bar').slideDown();
	});
	
	// Open Editor
	$('#page_content_edit_start').click(function(event) {
	  $('#page_content_edit_bar').slideUp();
	  $('#page_content_editor').slideDown('slow');
	});
  });
