var tasks = []; // global task objects array
var index =  1;
// create application
App = Ember.Application.create({});

App.Router.map( function() {
	this.resource( 'login');
});

//default route. just add a simple task to the list.
App.IndexRoute = Ember.Route.extend({
	model: function() {
		//return App.MariMedia.addTask('default title','default description', 'default date');
		return App.MariMedia.getTask(); // get Tasks from DB
	}
});

// create the controller so you can trap the input action and act on it
App.IndexController = Ember.ObjectController.extend( {
	userName: "Moshe Masas",

	status:function(){
   		
		 isChecked = $('li[rel='+this.index+']').attr('isChecked');
		
   		 if('No' == isChecked)
   		 {
   		 	$('li[rel='+this.index+']').attr('isChecked','Yes') 
   		 	$('li[rel='+this.index+']').addClass("through");
   		 }
   		 else
   		 {
   		 	$('li[rel='+this.index+']').attr('isChecked','No') 
   		 	$('li[rel='+this.index+']').removeClass("through");
   		 }


 	 },


	loadList: function() {
		// Grab the value from the input field
		var title 		= this.get('title');
		var description = this.get('description');
		var date		= this.get('date');

		if (title && description && date)
		{
		
			this.set('model',App.MariMedia.addTask( title, description, date) );
			
			// clear out the input fields
			this.set('title', '');
			this.set('description', '');
			this.set('date', '');
			this.set('ERR','');
		}
		else
		{
			// input data missing
			this.set('ERR','Please fill all inputs fields');
		}

	}
})

// our MariMedia model

App.MariMedia = Ember.Object.extend({

	index: function() {	
		return index++;
	}.property('index')

});


App.MariMedia.reopenClass({

	addTask: function(title,description,date) 
	{
		tasks.pushObject(App.MariMedia.create({title:title,description:description,date:date})); 
	  	return tasks;		
	},

	getTask: function() 
	{
			$.getJSON("http://localhost/marimedia/api.php").then(function(response) {
				console.log(response.success);
				if(response.success){
					$.each(response.data, function(index, task) {
    			 			tasks.pushObject(App.MariMedia.create({title:task.title,description:task.description,date:task.date})); 
   				 	});	
				}
			});	
		return tasks;
	}

});

