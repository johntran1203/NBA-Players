// create an async function to get a NBA Player with a parameter name
async function getPlayer(username) {
  const url = `https://www.balldontlie.io/api/v1/players?search=${username}`
    try {
      // make an axios call to our user endpoint and save the response into a variable called response
        const response = await axios.get(url);
      
        const data = response.data.data[0];
        showPlayerData(data)
      
    } catch (error) {
      console.error(error);
    }
  }


function showPlayerData(data){
  const playerName = `${data.first_name} ${data.last_name}`;
  const playerTeam = `Plays for ${data.team.full_name}`;  
  const size = `Is ${data.height_feet}ft. ${data.height_inches}in. tall and weighs ${data.weight_pounds}lbs.`;
  

  const playerNameParagraph = document.createElement('p');
  const playerTeamParagraph = document.createElement('p');
  const sizeParagraph = document.createElement('p');
  
  playerNameParagraph.innerText = playerName;
  playerTeamParagraph.innerText = playerTeam;
  sizeParagraph.innerText = size
  

  nbaData.append(playerNameParagraph, playerTeamParagraph, sizeParagraph)
  
}


function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}
const nbaData = document.querySelector('#nbaData');


const btn = document.getElementById('btn')
const imageContainer = document.querySelector('#image-container')


btn.addEventListener('click', (e) => {
  e.preventDefault()

  let inputValue = document.querySelector('#player-search')
  if(inputValue.value) {
    getPlayer(inputValue.value)
    removeAllChildNodes(nbaData);

  }
  inputValue.value = ''

})


// async function getImage() {
  
//   const url = `https://api.giphy.com/v1/gifs/search?api_key=HoyUN2SlpT8mVGPywKTcqJwaKg5fvz60&q=lebron&limit=10&offset=0&rating=g&lang=en`
//     try {
//       // make an axios call to our user endpoint and save the response into a variable called response
//         const response = await axios.get(url)
      
//         cosnsole.log(response.data)
        
      
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   getImage()