$( document ).ready(function() {
    $('#exampleModal').modal('toggle')
});

//funcion para mostrar campos de registar usuario por tipo
function MostarCamposMayorista(){
    var datos = document.getElementById('inlineFormCustomSelectPref').value;
    if(datos == 1 ){
        document.getElementById('IdCampoMinorista').style.display = 'block';
        document.getElementById('IdCampoMayorista').style.display = 'none';       
    }else if (datos == 2){
        document.getElementById('IdCampoMayorista').style.display = 'block';
        document.getElementById('IdCampoMinorista').style.display = 'none';
    }else{
        document.getElementById('IdCampoMayorista').style.display = 'none';
        document.getElementById('IdCampoMinorista').style.display = 'none';
    }
 }











