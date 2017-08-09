
// CPU Initial
$.get("http://d8cc.dspi.org/rest/cpu/test", function(result){
	$.each(result, function(i, field){
		console.log(field);
		$('.cpu').text(field.cpudata + "%");
	});
});

// CPU Interval
setInterval(function() {
    // method to be executed;
    $.get("http://d8cc.dspi.org/rest/cpu/test", function(result){
    	$.each(result, function(i, field){
    		console.log(field);
    		$('.cpu').text(field.cpudata + "%");
    	});
    });
}, 11000);

// Uptime Initial
$.get("http://d8cc.dspi.org/rest/uptimestr/test", function(result){
	$.each(result, function(i, field){
		console.log(field);
		$('.uptime').text(field.uptimedata);
	});
});

// Uptime Interval
setInterval(function() {
    // method to be executed;
    $.get("http://d8cc.dspi.org/rest/uptimestr/test", function(result){
    	$.each(result, function(i, field){
    		console.log(field);
    		$('.uptime').text(field.uptimedata);
    	});
    });
}, 2000);

// Mem Initial
$.get("http://d8cc.dspi.org/rest/mem/test", function(result){
	$.each(result, function(i, field){
		console.log(field);
		$('.mem').append(field.memdata);
	});
});

// Mem Interval
setInterval(function() {
    // method to be executed;
    $.get("http://d8cc.dspi.org/rest/mem/test", function(result){
    	$.each(result, function(i, field){
    		console.log(field);
    		$('.mem').text(field.memdata);
    	});
    });
}, 5000);

// Net Initial
$.get("http://d8cc.dspi.org/rest/netstr/test", function(result){
	$.each(result, function(i, field){
		console.log(field);
		$('.net').append(field.netstrdata);
	});
});

// Net Interval
setInterval(function() {
    // method to be executed;
    $.get("http://d8cc.dspi.org/rest/netstr/test", function(result){
    	$.each(result, function(i, field){
    		console.log(field);
    		$('.net').text(field.netstrdata);
    	});
    });
}, 15000);

/*

// Uptime 
$.get("http://d8cc.dspi.org/rest/uptime/test", function(result){
	$.each(result, function(i, field){
		console.log(field);
		$('.uptime').append('Uptime: ' +field.uptimesec + " " + field.uptimestr + "<br />");
	});
});

// Mem 
$.get("http://d8cc.dspi.org/rest/mem/test", function(result){
    var memoryJoin = [];
    $.each(result, function(i, field){
    if (field.totalmem !== undefined) $('.mem').append('Memory (Total): ' + field.totalmem + "<br />");
    if (field.freemem !== undefined) $('.mem').append('Memory (Free): ' + field.freemem + "<br />");
    if (field.loadmemp !== undefined) $('.mem').append('Memory (Used): ' + field.loadmemp + "<br />");
	});
});

*/
