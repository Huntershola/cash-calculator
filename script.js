document.addEventListener("DOMContentLoaded",()=>{

    const dol100 = document.getElementById('dol100');
    const dol50 = document.getElementById('dol50');
    const dol20 = document.getElementById('dol20');
    const dol10 = document.getElementById('dol10');
    const dol5 = document.getElementById('dol5');
    const dol2 = document.getElementById('dol2');
    const dol1 = document.getElementById('dol1');

    const txt100 = document.getElementById('txt100');
    const txt50 = document.getElementById('txt50');
    const txt20 = document.getElementById('txt20');
    const txt10 = document.getElementById('txt10');
    const txt5 = document.getElementById('txt5');
    const txt2 = document.getElementById('txt2');
    const txt1 = document.getElementById('txt1');

    const txtFinalCash = document.getElementById('txtFinalCash');
    const txtFinalCashInWords = document.getElementById('txtFinalCashInWords');
    const btnReset = document.getElementById('btnReset');

    const cashInputs = [dol100,dol50,dol20,dol10,dol5,dol2,dol1];
    const cashTexts = [txt100,txt50,txt20,txt10,txt5,txt2,txt1];

    cashInputs.forEach((input, index) => {
        input.addEventListener('input', () => {
          cashCalculate(index);
        });
      });

      btnReset.addEventListener('click', clearData);


      function cashCalculate(index) {
        const denominations = [100,50,20,10,5,2,1];
        const rowValue = cashInputs[index].value * denominations[index];
        cashTexts[index].textContent = rowValue.toFixed(0);
        // Perform calculations for other denominations
        // Update respective result elements
    
  
        totalCash();
      }

      function totalCash() {
        let totalCashValue = 0;
        cashTexts.forEach((text) => {
          totalCashValue += parseInt(text.textContent);
        });
        txtFinalCash.textContent = 'Total Cash: ' + '$'+ totalCashValue;
        txtFinalCashInWords.textContent = `Total Cash In Words: ${convertToWords(totalCashValue)}`;

    }

    function clearData() {
        cashInputs.forEach((input) => {
          input.value = '';
        });
        cashTexts.forEach((text) => {
          text.textContent = '0';
        });
        totalCash();
      }
      function convertToWords(number) {
        const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
        const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
        const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety', 'Hundred'];
    
        if (number === 0) {
          return 'Zero';
        }
    
        let words = '';

        if (Math.floor(number / 1000000000) > 0) {
            words += convertToWords(Math.floor(number / 1000000000)) + ' Billion ' + 'Dollar';
            number %= 1000000000;
          }
    
        if (Math.floor(number / 1000000) > 0) {
          words += convertToWords(Math.floor(number / 1000000)) + ' Million ' + 'Dollar';
          number %= 1000000;
        }
    
        // if (Math.floor(number / 100000) > 0) {
        //   words += convertToWords(Math.floor(number / 100000)) + ' Thousand ' + 'Dollar';
        //   number %= 100000;
        // }
    
        if (Math.floor(number / 1000) > 0) {
          words += convertToWords(Math.floor(number / 1000)) + ' Thousand ' + 'Dollar';
          number %= 1000;
        }
    
        if (Math.floor(number / 100) > 0) {
          words += convertToWords(Math.floor(number / 100)) + ' Hundred ';
          number %= 100;
          
        }
    
        if (number > 0) {
  
            if (number < 10) {
  
                words += units[number]; // units[4]
  
                console.log(number);
  
            }
            else if (number < 20) {
               words += teens[number - 10]; // teens[5]
               console.log(number - 10);
               console.log(number);
               console.log("-----" + words);
            } 
  
            else {
                words += tens[Math.floor(number / 10)];  //  40 / 10 = 4
                console.log(Math.floor(number / 10));
                console.log(number);
                console.log("Elsei " + words);
                console.log(number % 10 );
  
                if (number % 10 > 0) {
  
                  console.log("__________________");  
                  console.log(number);
  
                  words += ' ' + units[number % 10]; // units[5]
  
                  console.log(number % 10);
                  console.log(number);
                  console.log(" Elsei Two " + words);
                }
            }
  
        }
         
    
        return words.trim();
      }
   
      
    cashInputs.forEach(input => {
        input.addEventListener('input', () => {
          const value = parseInt(input.value, 7);
          if (isNaN(value) || value < 0) {
            input.value = '';
          }
        });
      });
  
});