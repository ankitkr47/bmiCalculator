const form = document.querySelector("form");

// const length = Number(document.querySelector("#height").value);
// const weight = Number(document.querySelector("#weight").value);
// there is a difference in taking value outside and inside
// outside => on page reload it takes the value;
// inside => on submit it takes the value


form.addEventListener("submit", (e)=>{

    e.preventDefault() // IMP - prevent from doing defoult action of form(action-post/get)
    const result = document.querySelector(".result");
    const height = Number(document.querySelector("#height").value);
    const weight = Number(document.querySelector("#weight").value);
    
    if(height === '' || height<=0 || isNaN(height)){
        result.innerHTML = `Please give valid height ${height}`;
    }
    else if(weight === '' || weight<=0 || isNaN(weight)){
        result.innerHTML = `Please give valid weight ${weight}`;

    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>BMI : ${bmi}</span>`;
    }
})

// const result = document.querySelector(".result");


// console.log(height);
// console.log( weight);
// console.log(result);
// console.log(form);

