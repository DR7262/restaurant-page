const hero = document.createElement('div');
hero.classList.add('hero');
hero.textContent = 'Colinary Chef';

const mission = document.createElement('div');
const missionTitle = document.createElement('h1');
const missionText = document.createElement('p')
missionTitle.textContent = "Our Mission";
mission.appendChild(missionTitle);
mission.classList.add('mission');
missionText.textContent = "Fresh, hand-made sushi, right at your door.";
missionText.classList.add('missionText')
mission.appendChild(missionText);

const home = [hero, mission];

export default home;