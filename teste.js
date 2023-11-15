function adcTarefa() {
    var tarefa = document.querySelector('#input-segunda');
    const value = tarefa.value.trim();

    if (value !== '') {
        const diaDaSemana = document.querySelector('#dia-da-semana').value;
        const listaDeTarefas = document.getElementById(diaDaSemana);
        
        if (listaDeTarefas) {
            const novaTarefa = document.createElement('li');
            novaTarefa.textContent = value;
            listaDeTarefas.appendChild(novaTarefa);

            tarefa.value = ''; // Limpa o campo de entrada após adicionar a tarefa
        } else {
            alert('Dia da semana inválido.');
        }
    } else {
        alert('Por favor, insira uma tarefa válida.');
    }
}