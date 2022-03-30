 function pa(word :string): number{
    let input : number =  parseFloat(word);
    if(input < 0.5 || input > 960){
        return 0;
    }

        let flag : number = 0;
        if(input > 480 && input <= 960)
            return 85;
        }
        else if(input > 280 && input <= 480){
            return 88;
        }
        else if(input > 140 && input <= 280){
            return 91;
        }
        else if(input > 90 && input <= 140){
            return 94;
        }
        else if(input > 45 && input <=90){
            return 97;
        }
        else if(input > 23 && input <=45){
            return 100;
        }
        else if(input > 12 && input <= 23){
            return 103;
        }
        else if(input > 6 && input <= 12){
            return 106;
        }
        else if(input > 3 && input <= 6){
            return 109;
        }
        else if(input > 1.5 && input <=3){
            return 112;
        }
        else if(input > 0.35 && input <= 1.5){
            return 115;
        }
}
  export default pa;