function animationActivities(params) {
    var steps = document.querySelectorAll('.step')
    var back = document.querySelector('.go-back')
    var hasBeenClicked = false
    steps.forEach( step => {
        step.addEventListener('click',(e)=>{
            steps.forEach( OtherStep => {
                if (OtherStep  !== step && OtherStep.classList.contains('active')) {
                    step.classList.remove('active')
                }else{
                    step.classList.add('active')
                }
            });

            if (!e.target.classList.contains('first')) {
                back.classList.add('active')
            }else{
                back.classList.remove('active')
            }
        })
      
    });
   
}
animationActivities();