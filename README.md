<h1 align="center">A3 Planner Semanal</h1>

## Sobre:
Projeto criado para a A3 das materias de usabilidade web e sistemas, desenvolvimento WEB de um Planner hospedado Online disponivel para qualquer pessoa, o Planner inclui funções como 

<ul> 
<li>Adicionar tarefas</li>
<li>Remover tarefas</li>
<li>Logar com conta *</li>
<li>Adicionar Observações</li>
<li>Limpar tarefas</li>
</ul>


<div style.gap='5px'> 
<img src="https://img.shields.io/badge/NODE-v16.17.0-red"/>
<img src="https://img.shields.io/badge/NPM-v8.15.0-purple"/>
<img src="https://img.shields.io/badge/frontend-HTML+CSS-blue"/>
<img src="https://img.shields.io/badge/Backend-JS-green"/>
</div>

## Visualizando o Projeto na sua maquina:

Abrir terminal em uma pasta e rodar os comandos:

```git clone https://github.com/Muriloviskexe/A3-Usabilidade-Sistemas.git```
```git clone https://github.com/PedroHPC1/ProjetoA3.git```

## Front-end

```NPM install```

e para rodar 

```Abrir com LIVE SERVER```

## Back-end

```Instalar o MySQL WorkBench e o MySQL Server ```

```Fazer a instalaçai e criar o usuario "teste" com a senha ```

```Abrir o banco e criar as TABLES com o comando: ```

<p >
  CREATE DATABASE IF NOT EXISTS PlanejaMente;
  
    USE PlanejaMente;
    CREATE TABLE tasks (
        id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(45) NOT NULL,
        data VARCHAR(45) NOT NULL,
        categoria VARCHAR(10) NOT NULL,
        concluído VARCHAR(45) NOT NULL
    );
    
    CREATE TABLE obs (
        id INT PRIMARY KEY AUTO_INCREMENT,
        id_evento INT NOT NULL,
        Foreign Key (id_evento) REFERENCES tasks(id),
        texto VARCHAR(45) NOT NULL 
 </p>

 ```Abra a extensão ThunderClient e crie uma request POST com a URL "http://localhost:4000/tasks" > Vá em Body e em JSON utilize o modelo abaixo para criar algumas tarefas```

  <p>
    {
        "nome": "",
        "data": "",
        "categoria": ""
    }
  </p>

```Posteriormente crie uma outra request com a mesma URL, mas como GET, e rode para obter a lista de tarefas```

```Crie mais uma request como DELETE com a mesma URL, mas acrescente um "/id" no final, sendo que o ID deve ser o número de ID da tarefa que você deseja deletar, rode ela e você deletará uma tarefa```

```Rode novamente a request GET de tarefas, obtendo novamente a lista de tarefas```

```Crie mais uma request como PUT com a mesma URL, mas acrescente um "/id" no final, sendo que o ID deve ser o número de ID da tarefa que você deseja alterar, e logo em seguida abra a aba Body > JSON e utilize o modelo abaixo para alterar a sua tarefa (se lembre que nenhum campo pode ser indefinido ou vázio)```

 <p>
    {
        "nome": "",
        "categoria": "",
        "concluído": "true/false"
     }
 </p>

```Rode novamente a request GET de tarefas, obtendo novamente a lista de tarefas```

```Abra a extensão ThunderClient e crie uma request POST com a URL "http://localhost:4000/obs" > Vá em Body e em JSON utilize o modelo abaixo para criar algumas tarefas (o campo id_evento deve ser preenchido com o ID da tarefa que deseja alocar está observação)```

   <p>
     {
        "id_evento": 1,
        "texto": "Queijo"
    }
   </p>
   
```Posteriormente crie uma outra request com a mesma URL, mas como GET, e rode para obter a lista de observações```

```Crie mais uma request como DELETE com a mesma URL, mas acrescente um "/id" no final, sendo que o ID deve ser o número de ID da tarefa que você deseja deletar, rode ela e você deletará uma observação```

```Rode novamente a request GET de observações, obtendo novamente a lista de observações```

```Crie mais uma request como PUT com a mesma URL, mas acrescente um "/id" no final, sendo que o ID deve ser o número de ID da observação que você deseja alterar, e logo em seguida abra a aba Body > JSON e utilize o modelo abaixo para alterar a sua observação (se lembre que nenhum campo pode ser indefinido ou vázio)```
  <p>
    {
        "texto": ""
    }
</p>

```Rode novamente a request GET de observações, obtendo novamente a lista de observações```




