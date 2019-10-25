class App {
    constructor() {
        this.repositories = [];

        this.formElement = document.getElementById('repo-form');

        this.registerHandlers();
    }

    registerHandlers(){
        // registra os eventos do usuário
        this.formElement.onsubmit = event => this.addRepository(event);
    }

    addRepository(){
        // não deixa o form com o funcionamento padrão
        event.preventDefault();

        // adiciona um novo repositório no array
        this.repositories.push({
            name:'rocketseat.com.br',
            description: 'Tire a sua idéia do papel e dê vida à sua startup.',
            avatar_url= 'https://avatars0.githubusercontent.com/u/28929274?v=4',
            html_url= 'http://github.com/rocketseat/'
        });

        this.render();
    }

    //apaga todo o conteudo da lista e renderiza do zero
    render(){
        this.listElement.innerHTML = ''; // apaga
        // para percorrer no array e realizar
        // operacoes para adicionar os itens em index
        this.repositories.forEach(repo => {
 
            let imagemElement = document.createElement('img')
            imagemElement.setAttribute('src', repo.avatar_url);
 
            let titleElement = document.createElement('strong');
            titleElement.appendChild(document.createTextNode(repo.name));
 
            let descriptionElement = document.createElement('p');
            descriptionElement.appendChild(document.createTextNode(repo.description));
                
            let linkElement = document.createElement('a');
            linkElement.setAttribute('target', '_blank');
            linkElement.appendChild(document.createTextNode('Acessar'));
 
            let listItemElement = document.createElement('li');
            listItemElement.appendChild(imagemElement);
            listItemElement.appendChild(titleElement);
            listItemElement.appendChild(descriptionElement);
            listItemElement.appendChild(linkElement);
        })
    }

}
// Para executar a classe
new App();