
$(document).ready( function() {

    function getCpu() {
        $.get("http://d8cc.dspi.org/rest/cpu/test", (response) => {
            $.each(response, function(i, field) {
                console.log(field)
                $('.cpu').text(field.cpudata + "%")
            })
        })
    }

    function setCpuInterval() {
        setInterval(function() {
            $.get("http://d8cc.dspi.org/rest/cpu/test", (response) => {
            	$.each(response, function(i, field) {
            		console.log(field);
            		$('.cpu').text(field.cpudata + "%");
            	});
            });
        }, 11000);
    }

    function getUptime() {
        $.get("http://d8cc.dspi.org/rest/uptimestr/test", (response) => {
    	   $.each(response, function(i, field) {
        		console.log(field);
        		$('.uptime').text(field.uptimedata);
        	});
        });
    }

    function setUptimeInterval() {
        setInterval(function() {
        // method to be executed;
        $.get("http://d8cc.dspi.org/rest/uptimestr/test", (response) => {
        	$.each(response, function(i, field) {
        		console.log(field);
        		$('.uptime').text(field.uptimedata);
            	});
            });
        }, 2000);
    }

    function getMem() {
        $.get("http://d8cc.dspi.org/rest/mem/test", (response) => {
        	$.each(response, function(i, field) {
        		console.log(field);
        		$('.memory').append(field.memdata);
        	});
        });
    }

    function setMemInterval() {
        setInterval(function() {
            $.get("http://d8cc.dspi.org/rest/mem/test", (response) => {
            	$.each(response, function(i, field) {
            		console.log(field);
            		$('.memory').text(field.memdata);
            	});
            });
        }, 5000);
    }

    function getNet() {
        $.get("http://d8cc.dspi.org/rest/netstr/test", (response) => {
        	$.each(response, function(i, field) {
        		console.log(field);
        		$('.net').append(field.netstrdata);
        	});
        });
    }

    function setNetInterval() {
        setInterval(function() {
            $.get("http://d8cc.dspi.org/rest/netstr/test", (response) => {
            	$.each(response, function(i, field) {
            		console.log(field);
            		$('.net').text(field.netstrdata);
            	});
            });
        }, 15000);
    }

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
    function Init() {
        getCpu()
        setCpuInterval()
        getUptime()
        setUptimeInterval()
        getMem()
        setMemInterval()
        getNet()
        setNetInterval()
    }

    Init()
});
