const resultado = document.querySelector(".resultado");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () =>{
        const botonApper = boton.textContent;

        if(boton.id === "limpiar"){
            resultado.textContent = "0";
            return;
        }

        if(boton.id === "borrar"){
            if(resultado.textContent.length === 1 || resultado.textContent === "Math Error!"){
                resultado.textContent = "0";
            }else{
                resultado.textContent = resultado.textContent.slice(0, -1);
            }
            return;
        }

        if(boton.id === "igual"){
            try{
                resultado.textContent = eval(resultado.textContent);
            }catch{
                resultado.textContent = "Math Error!"
            }
            return;
        }

        if(resultado.textContent === "0" || resultado.textContent === "Math Error!"){
            resultado.textContent = botonApper;
        }else{
            resultado.textContent += botonApper;
        }
    })
})