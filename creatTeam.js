$(document).ready(function(){


    var newTeamInfo = JSON.parse(localStorage.getItem("team-data"))
   
    $("#btn").click(function(e){
        var tm = $("#tm").val()
        var tk = $("#tk").val()
        
        var tLogo = $("#tLogo").val()
        var chamWon = $("#cw").val()

        var tObj= {
            id:newTeamInfo.length+1,
            fullName:tm,
            key:tk,
            championshipWon:chamWon,
            teanIcon:tLogo,
            players:[]

        };
        newTeamInfo.push(tObj)
        localStorage.setItem('team-data',JSON.stringify(newTeamInfo));
        alert("New  team added successfully")
        location.assign("./index.html")
    })
})