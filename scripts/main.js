/* BEGIN Page class */
/**
    Creates a new JSwiki Page.
    @class Represents a JSwiki page. 
 */ 
function Page(title) {
	this.title = title;
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
	this.path += "data\\" + this.title + ".txt";
}

/* page.load(): Load the page from the file system */
Page.prototype.load = function () {
	this.text = this.tiddlyIO.loadFile(this.path);
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
		output = this.converter.makeHtml(this.text);
	} else {
		output = "Error: Page is empty!<br/>Maybe you didn't create it yet?";
	}
	return output;
}
/* END Page class */

/* jQuery textarea resizer plugin usage */
  $(document).ready(function() {  	
    $('textarea.resizable:not(.processed)').TextAreaResizer();
	var page_title = 'Home';
	if ($.getURLParam("page") != null) {
		var page_title = $.getURLParam("page");
	}
	var page = new Page(page_title);
	page.load();
    $('#page_title').html(page.title);
    $('#page_content').html(page.getHTML());
    $('#page_content_edit').html(page.text);
	
	$('#page_content_edit_save').click(function(event) {
		event.preventDefault();
		page.text = $('#page_content_edit').val();
		var r = page.save();
		if (r) {
			 $('#page_content').html(page.getHTML());
		} else {
			alert("Error while saving");
		}
		
	});
  });