// points
// wingame
// losegame
// gols


gols = [
  {
    name: 'Corinthians',
  },
  {
    name: 'Palmeiras',
  }
]

gols.forEach(element => {
  element.gols = Math.ceil(Math.random() * 5);
});

