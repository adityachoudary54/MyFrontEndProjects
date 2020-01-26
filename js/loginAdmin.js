console.log("login admin");
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
