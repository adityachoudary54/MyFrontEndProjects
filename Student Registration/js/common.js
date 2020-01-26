class courseRegDetails{
    constructor(semester,branch){
        this.semester=semester;
        this.branch=branch;
    }
}


let url=location.href;
let arr=url.split("/");
let eleIndex;
function show(type, message) {
    let msg = document.getElementById("message");
    let boldText;
    if (type === "success") {
      boldText = "Success";
    } else {
      boldText = "Error";
    }
    msg.innerHTML = `<div id='alert' class="alert alert-${type} alert-dismissible fade show" role="alert">
          <strong>${boldText}:</strong> ${message}
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>`;
    let alert=document.getElementById('alert');
    // console.log(alert);
    
    alert.setAttribute('style',`
    position: relative;
    padding: .75rem 1.25rem;
    border-radius: 0;`);
    setTimeout(function() {
      msg.innerHTML = "";
    }, 2000);
}
if(arr.indexOf("loginAdmin.html")!==-1){
    console.log('Hello'+arr);
    let studLoginList=JSON.parse(localStorage.getItem("studLoginDetails"));
    let submit=document.querySelector('#home button');
    console.log("hello");
    submit.addEventListener('click',function (e) {
        console.log("Hello world listener");
        let emailId=document.getElementById('exampleInputEmail1').value.trim();
        let password=document.getElementById('exampleInputPassword1').value;
        let flag=false;
        for (let index = 0; index < studLoginList.length; index++) {
            const element = studLoginList[index];
            if(element['emailId']===emailId&&element['password']===password){
                eleIndex=element['index'];
                flag=true;
                break;
            } else{
                console.log(element['emailId']);
                console.log(element['password']);
                // console.log(emailId);
                // console.log(password);                
            }
        }
        if(flag){
            // console.log(eleIndex);
            localStorage.setItem("studCourseRegIndex",eleIndex);
            window.open("courseReg.html","_self");
        } else{
            show('danger','Wrong details entered')
        }
        e.preventDefault();
    })
}else{
    console.log('common course hello');
    
    console.log(localStorage.getItem("studCourseRegIndex"));
    let studList=JSON.parse(localStorage.getItem("studentRegDetails"));
    let studLoginList=JSON.parse(localStorage.getItem("studLoginDetails"));
    let submit=document.querySelector("#studDetails button");
    submit.addEventListener("click",function (e) {
        let homeContainer=document.getElementById("home");
        let index=localStorage.getItem("studCourseRegIndex");
        let sem = document.getElementById('semester');
        let branch = document.getElementById('branch');
        let studCourseDetails=new courseRegDetails(sem.value,branch.value);
        const studelement = studList[index];
        const studLoginelement = studLoginList[index];
        homeContainer.innerHTML="";
        homeContainer.innerHTML=`
        <ul>
            <li class="list-group-item">First Name:${studelement.first_name}</li>
            <li class="list-group-item">Last Name:${studelement.last_name}</li>
            <li class="list-group-item">Date:${studelement.date}</li>
            <li class="list-group-item">EmailId:${studelement.emailId}</li>
            <li class="list-group-item">Mobile Number:${studelement.mobileNumber}</li>
            <li class="list-group-item">Address:${studelement.address}</li>
            <li class="list-group-item">Gender:${studelement.gender}</li>
            <li class="list-group-item">Given Email Id:${studLoginelement.emailId}</li>
            <li class="list-group-item">Given Password:${studLoginelement.password}</li>
            <li class="list-group-item">Semester:${studCourseDetails.semester}</li>
            <li class="list-group-item">Branch:${studCourseDetails.branch}</li>
        </ul>
        `;
        // homeContainer.setAttribute('style',`
        // list-style:none;
        // `)
        e.preventDefault();
    })



    
}