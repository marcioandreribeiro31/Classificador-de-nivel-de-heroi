function checketExperience(){
    let heroName = document.getElementById("heroname").value;
    console.log(heroName);
    let experience = document.getElementById("experience").value;
    console.log(experience);
        
    if(heroName == ""  && experience == ""){
        alert('Preencha os campos Nome e Experiência')
    }else if(experience < 1000){
        document.getElementById("levelresult").innerText = `O herói é ${heroName} tem o XP de ${experience} Ferro`
    }else if(experience >= 1001 && experience <= 2000){
        document.getElementById("levelresult").innerText = `O herói ${heroName} tem o XP de ${experience} Bronze`
    }else if(experience >= 2001 && experience <= 5000){
        document.getElementById("levelresult").innerText = `O herói ${heroName} tem o XP de ${experience} Prata`
    }else if(experience >= 5001 && experience <= 7000){
        document.getElementById("levelresult").innerText = `O herói ${heroName} tem o XP de ${experience} Ouro`
    }else if(experience >= 7001 && experience <= 8000){
        document.getElementById("levelresult").innerText = `O herói ${heroName} tem o XP de ${experience} Platina`
    }else if(experience >= 8001 && experience <= 9000){
        document.getElementById("levelresult").innerText = `O herói ${heroName} tem o XP de ${experience} Ascendente`
    }else if(experience >= 9001 && experience <= 10000){
       document.getElementById("levelresult").innerText = `O herói ${heroName} tem o XP de ${experience} Imortal`
    }else 
        document.getElementById("levelresult").innerText = `O herói ${heroName} tem o XP de ${experience} Radiante`
}

function clearForm(){
    document.getElementById("heroname").value = "";
    document.getElementById("experience").value = "";
    document.getElementById("levelresult").innerHTML = "";
    document.getElementById("heroname").focus();
}