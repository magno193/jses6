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

        console.log(this.repositories);
        
    }
}
// Para executar a classe
new App();