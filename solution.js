function DNAStrand(dna){
  dna = dna.split("").map(function(i) {
    switch(i) {
      case 'A':
        return 'T'
        break;
      case 'T':
        return 'A'
        break;
      case 'G':
        return 'C'
        break;
      case 'C':
        return 'G'
        break;
    }
  });
  return dna.join("")
}
