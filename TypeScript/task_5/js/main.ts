interface MajorCredits {
    credits: number;
    brand: 'MajorCredits';
  }
  
  // Define MinorCredits interface
  interface MinorCredits {
    credits: number;
    brand: 'MinorCredits';
  }
  
  // Function to sum major credits
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: 'MajorCredits',
    };
  }
  
  // Function to sum minor credits
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      brand: 'MinorCredits',
    };
  }
  
