let $=require('jquery')
let fs=require('fs')
let filename='contacts'


$('#add-to-file').on('click',()=>{
  let name=$('#Name').val()
  let email=$('#Email').val()
  let usrName=$('#usrName').val()
  let pass=$('#Password').val()

  fs.appendFile('contacts','name:'+name+',email:'+email+',User Name:'+usrName+',password:'+pass+'\n')

})


function createContacts(){
  //check if file exist
  if(fs.existsSync(filename)){
    //process if file exist
  }
  else{
    console.log("File doesn\'t exist.Creating new file")
    fs.writeFile(filename,'',(err)=>{
      if(err)
      console.log(err);
    })
  }
}

createContacts()
