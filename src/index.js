module.exports = function toReadable (number) {
           let numstring = number.toString();
        const zeroToNineteen = ['','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
        const twentyToNinety = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
        const numbers = [0,1,2,3,4,5,6,7,8,9];
        // для 0
        if (number === 0) {return 'zero'} else {
            // для 1-9
         if (numstring.length === 1) {
          for (let i=0; i<10; i++){
        if (number === numbers[(i+1)]) {
          return zeroToNineteen[(i+1)]
        }
          }
         } else {
            // для 10-99
          if (numstring.length === 2) {
        if (Number(numstring[0]) === 1) {
          for (let i=0; i<10; i++) {
            if (Number(numstring[1]) === numbers[i]) {
              return zeroToNineteen[(i+10)]
            } 
          }
        } else {
          for (let i=2; i<=9; i++){
          if (Number(numstring[0]) === i) {
        let result = twentyToNinety[(i-2)];
        if (Number(numstring[1]) === 0){
            return result;
        } else {
            for (j=1; j<=9; j++) {
                if (Number(numstring[1]) === numbers[j]) {
               result = `${result} ${zeroToNineteen[j]}`
               return result;
                }
               }
        }
         }  
          }
          
         }
          } else {
            // 100-999
            if (numstring.length === 3){
             for (let a=1; a<=9;a++){
              if (Number(numstring[0]) === numbers[a]) {//1..
                let result1 = zeroToNineteen[a]; 
                   if ((Number(numstring[1]) === 0) && (Number(numstring[2]) === 0) ){//100
                   let result=`${result1} hundred`
                  return result;}
                  else {
                    if (Number(numstring[1]) === 0) { //10.
                      for (let i=0; i<=9; i++){
                    if (Number(numstring[2]) === numbers[(i+1)]) {//101
                      let result3= zeroToNineteen[(i+1)];
                      let result=`${result1} hundred ${result3}`
                   return result;
                    }
                      }
                     } else {
                      if (Number(numstring[1]) === 1) {//11.
                        for (let i=0; i<=9; i++) {
                          if (Number(numstring[2]) === numbers[i]) {//111
                            let result3 = zeroToNineteen[(i+10)];
                            let result=`${result1} hundred ${result3}`
                   return result;
                          } 
                        }
                      } else {
                        for (let i=2; i<=9; i++){
                        if (Number(numstring[1]) === i) {//12.
                      let result2 = twentyToNinety[(i-2)];
                      if (Number(numstring[2]) === 0) {//120
                        let result = `${result1} hundred ${result2}`;
                      return result;
                      } else {
                            for (j=1; j<=9; j++) {//121
                                if (Number(numstring[2]) === numbers[j]) {
                               let result3 =zeroToNineteen[j];
                               let result=`${result1} hundred ${result2} ${result3}`
                            return result;
                                }
                               }
                        }
                      
                        }  
                        }
                        
                       }
                     }
                   }
                   
                }
              }
             } 
            }
          }
         }
          
}
