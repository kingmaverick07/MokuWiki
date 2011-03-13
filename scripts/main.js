function openPage(page_title) {	
	var tiddlyIO = new TiddlyIO();
	var localPath = tiddlyIO.localPath;
	var pagePath;
	if((p = localPath.lastIndexOf("/")) != -1)
		pagePath = localPath.substr(0,p) + "/";
	else if((p = localPath.lastIndexOf("\\")) != -1)
		pagePath = localPath.substr(0,p) + "\\";
	else
		pagePath = localPath + ".";
	pagePath += "data\\" + page_title + ".txt";
	var output = tiddlyIO.loadFile(pagePath);
	return output;
}

function savePage(page_title, content) {
	var tiddlyIO = new TiddlyIO();
	var localPath = tiddlyIO.localPath;
	var pagePath;
	if((p = localPath.lastIndexOf("/")) != -1)
		pagePath = localPath.substr(0,p) + "/";
	else if((p = localPath.lastIndexOf("\\")) != -1)
		pagePath = localPath.substr(0,p) + "\\";
	else
		pagePath = localPath + ".";
	pagePath += "data\\" + page_title + ".txt";
	var output = tiddlyIO.saveFile(pagePath, content);
	return output;
}



/* jQuery textarea resizer plugin usage */
  $(document).ready(function() {  	
    $('textarea.resizable:not(.processed)').TextAreaResizer();
	var page_title = 'Home';
	if ($.getURLParam("page") != null) {
		var page_title = $.getURLParam("page");
	} 
	var page_text = openPage(page_title);
    $('#page_title').html(page_title);
    $('#page_content').html(page_text);
    $('#page_content_edit').html(page_text);
	$('#page_content_edit_save').click(function(event) {
		event.preventDefault();
		var r = savePage(page_title, $('#page_content_edit').val());
		if (r) {
			alert("Page saved!");
			 $('#page_content').html( $('#page_content_edit').val());
		} else {
			alert("Error while saving");
		}
		
	});
  });