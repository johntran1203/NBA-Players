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
  
  document.body.append(playerNameParagraph, playerTeamParagraph, sizeParagraph)
  
}



const btn = document.getElementById('btn')
const imageContainer = document.querySelector('#image-container')


btn.addEventListener('click', (e) => {
  e.preventDefault()
 
  let inputValue = document.querySelector('#player-search').value
  getPlayer(inputValue)
  inputValue.innerText = ''


})