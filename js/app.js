document.getElementById("btnCalcular").addEventListener("click", function(){
    const Nome =
    document.getElementById("cxnome").value;
        const Placa =
            document.getElementById("cxplaca").value;
                const modelo =
                    document.getElementById("cxmodelo").value;
                        const dias =
                            document.getElementById("cxdias").value;
                                const valorDiaria =
                                    document.getElementById("cxvalor").value;
                                        const valorSemDesconto = dias * valorDiaria;
                                            let valorComDesconto = valorSemDesconto;
                                                if (valorSemDesconto >150) {
                                                    valorComDesconto = valorSemDesconto *0.9; 
                                                    // Aplica 10% de desconto.
                                                }
// Exibe o resumo  
document.getElementById("resumoNome").textContent = `Nome: ${Nome}`;
    document.getElementById("resumoPlaca").textContent = `Placa: ${Placa}`;
        document.getElementById("resumoModelo").textContent = `Carro: ${modelo}`;
            document.getElementById("resumoDias").textContent = `Dias: ${dias}`;
                document.getElementById("resumoValor").textContent = `Valor sem desconto: R$ ${valorSemDesconto.toFixed(2)} | Valor com desconto: R$ ${valorComDesconto.toFixed(2)}`;
                    document.getElementById("btnSair").addEventListener("click", function () {
                            alert("Obrigado! Volte sempre!");
                                document.getElementById("btnLimpar").addEventListener("click", function () {
                                    // Limpa todos os campos de entrada
                                    document.getElementById("cxnome").value = "";
                                    document.getElementById("cxplaca").value = "";
                                    document.getElementById("cxmodelo").value = "";
                                    document.getElementById("cxdias").value = "";
                                    document.getElementById("cxvalor").value = "";

                                    // Limpa o resumo
                                    document.getElementById("resumoNome").textContent = "";
                                    document.getElementById("resumoPlaca").textContent = "";
                                    document.getElementById("resumoModelo").textContent = "";
                                    document.getElementById("resumoDias").textContent = "";
                                    document.getElementById("resumoValor").textContent = "";
                                });
                            });                                               
                         });