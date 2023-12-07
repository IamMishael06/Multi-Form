function animationActivities(params) {
    var steps = document.querySelectorAll('.step')
    steps.forEach( step => {
        step.addEventListener('click',(e)=>{
            step.classList.add('active')
        })
    });
}
animationActivities();