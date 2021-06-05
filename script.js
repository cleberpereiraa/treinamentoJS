function clicar(){
    var n1 = document.getElementById('numb1');
    var n2 = document.getElementById('numb2') 
    let resp = document.getElementById('modi')
    var result = Number(n1.value) - Number( n2.value)
  
  if(n1.value > 2021 || n2.value ==0 || n1.value < n2.value){
     alert("ERRO! tente novamente")}
  else{
      //aqui declaro a parte do name de radio da label
      let sexo = document.getElementsByName('sex')
        var genero = ""
        //crio um elemento img
        var img = document.createElement("img")
        //coloco id no elemento
        img.setAttribute('id', 'foto')
        //parte do homem
            if(sexo[0].checked){
                genero = "homem"
                if (result >= 0 && result < 11){
                genero = "Criança"
                //aqui coloco uma imagem no elemento que criei
                img.setAttribute('src', 'img/criança.homem.png')
                }else if (result >= 11 && result < 20){
                genero = "Adolecente"
                img.setAttribute('src', 'img/adolecente.homem.png')
                }else if (result >= 20 && result < 60){
                genero = "Adulto"
                img.setAttribute('src', 'img/adulto.png')
                }else{
                genero = "Idoso"
                img.setAttribute('src', 'img/idoso.H.png')}
                //parte mulher
            }else if(sexo[1].checked){
                    genero = "Mulher"
                if(result >= 0 && result < 11){
                    genero = "Criança"
                    img.setAttribute('src', 'img/criança.mulher.png')
                }else if(result >= 11 && result < 20){
                    genero = "Adolecente"
                    img.setAttribute('src', 'img/mulheradolecente.png')
                }else if(result >= 20 && result < 60){
                    genero = "Adulto"
                    img.setAttribute('src', 'img/mulher.adulta.png')
                }else{
                    genero = "Idosa"
                    img.setAttribute('src', 'img/mulherIdosa.png')
                }
            }
            resp.innerHTML = "voce é uma " + genero +  " de " + result + " anos"
            //aparecer imagem
            resp.appendChild(img)
   
}}