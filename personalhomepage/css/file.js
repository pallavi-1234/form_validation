$(document).ready(function()
{
    $('#input').click(function()
    {

    $.ajax(
    {
		 url:"books.xml",
		 dataType:"xml",
		 success: function(data)
		 {
		        $(data).find('book').each(function()
		        {


var category = $(this).attr("category");
					var title = $(this).find("title").text();
					var authors = [];
					$(this).find("author").each(function(){
						authors.push($(this).text());
					});
					authors = authors.join(", ");
					var year = $(this).find("year").text();
					var price = $(this).find("price").text();
					
					var $row = $("<tr></tr>");
					$row.append("<td>" + title + "</td>");
					$row.append("<td>" + authors + "</td>");
					$row.append("<td>" + year + "</td>");
					$row.append("<td>" + price + "</td>");
					$row.append("<td>" + category + "</td>");
					
					$("#table-body").append($row);
                   $('table').css('border','5px solid black');
		        $('table').css('text-align','center');
				$('td').css('border','1px solid black');
				$('td').css('padding','10px');
				$('th').css('border','1px solid black');
				$('th').css('padding','10px');					});
		        		}, error: function()
		{
			alert("Error Loading The File !");
		}
	});
});
});