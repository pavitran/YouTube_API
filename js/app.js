$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
  $.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&q=' + searchTerm + '&type=video&videoDefinition=high&key=AIzaSyC0-lhp-K9x5dBpKsvCp8MEejR3oDFNpOM', function(data){
    showResults(data.items);
  });
}

function showResults(results){
  var html = "";
  $.each(results, function(index,value){
    html += '<p>' + value.snippet.title + '</p>';
    html += "<a target=\"_blank\" href=\"https://www.youtube.com/watch?v=" +value.id.videoId+ "\">"
    html += "<img src=\"" +value.snippet.thumbnails.high.url+ "\"></a>"
    console.log(value.snippet.title);
  });
  $('#search-results').html(html);
}