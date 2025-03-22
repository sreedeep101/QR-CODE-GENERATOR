let qrcontaian = document.getElementById('qrcontaian');
let qrCode = document.getElementById('qrCode');
let qrText = document.getElementById('qrText');
let output = document.getElementById('output');
function generateQR(){
  if(qrText.value.length>0){
    qrCode.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    qrcontaian.classList.add("show-img");
    output.innerHTML="successfuly created !!";
  }
  else{
    qrCode.src = "";
    qrcontaian.classList.remove("show-img");
    output.innerHTML="Sorry there is an Error occurred";
    qrText.classList.add('error');
        setTimeout(()=>{
            qrText.classList.remove('error');
        },1000)
       }
  }