
//包装函数
module.exports = function(grunt){
    //任务配置，所有插件的配置信息
    grunt.initConfig({
        //获取package.json的信息
        pkg: grunt.file.readJSON('package.json'),
		//uglify插件的配置信息
		        uglify:{
		                   options:{
		                       banner:'/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */'
		                   },
		                   build:{
		                       src:'js/zui.js',
		                       dest:'dist/<%=pkg.name%><%pkg.version%>.min.js'
		                   }
		               }
    });
	// 使用插件第二步，加载插件
	grunt.loadNpmTasks('grunt-contrib-uglify');

    //告诉grunt当我们在终端中输入grunt时需要做些什么（注意先后顺序）
	// 使用插件第三步，在任务中配置插件
    grunt.registerTask('default',['uglify']);
};