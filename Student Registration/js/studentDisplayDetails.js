let container=document.getElementById('container');
container.innerHTML=`
<table class="table ">
  <thead class='thead-dark'>
    <tr>
      <th scope="col">First_name</th>
      <th scope="col">Last_name</th>
      <th scope="col">Date</th>
      <th scope="col">Email id</th>
      <th scope="col">Mobile</th>
      <th scope="col">Address</th>
      <th scope="col">Gender</th>
      <th scope="col">Given Email id</th>
      <th scope="col">Given Password</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>`;
let studList=JSON.parse(localStorage.getItem("studentRegDetails"));
let studLoginList=JSON.parse(localStorage.getItem("studLoginDetails"));
let tbody=document.querySelector('.table tbody');
// console.log(tbody);
if(studList!==null){
    // console.log(studList);
    
    for (let index = 0; index < studList.length; index++) {
      const studelement = studList[index];
      const studLoginelement = studLoginList[index];
      tbody.innerHTML+=`
        <tr>
          <td>${studelement.first_name}</td>
          <td>${studelement.last_name}</td>
          <td>${studelement.date}</td>
          <td>${studelement.emailId}</td>
          <td>${studelement.mobileNumber}</td>
          <td>${studelement.address}</td>
          <td>${studelement.gender}</td>
          <td>${studLoginelement.emailId}</td>
          <td>${studLoginelement.password}</td>
        </tr>`;
    }
}

