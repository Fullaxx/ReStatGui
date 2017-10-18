$(document).ready( function() {
    function getCpu() {
        $.ajax({
            url : "http://d8cc.dspi.org/rest/cpu/test",
            success : (response) => {
                $.each(response, function(i, field) {
                    console.log(field)
                    $('.cpu').text(field.cpudata + "%")
                });
            }
        });
    }

    function setCpuInterval() {
        getCpu()
        setInterval(function() { getCpu() }, 11000);
    }

    function getUptime() {
        $.ajax({
            url: "http://d8cc.dspi.org/rest/uptimestr/test",
            success: (response) => {
                $.each(response, function(i, field) {
                    console.log(field);
                    $('.uptime').text(field.uptimedata)
                });
            }
        });
    }

    function setUptimeInterval() {
        getUptime();
        setInterval(function() { getUptime(); }, 2000);
    }

    function getMem() {
        $.ajax({
            url: "http://d8cc.dspi.org/rest/mem/test",
            success: (response) => {
                $.each(response, function(i, field) {
                    console.log(field);
                    $('.memory').text(field.memdata);
                });
            }
        });
    }

    function setMemInterval() {
        getMem();
        setInterval(function() { getMem() }, 5000);
    }

    function getNet() {
        $.ajax({
            url: "http://d8cc.dspi.org/rest/netstr/test",
            success: (response) => {
                $.each(response, function(i, field) {
                    console.log(field);
                    $('.net').text(field.netstrdata);
        	    });
            }
        });
    }

    function setNetInterval() {
        getNet();
        setInterval(function() { getNet(); }, 15000);
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
        setCpuInterval();
        setUptimeInterval();
        setMemInterval();
        setNetInterval();
    }

    Init();
});
