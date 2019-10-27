import api from './api';

class App {
    constructor() {
        // Constroi o array repositories
        this.repositories = [];

        // Constroi os elementos pegos em index.html
        this.formElement = document.getElementById('repo-form');
        this.listElement = document.getElementById('repo-list');
        this.inputElement = document.querySelector('input[name=repository]')

        // Chama o método que registra eventos do usuário
        this.registerHandlers();
    }

    // Registra os eventos do usuário
    registerHandlers(){
        this.formElement.onsubmit = event => this.addRepository(event);
    }

    async addRepository(event){
        // Não deixa o form com o funcionamento padrão
        event.preventDefault();
        // Pega o valor do input
        const repoInput = this.inputElement.value;

        if (repoInput.length === 0)
            return;

        // Utilização do axios para requisitar o acesso a página
        // de repositório do api.github
        const response = await api.get(`/repos/${repoInput}`);

        // Dados encontrados em response
        const { name, description, html_url, owner: {avatar_url} } = response.data;

        // Adiciona um novo repositório no array
        this.repositories.push({
            name,
            description,
            avatar_url,
            html_url
        });

        // Zera o valor do input
        this.inputElement.value = '';

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
            linkElement.setAttribute('href', repo.html_url);
            linkElement.appendChild(document.createTextNode('Acessar'));
 
            let listItemElement = document.createElement('li');
            listItemElement.appendChild(imagemElement);
            listItemElement.appendChild(titleElement);
            listItemElement.appendChild(descriptionElement);
            listItemElement.appendChild(linkElement);

            this.listElement.appendChild(listItemElement);
        })
    }

}
// Para executar a classe
new App();