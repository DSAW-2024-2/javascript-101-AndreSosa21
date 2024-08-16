// Sum of Two Numbers
function sum(a, b) {
  if(typeof a==="number" && typeof b==="number")
  {
    sum=a+b
    return sum;
  }
  else
  {
    console.log("Los datos de entrada no son adecuados");
  } // Add your code here
}

// Factorial of a Number
function factorial(n) {
  if(typeof n==="number")
  {
    if(n===0)
    {
      return 1;
    }
    else
    {
      let resultado=1;
      for(let i=n;i>=1;i--)
      {
        resultado=resultado*i;
      }
      return resultado;
    }
  }
  else
  {
    console.log("Los datos de entrada no son adecuados");
  }
}
    
  // Add your code here


// Find the Largest Number
function findLargest(arr) {
  let contar=0;
  for(let i=0;i< arr.length;i++)
  {
    if(typeof arr[i]!="number")
    {
      contar +=1;  
    }
  }
  if(contar>0)
  {
    console.log("Los datos de entrada no son adecuados");
  }
  else{
    let mayor=arr[0];
    for(let i=0;i< arr.length;i++)
    {
      if(arr[i]>mayor)
      {
        mayor=arr[i];
      }
    }
  return mayor;  
  }
}

// Count Vowels in a String
function countVowels(str) {
  if(typeof str==="string")
  {
    let vocal=0;
    let s=str.toLowerCase();
    for(let i=0; i<s.length ;i++)
    {
      if(s[i]==="a" || s[i]==="e" || s[i]==="i"|| s[i]==="o" || s[i]==="u")
      {
        vocal+=1;
      }
    }
    return vocal;
  }
  else{
    console.log("Los datos de entrada no son adecuados");
  }
  // Add your code here
}

// Check if a Number is Prime
function isPrime(n) {
  if(typeof n==="number")
  {
    let contador=0;
    for(let i=1;i < n; i++)
    {
      if(n%i===0)
      {
        contador+=1;
      }
    }
    if (contador>2)
    {
      return false;
    }
    else
    {
      return true;
    }

  }
  else
  {
    console.log("Los datos de entrada no son adecuados");
  }
  // Add your code here
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
