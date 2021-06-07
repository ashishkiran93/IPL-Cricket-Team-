            //  <div class="team-cards">
            //     <div>
            //         <img class="team-image" src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1200px-Chennai_Super_Kings_Logo.svg.png">
            //     </div>
            //     <div class="description-box">
            //         <h3 class="team-name">CHENNAI SUPER KINGS</h3>
            //         <p class="captain-name">CAPTAIN</p>
            //     </div>
            //  </div>


$(document).ready(function()
{
    console.log("DOM READY")

    var teamList =JSON.parse(localStorage.getItem('team-data'))

    

    for(let i=0;i<teamList.length;i++)
     {
        var cardContainer = $("#card-container")
        var anchor = $("<a>").attr({
            href: "./team.html?p="+teamList[i].id
        })
        $(cardContainer).append(anchor)

        var teamCards = $("<div>").attr("class","team-cards")
        var teamImageContainer = $("<div>")
        var teamImage = $("<img>").attr({
            class:"team-image",
            src: teamList[i].teamIcon
        })
        
        var descriptionBox= $("<div>").attr("class","description-box")
        var teamName= $("<h3>").attr("class","team-name")
        $(teamName).html(teamList[i].fullName.toUpperCase())

        $(anchor).append(teamCards)
        $(teamCards).append(teamImageContainer)
        $(teamImageContainer).append(teamImage)
        $(teamCards).append(descriptionBox)
        $(descriptionBox).append(teamName)



        }

})

