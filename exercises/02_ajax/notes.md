# Ajax app

This exercise will teach you how to use AJAX with React, so that you'll be able to send requests to API's in your React apps. You'll also be introduced to *refs*, *findDOMNode*, *getDefaultProps* and *propTypes*.

You'll be creating an app using the iTunes Search API, where the users can search for various products on iTunes.

The search area should include both an input field and a select option. The former is get the search query from the user, the latter for specifying the iTunes section (film, music, apps, podcasts etc).

Based on this, you'll show the user the most relevant products from iTunes.

To get started, clone this repo. We've linked to the jQuery CDN for you in the HTML file. Your React components ought to be added in main.js.

## 1. Break the UI into components

Check out this tutorial on how to break you UI into components

## 2. Code a static version

Remember to add propTypes to verify that the props the components are getting are correct.

## 3. Fetch the users inputs

Use refs and findDOMNode to get the users inputs.

## 4. Compose the Ajax request

In whatever component you'll want to send the Ajax request from, add a following method:

	sendAjax: function(query, option){
		$.ajax({
			// compose the Ajax call
		});
	}



## Stretch goals:

If you finish up early, do the following streatch goals:

* Save feature  
The ability save items in the search results to another list.

* 