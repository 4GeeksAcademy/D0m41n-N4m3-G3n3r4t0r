let pronoun = ['the','our', 'a'];
  let adj = ['pity', 'shy', 'love', 'alone', 'happy'];
  let noun = ['kuh','ente', 'vogel', 'biene', 'nasenbar'];
  let dom = ['.com','.net', '.us', '.io', '.de'];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) { 
      for (let n = 0; n < noun.length; n++) {
        for (let d = 0; d < dom.length; d++) {
        console.log(pronoun [i] + adj [j] + noun [n] + dom [d]);
        }
      }
    }
  }
    
 