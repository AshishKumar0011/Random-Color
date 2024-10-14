const randomColor = () => {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
        // color += hex.charAt(Math.floor(Math.random() * 16 + 1))
  
    }
    return color;
  };
  
  let start;
  const changeColor = () => {
    start = setInterval(() => {
      document.body.style.backgroundColor = randomColor();
      document.getElementById("color").innerHTML = randomColor();
    }, 1000);
  };
  
  const stop = () => {
    clearInterval(start);
  };
  
  const reset = () => {
    document.body.style.backgroundColor = "white";
    document.getElementById("color").innerHTML = "#fff";
  };
  
  document.getElementById("start").addEventListener("click", changeColor);
  document.getElementById("stop").addEventListener("click", stop);
  document.getElementById("reset").addEventListener("click", reset);
  
  
  
  
  
  //Extras:
  
  // for(let i=0;i<=10;i++){
  //     console.log(`outer loop value is: ${i}`);
  //     for(let j=0;j<=10;j++){
  //         console.log(`inner loop value is: ${j} and inner loop ${i}`);
          
  //     }
  // }
  
  // let myArray = ["ironman","thor","hulk","captian","spiderman"]
  // let arr = 0;
  // while(arr<myArray.length){
  //     console.log(`Value is: ${myArray[arr]}`);
  //     arr = arr+1
  // }