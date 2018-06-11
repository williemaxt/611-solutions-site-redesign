//Function to add content to(aka open) the web cost tool
function openWebElement(){
  $('#web-cost-analysis').load('../611-solutions/elements/web-analysis.html');
  $('#open_web_btn').hide();
}
// function to close web element
function closeWebElement(){
$('#web-cost-analysis').empty();
$('#open_web_btn').show();
}
