var formularioList = [];

function addInfoToSystem(pname, pemail, ppais, pconsulta){

    var newInfo = {
        name: pname,
        email: pemail,
        pais: ppais,
        consulta: pconsulta
    };
    console.log(newInfo);
    formularioList.push(newInfo);
    localStorageFormularioList(formularioList);

}

function getFormularioList(){
    var almaList = localStorage.getItem('LocalFormularioList');
    if(almaList == null){
        formularioList=[];

    }else{
        formularioList = JSON.parse(almaList);
    }
    return formularioList;
}

function localStorageFormularioList(plist){
  localStorage.setItem('localFormularioList', JSON.stringify(plist)); 
}
