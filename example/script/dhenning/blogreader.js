define(['jquery'], function ($) {
		
	var reader = {};

	reader.data = null;
	reader.entryLimit = 10;
	
	reader.getData = function() {
		return $.getJSON('http://www.madcatswelt.org/feed/?feed=json&jsonp=?', function(data) {
			reader.data = data;
		});
	}
	
	reader.showData = function(element) {
		var entries = $('.entries', element);
		var entry, article, tags, tag;

		if(reader.data.length > 0) {
			entries.append('<h1>Letzte Blog-Eintr&auml;ge</h1>');

			for(var i in reader.data) {
				if(i < reader.entryLimit) {
					entry = reader.data[i];
					article = $('<article id="post-' + entry.id + '"></article>');
					article.append('<header><p class="date">' + entry.date + '</p><h2><a href="' + entry.permalink + '">' + entry.title + '</a></h2></header>');
					article.append('<div class="excerpt">' + entry.excerpt + '</div>');

					if(entry.tags.length > 0) {
						tags = $('<p class="tags"></p>');
						for(var j in entry.tags) {
							tag = entry.tags[j];
							tags.append('<span class="tag">' + tag.title + '</span>');
							
							if(j < (entry.tags.length - 1)) {
								tags.append(', ');
							}
						}

						article.append(tags);
					}

					entries.append(article);
				}
			}
		}
	}

	var exports = {};

	exports.init = function (element) {
		$("head").append("<link rel='stylesheet' href='script/dhenning/blogreader.css'>");

		reader.getData().complete(function() {
			reader.showData(element);
		});
	}

	return exports;
});