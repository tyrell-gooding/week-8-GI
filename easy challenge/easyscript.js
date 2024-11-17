const exercise = function(run) {
    let exerciseDay = 'run';
    return function() {
        console.log(`exercise of the day: ${exerciseDay}`);
    }
}
const exerciseOfTheWeek = exercise('run')
exerciseOfTheWeek()