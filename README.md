Baseado em : 
HTML5 Boilerplate Copyright (c)


npm i -D @babel/core
npm i -D @babel/cli
npm i -D @babel/preset-env
npm i -D babel-loader
npm i -D css-loader
npm i -D file-loader
npm i -D html-webpack-plugin
npm i -D webpack
npm i -D webpack-cli
npm i -D style-loader
npm i -D extract-text-webpack-plugin@next
npm i -D uglifyjs-webpack-plugin
npm i -D node-sass
npm i -D sass-loader
npm i -D webpack-dev-server
npm i -D sass
npm i -D fibers

# Atividade 6
## Requisitos:

Tendo como base a aplicação desenvolvida e evoluída nos exercícios práticos 1, 2 e 3:

1. Você deve deixar seu JavaScript modularizado utilizando import/export do ES2015;
1. Você deve utilizar o Webpack para empacotar seu código em um único arquivo bundle.js que será referenciado no HTML de maneira dinâmica via html-webpack-plugin (explicado na segunda versão do webpack do Exercício Prático 05 - Criando um bundle otimizado para produção com webpack);
1. Além disso, seus arquivos SASS (.scss) devem ser compilados para CSS via webpack (dica: usar o pacote npm sass-loader e configurá-lo no arquivo de configuração do webpack como os outros loaders que já colocamos);
1. Deve ser possível executar seu projeto em tempo de desenvolvimento com npm start (que executará o webpack-dev-server) e também com npm run build (que criará o build final do seu projeto);

## Instruções gerais:

1. O trabalho pode seguir sendo feito em dupla;
1. Continue tendo em mente em fazer implementações simples;
1. O código-fonte deve ser entregue obrigatoriamente via URL do GitHub de um dos integrantes da dupla (entregar link da tag da versão criada. Ex: v0.4.0);
1. Esse exercício deve estar no mesmo repositório dos exercícios práticos 1, 2 e 3, visto que é uma evolução dos mesmos e também deve estar marcado com uma tag (a 4ª versão do seu projeto);
1. Para quem optou por fazer em dupla, os commits devem estar marcando o GitHub do colega @usuario_github_do_colega (que deve ter permissão para commitar no repositório em questão);
1. De preferência, mas não obrigatório, deve ter commit dos dois integrantes da dupla;
1. A cada dia de atraso, desconta-se 1 ponto da nota final, ou seja, após dez dias de atraso o trabalho é zerado.
 

## Dicas finais:

1. Talvez clonar a estrutura já feita e funcionando do Exercício prático 05 - Criando um bundle otimizado para produção com webpack e ir incluindo o código da sua aplicação desenvolvida nos exercícios práticos 1, 2 e 3 seja um caminho mais fácil que partir do exercício prático 3 refazendo a configuração do Webpack. Mas ok se você quiser seguir qualquer um dos caminhos;
1. Se você usar como base a estrutura do exercício prático 5 desinstale (npm uninstall) os pacotes relacionados ao React, pois você não irá utilizá-los. Seriam eles: react, react-dom e babel-preset-react.
1. Se você usou o html5-boilerplate para estruturar o seu projeto incialmente, após essa reorganização com o Webpack, sua estrutura de diretórios ficará mais ou menos assim:
	1. Na raíz do seu projeto deve possuir quatro pastas: src/, dist/, doc/ e node_modules/ (essa última não deve estar versionada no git);
	1. Além das três pastas, deve existir cinco arquivos também na raíz do seu projeto: package.json, package-lock.json, .gitignore, webpack.config.js e readme.md. Você já conhece a finalidade de cada um deles.
	1. Os demais arquivos do html5-boilerplate podem ser movidos para dentro de src/ temporariamente.

# Atividade 7

## Requisitos:
Tendo como base a aplicação desenvolvida e evoluída nos exercícios práticos 1, 2, 3 e 6:

1. Você deve fazer com que sua aplicação seja acessível cumprindo o nível de conformidade "A" do WCAG (Não precisa contemplar todas as diretrizes do nível A, mas pelo menos uma duas talvez seja bacana);
1. [Opcional] Além disso, como forma de ponto extra (bom para quem perdeu pontos na entrega de exercícios atrasados), sua aplicação deve implementar ao menos um role do WAI-ARIA que se mostrar mais adequado (sugestões: widget roles, landmark roles ou live region roles).

## Instruções gerais:
1. O trabalho pode seguir sendo feito em dupla;
1. O código-fonte deve ser entregue obrigatoriamente via URL do GitHub de um dos integrantes da dupla e com a tag adequada (entregar link da tag da versão criada. Ex: v0.5.0);
1. A cada dia de atraso, desconta-se 1 ponto da nota final, ou seja, após cinco dias de atraso o trabalho é zerado.

## Dicas finais:
1. Embora você tenha que cumprir os critérios de sucesso do nível de conformidade "A", não foque em cumprir as regras. Foque na pergunta: "Se eu fosse uma pessoa com deficiência (PCD) - que pode ser cega ou surda ou com dificuldade motora, dentre outras - eu conseguiria usar e entender minha aplicação e a funcionalidade que estou propondo?" e mais: "eu conseguiria operar essa simples aplicação/PoC?"

## Implementado:
* [Marco de navegação](https://www.w3.org/TR/wai-aria-practices-1.1/examples/landmarks/navigation.html)
	- Marcos de Navegação para nevegação rapida
	- Ex: `<nav class="l-main-menu" role="navigation">`
* [Contrast](https://dequeuniversity.com/rules/axe/3.1/color-contrast?application=lighthouse)
	- Ex: Contrastes dos textos ajustados para pessoas com dificuldade de visão
	```scss
	$primaryTextColor: #595959; // Cor basica dos textos do site
	$titleTextColor: white; // Cor basica dos ttitulos do site
	$inputPlaceholderColor: #bdbdbd; // Cor dos placeholders em geral
	$inputDisabledBackgroudColor: whitesmoke; // Cor de fundo dos inputs desabilitados
	$menuBackgroundColor: #031b4d;
	```
* [Names and labels](https://dequeuniversity.com/rules/axe/3.1/label?application=lighthouse)
	- Testos alternativos para conteudos visuais
	- Ex: `<canvas id="myCanvas" aria-label="Tabuleiro do jogo da Velha"></canvas>`

* [dl item](https://dequeuniversity.com/rules/axe/3.1/dlitem)
	- Listas devidamente ordenadas e classificadas
	- Ex:
	```html
	<dl>
		<dt lang="en-us">Variables</dt>
			<dd>Ulilizado para salvar as cores padrões</dd>
		<dt lang="en-us">Nesting</dt>
			<dd>Facilitar a escrita de herança</dd>
		<dt lang="en-us">Modules</dt>
			<dd>Separar informações diferentes em arquivos proprios</dd>
		<dt lang="en-us">Partials</dt>
			<dd>Para não se gerar um arquivo css com o _colors.scss</dd>
	</dl>
	```

* [valid lang](https://dequeuniversity.com/rules/axe/3.1/valid-lang)
	- Elementos de linguagem corretos
	- Ex:
	```html
	...
	<html lang="pt-br">
	...
	<dt lang="en-us">Variables</dt>
	...
	```

* [label](https://dequeuniversity.com/rules/axe/3.1/label)
	- Descrição de todos os tipos de input da pagina
	- Ex:
	```html
	Habilitar IA <input type="checkbox" id="IA" aria-label="Ativar IA"><br/>
	```