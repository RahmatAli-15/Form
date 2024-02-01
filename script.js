Email.send({
  Host : "smtp.elasticemail.com",
  Username : "projectuse2526@gmail.com",
  Password : "..................",
    To : 'rahmatali2526@gmail.com',
    From : "projectuse2526@gmail.com",
    Subject : "Donar/Patient Information",
    Body :  body,
  }).then(
    message =>{
      if(message=='OK'){

          swal("Successfull", "Your Data Successfull Received", "success");
      }
      else{

          swal("Something Wrong", "Your Data is not Received", "error");
      }
  }
 );
}
