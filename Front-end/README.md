# UDWM 16/10

## Para clonar este repositório:

Abrir terminal em uma pasta e rodar os comandos:

```git clone https://github.com/mmamorim/UDWM1610.git```

Entrar na pasta criada

```npm install```

e para rodar 

```npm run dev```

## Para criar um novo projeto do zero:

```npm create vite@latest```

Entrar na pasta criada

```npm install```

e para rodar 

```npm run dev```


## Para instalar o bootstrap

executar: 

```npm install bootstrap```

```
// src/main.js
import { createApp } from "vue";
import App from "./App.vue";

import "bootstrap/dist/css/bootstrap.css";

createApp(App).mount("#app");

import "bootstrap/dist/js/bootstrap.js";
```

## Para instalar o tailwindcss com windcss

executar: 

```npm install -D vite-plugin-windicss windicss```

No arquivo de configuração do Vite ```vite.config.js``` adicionar:

```
import WindiCSS from 'vite-plugin-windicss'

export default {
  plugins: [
    WindiCSS(),
  ],
}
```
No arquivo ```main.js``` adicionar:

```
import 'virtual:windi.css'
```

## Aula 23/10

* Componentes aninhados
* Passando propriedades para componentes (props)
