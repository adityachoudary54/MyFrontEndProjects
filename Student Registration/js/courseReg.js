console.log("Course Registration");
let sem = document.getElementById('semester');
let branch = document.getElementById('branch');
// console.log(sem + branch);
function display(semester, branch) {
    let tbody = document.getElementById("subjects").getElementsByTagName('tbody')[0];
    tbody.innerHTML="";
    let totCred=0;
    for (let index = 0; index < 6; index++) {
        let sem=parseInt(semester);
        let yr=Math.ceil(sem/2);
        let temp=index+1;
        totCred+=4;
        tbody.innerHTML += `
        <tr>
            <td>${temp}</td>
            <td>${branch+yr+sem+temp}</td>
            <td>${branch+yr+sem+temp}</td>
            <td>${70}</td>
            <td>${30}</td>
            <td>${4}</td>
        </tr>`
    }
    tbody.innerHTML += `<tr>
            <td>Total credits-></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>${24}</td>
        </tr>`
}
display(parseInt(sem.value),branch.value);
sem.addEventListener('change',function (e) {
    display(parseInt(sem.value),branch.value);
})
branch.addEventListener('change',function (e) {
    display(parseInt(sem.value),branch.value);
})
let submit=document.getElementsByClassName('btn btn-primary')[0];

submit.addEventListener('click',function (e) {
    console.log('hello');
    e.preventDefault();
})
