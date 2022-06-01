var Height,Weight,bmi;
function calculateBMI() {
    Height=document.myForm.H.value;
    var NHeight=Height/100;
    Weight=document.myForm.W.value;
    bmi=Weight/(NHeight*NHeight);
    document.getElementById("bmi").innerHTML=bmi
    }
function recommendWorkout() {
        calculateBMI();
        age=document.myForm.A.value;
        if(bmi&&Height&&Weight&&age!=0&&age>=15){
                if (bmi>=25 && bmi<=30) {
            document.getElementById("recommend").innerHTML="Daily Walking is good for you!"
                }
                else if (bmi>30) {
                    document.getElementById("recommend").innerHTML="You better start HIIT Workout soon!"
                }
                else if (bmi<18.5) {
            document.getElementById("recommend").innerHTML="Gain some weight!"
                }       
                else {
            document.getElementById("recommend").innerHTML="Enjoy being Fit!"
                }
}
else {
    document.getElementById("recommend").innerHTML="Please provide correct values!"
}
}
