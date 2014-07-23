#meteor-commonstyles

To use, add this git repository to meteor smart.json and run  `mrt add`. 

Example `smart.json`:

	{
	  "packages": {
	    "meteor-commonstyles": {"git": "https://github.com/	commoncode/meteor-commonstyles"},
	  }
	}

##Using custom hostname for commonstyle.io

To use a hostname other than commonstyle.io, for example when running commonstyle.io on a local server, set the env variable `COMMONSTYLE_HOST` with the required host value before running your meteor app.

Example for localhost on port 3100:

	COMMONSTYLE_HOST="localhost:3100"

##Loading base stylesheet

To load the base commonstyle stylesheet, add `CommonStyle.load()` to your client `Meteor.startup()`. The `load()` method should only be called once. 

Example:

	Meteor.startup(function() {
	  CommonStyle.load();
	});

##Loading custom plugins and stylesheets

To load other css and js files, use the `CommonStyle.css()` and `CommonStyle.js()` functions, by passing in an array of relative css and js file paths.

Meteor application example:

	Meteor.startup(function() {
	  CommonStyle.css(['/lib/plugins/fullpage/jquery.fullPage.css']);
	  CommonStyle.js(['/lib/plugins/fullpage/jquery.fullPage.min.js','/lib/plugins/script.js']);
	  CommonStyle.load();
	});

###Loading files without the commonstyle.io base stylesheet

If you want to add files from commonstyle.io without loading the base stylesheet, run the load function with the parameter false. Example: `CommonStyle.load(false)`. This sets the parameter include_base to false and will only load file paths set explicitly via `CommonStyle.css()` and `CommonStyle.js()`.

###Loading files in meteor packages

When creating a meteor-commonstyles package, add files via `CommonStyle.js()` and `CommonStyle.css()`, do not call `CommonStyle.load()`.  The `load()` method will be called by the app.

Meteor package example:

	Meteor.startup(function() {
 	 CommonStyle.css(['/lib/plugins/fullpage/jquery.fullPage.css']);
 	 CommonStyle.js(['/lib/plugins/fullpage/jquery.fullPage.min.js','/lib/plugins/script.js']);
	}

