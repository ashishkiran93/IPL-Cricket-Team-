$(document).ready(function(){
    console.log("Dom ready")

       var target = window.location.search.split("=")[1]
       console.log(target)
       var t =target.split(',')
       console.log(t)
       var target1= parseInt(t[0])
       var target2= parseInt(t[1])

      

    var teamList = JSON.parse(localStorage.getItem('team-data'))
    console.log(teamList)

    var imageContainer = $("#highlight-image")
    var mainImage = $("<img>").attr({
        src:teamList[target1-1].players[target2-1].photos
    })
    var name = $("#highlight-name")
    var playerName = $("<h1>")
    $(playerName).html(teamList[target1-1].players[target2-1].name)
    $(imageContainer).append(mainImage)
    $(name).append(playerName)

    var aboutProfile = $("#about-profile")
    var p1 = $("<p>")
    $(p1).html("NAME : "+teamList[target1-1].players[target2-1].name)

    var p2 = $("<p>")
    $(p2).html("TEAM : "+teamList[target1-1].players[target2-1].team)

    var p3 = $("<p>")
    $(p3).html("ROLE : "+teamList[target1-1].players[target2-1].role)
    
    var p4 = $("<p>")
    $(p4).html("PLAYING STATUS: "+teamList[target1-1].players[target2-1].playingStaus)

    var p5 = $("<p>")
    $(p5).html("DESCRIPTION: "+teamList[target1-1].players[target2-1].description)

    $(aboutProfile).append(p1, p2, p3, p4, p5)
})