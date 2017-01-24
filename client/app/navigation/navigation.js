angular.module('mvp.navigation', [])

.controller('NavigationController', function ($scope, $location) {
  var validChamps = {
      "Aatrox": {},
      "Thresh": {},
      "Tryndamere": {},
      "Gragas": {},
      "Cassiopeia": {},
      "AurelionSol": {},
      "Ryze": {},
      "Poppy": {},
      "Sion": {},
      "Annie": {},
      "Jhin": {},
      "Karma": {},
      "Nautilus": {},
      "Kled": {},
      "Lux": {},
      "Ahri": {},
      "Olaf": {},
      "Camille": {},
      "Viktor": {},
      "Anivia": {},
      "Singed": {},
      "Garen": {},
      "Lissandra": {},
      "Maokai": {},
      "Morgana": {},
      "Evelynn": {},
      "Fizz": {},
      "Heimerdinger": {},
      "Zed": {},
      "Rumble": {},
      "Mordekaiser": {},
      "Sona": {},
      "KogMaw": {},
      "Katarina": {},
      "Lulu": {},
      "Ashe": {},
      "Karthus": {},
      "Alistar": {},
      "Darius": {},
      "Vayne": {},
      "Varus": {},
      "Udyr": {},
      "Leona": {},
      "Jayce": {},
      "Syndra": {},
      "Pantheon": {},
      "Riven": {},
      "Khazix": {},
      "Corki": {},
      "Azir": {},
      "Caitlyn": {},
      "Nidalee": {},
      "Kennen": {},
      "Galio": {},
      "Veigar": {},
      "Bard": {},
      "Gnar": {},
      "Malzahar": {},
      "Graves": {},
      "Vi": {},
      "Kayle": {},
      "Irelia": {},
      "LeeSin": {},
      "Illaoi": {},
      "Elise": {},
      "Volibear": {},
      "Nunu": {},
      "TwistedFate": {},
      "Jax": {},
      "Shyvana": {},
      "Kalista": {},
      "DrMundo": {},
      "Ivern": {},
      "Diana": {},
      "TahmKench": {},
      "Brand": {},
      "Sejuani": {},
      "Vladimir": {},
      "Zac": {},
      "RekSai": {},
      "Quinn": {},
      "Akali": {},
      "Taliyah": {},
      "Tristana": {},
      "Hecarim": {},
      "Sivir": {},
      "Lucian": {},
      "Rengar": {},
      "Warwick": {},
      "Skarner": {},
      "Malphite": {},
      "Yasuo": {},
      "Xerath": {},
      "Teemo": {},
      "Nasus": {},
      "Renekton": {},
      "Draven": {},
      "Shaco": {},
      "Swain": {},
      "Talon": {},
      "Janna": {},
      "Ziggs": {},
      "Ekko": {},
      "Orianna": {},
      "Fiora": {},
      "FiddleSticks": {},
      "Chogath": {},
      "Rammus": {},
      "Leblanc": {},
      "Soraka": {},
      "Zilean": {},
      "Nocturne": {},
      "Jinx": {},
      "Yorick": {},
      "Urgot": {},
      "Kindred": {},
      "MissFortune": {},
      "MonkeyKing": {},
      "Blitzcrank": {},
      "Shen": {},
      "Braum": {},
      "XinZhao": {},
      "Twitch": {},
      "MasterYi": {},
      "Taric": {},
      "Amumu": {},
      "Gangplank": {},
      "Trundle": {},
      "Kassadin": {},
      "Velkoz": {},
      "Zyra": {},
      "Nami": {},
      "JarvanIV": {},
      "Ezreal": {}
   }

  $scope.navTo = function (location) {
    location=location[0].toUpperCase() + location.slice(1).toLowerCase();
    //Names and Nicknames
    if (location === 'Jarvaniv') {
      location = 'JarvanIV';
    } else if (location === 'Masteryi' || location === 'Master yi' || location === 'Yi') {
      location = 'MasterYi';
    } else if (location === 'Xinzhao' || location === 'Xin zhao' || location === 'Xin') {
      location = 'XinZhao';
    } else if (location === 'Wukong') {
      location = 'MonkeyKing';
    } else if (location === 'Missfortune' || location === 'Miss fortune' || location === 'Mf') {
      location = 'MissFortune';
    } else if (location === 'Cho') {
      location = 'Chogath';
    } else if (location === 'Fiddlesticks' || location === 'Fiddles') {
      location = 'FiddleSticks';
    } else if (location === 'Reksai') {
      location = 'RekSai';
    } else if (location === 'Vlad') {
      location = 'Vladimir';
    } else if (location === 'Tahmkench' || location === 'Tahm kench' || location === 'Catfish') {
      location = 'TahmKench';
    } else if (location === 'Drmundo' || location === 'Mundo') {
      location = 'DrMundo';
    } else if (location === 'Twistedfate' || location === 'Twisted fate' || location === 'Tf') {
      location = 'TwistedFate';
    } else if (location === 'Voli') {
      location = 'Volibear';
    } else if (location === 'Lee' || location === 'Leesin' || location === 'Lee sin') {
      location = 'LeeSin';
    } else if (location === 'Kogmaw' || location === 'Kog') {
      location = 'KogMaw';
    } else if (location === 'Kha zix' || location === 'Bug') {
      location = 'Khazix';
    } else if (location === 'Heimer' || location === 'Donger') {
      location = 'Heimerdinger';
    } else if (location === 'Aurelionsol' || location === 'Aurelion sol') {
      location = 'AurelionSol';
    } else if (location === 'Troll') {
      location = 'Trundle';
    } else if (location === 'Cow' || location === 'Ali') {
      location = 'Alistar';
    } else if (location === 'Kass') {
      location = 'Kassadin';
    } else if (location === 'Snake' || location === 'Cass') {
      location = 'Cassiopeia';
    } else if (location === 'Devil' || location === 'Satan' || location === 'Pos') {
      location = 'Teemo';
    }

    if (validChamps.hasOwnProperty(location)) {
      $location.path('/champions/'+location);
    }
  };
});