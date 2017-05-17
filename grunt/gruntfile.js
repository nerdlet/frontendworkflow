module.export = function(grunt){
	//configure main project settings
	grunt.initConfig({
		//basic settings and info about  our pluggins
		pkg:grunt.file.readJSON('package.json'),
		//name of pluggin
		cssmin:{
			combine:{
				files:{
					'html/css/main.css':['html/css/content.css']
				},
			}
		}
	
	});
		//load the pluggin
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	//do the task
	grunt.registerTasks('default', ["cssmin"]);

};