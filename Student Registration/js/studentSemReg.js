console.log("Student Semester Registration");
class StudEmail{
    constructor(emailId,password,index){
        this.emailId=emailId;
        this.password=password;
        this.index=index;
    }
}
class Student{
    constructor(first_name,last_name,date,emailId,mobileNumber,address,gender){
        this.first_name=first_name;
        this.last_name=last_name;
        this.emailId=emailId;
        this.date=date;
        this.mobileNumber=mobileNumber;
        this.address=address;
        this.gender=gender;
    }
    static validate(student){
        // console.log('hello');
        
        let cur_date=new Date();
        let x=new Date(student.date);
        // console.log(typeof student.date);    
        // console.log(student.gender);
        // console.log(student.date+typeof student.date);
        // console.log(cur_date);
        // console.log(cur_date-x);
        
        if(student.first_name.length===0||student.last_name.length===0){
            return false;
        } else if(student.date===""||((cur_date-x)/31536000000)<18){
            return false;
        } else if(student.gender==="f"){
            return false;
        } else if(student.mobileNumber.length<10){
            return false;
        } else{
            return true;
        }
    }
    static add(student){
        let studList=[];
        let studLoginList=[];
        if(localStorage.getItem("studentRegDetails")==null){
            studList=[];
            studLoginList=[];
        }else{
            // console.log(localStorage.getItem("studentRegDetails"));        
            studList=JSON.parse(localStorage.getItem("studentRegDetails"));
            studLoginList=JSON.parse(localStorage.getItem("studLoginDetails"));
        }
        // this.id=studList.length+1;
        studList.push(student);
        let x=new Date();
        x=String(x.getDate())+String(x.getMonth()+1)+String(x.getFullYear());
        let email=student.first_name.toLowerCase()+"_"+x+student.last_name.toLowerCase()+"@dtu.com";
        let password=Math.ceil(Math.random()*(1000*studList.length))+"dtu"+Math.ceil(Math.random()*(1000));
        let index=studList.length-1;
        let studLoginDetails=new StudEmail(email,password,index);
        studLoginList.push(studLoginDetails);
        console.log(studLoginDetails);
        localStorage.setItem('studLoginDetails',JSON.stringify(studLoginList));
        localStorage.setItem("studentRegDetails",JSON.stringify(studList));
        return index;
    }
    static show(type, message) {
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
        margin-bottom: 1rem;
        border-radius: 0;`);
        setTimeout(function() {
          msg.innerHTML = "";
        }, 2000);
      }
}
function display(index){
    let home = document.getElementById("home");
    home.innerHTML="";
    let studList=JSON.parse(localStorage.getItem("studentRegDetails"));
    let studLoginList=JSON.parse(localStorage.getItem("studLoginDetails"));
    let studEle=studList[index];
    let loginEle=studLoginList[index];
    home.innerHTML=`
    <h3>Note ur Email Id and password carefully</h3>
    <ul class="list-group">
        <li class="list-group-item">First Name:${studEle.first_name}</li>
        <li class="list-group-item">Last Name:${studEle.last_name}</li>
        <li class="list-group-item">Date:${studEle.date}</li>
        <li class="list-group-item">Email Id:${studEle.emailId}</li>
        <li class="list-group-item">Mobile Number:${studEle.mobileNumber}</li>
        <li class="list-group-item">Address:${studEle.address}</li>
        <li class="list-group-item">Gender:${studEle.gender}</li>
        <li class="list-group-item">Email_id:${loginEle.emailId}</li>
        <li class="list-group-item">Password:${loginEle.password}</li>
    </ul>`;
    let ul=document.querySelector('section');
    ul.setAttribute('style',`
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction:column;
    background-color: rgba(0, 0, 0, 0.7);
    border:0.2px solid rgba(0, 0, 0, 0.7);
    border-radius:15px;
    margin:50px 50px;
    width: 50%;
    padding:30px 0;`);
}
let studentForm = document.getElementById("studentForm");
studentForm.addEventListener("submit", studentFormSubmit);
function studentFormSubmit(e) {
    // console.log('hello');
    // console.log(studList);    
    let first_name=document.getElementById("exampleFormControlInput0").value;
    let last_name=document.getElementById("exampleFormControlInput1").value;
    let date=document.getElementById("exampleFormControlInput2").value;
    let emailId=document.getElementById("exampleFormControlInput3").value;
    let mobileNumber=document.getElementById("exampleFormControlInput4").value;
    let address=document.getElementById("exampleFormControlInput5").value;
    let genderList=document.getElementsByName("genderName");
    let gender='f';
    Array.from(genderList).forEach(function (ele) {
        if(ele.checked){
            gender=ele.value;
        }
    })
    let student=new Student(first_name,last_name,date,emailId,mobileNumber,address,gender);
    if(Student.validate(student)){
        let index=Student.add(student);
        Student.show("success", "Your details havve been added to database");
        display(index);
        // window.open('studentDetailsDisplay.html');
    } else {
        //Show error to the user
        Student.show("danger", "Sorry check and fill details again");
    }
    // e.preventDefault();
}