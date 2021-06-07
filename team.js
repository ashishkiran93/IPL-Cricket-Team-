$(document).ready(function(){
    console.log("dom ready")

    var targetId = window.location.search.split("=")[1]
    console.log(targetId)

    var teamList = JSON.parse(localStorage.getItem('team-data'))
    console.log(teamList)

    

    for(i=0;i<teamList.length;i++)
    {
        if(teamList[i].id==targetId)
        {
           var imageContainer =$("#team-image-container") 
           var teamImage = $("<img>").attr({
               id:"team-image",
               src: teamList[i].teamIcon
           })

           var teamHeading= $("#team-heading")
           var title = $("<h1>").attr("id","title")
           $(title).html(teamList[i].fullName.toUpperCase())

           $(imageContainer).append(teamImage)
           $(teamHeading).append(title)

       
            var infobox = $("#info")
            var info1 = $("<p>").attr("class","info1")
            $(info1).html("FULL NAME: "+teamList[i].fullName)
            $(infobox).append(info1)

            var info2 = $("<p>").attr("class","info2")
            $(info2).html("MATCH WON : "+teamList[i].championshipsWon)
            $(infobox).append(info2)
           


           for(var j=0;j<teamList[i].players.length;j++)
              {
                  var cardsContainer= $("#card-container")
                  
                  var cards = $("<div>").attr("class","cards")
                  var anchorTags =$("<a>").attr({
                      href:"./player.html?p="+teamList[i].id+","+teamList[i].players[j].id
                  })
                  var playerImage = $("<img>").attr({
                      class:"player-image",
                      src: teamList[i].players[j].photos
                  })

                  var playerName =("<p>")
                  $(playerName).html(teamList[i].players[j].name)

                  
                  $(cardsContainer).append(cards)
                  $(cards).append(anchorTags)
                  $(anchorTags).append(playerImage)
                  $(anchorTags).append(playerName)
              }

           
            }
        }
    


})