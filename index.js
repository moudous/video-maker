const readline = require('readline-sync')
function start() {
    const content = {}

    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSearchTerm() {
        return readline.question('Digite o termo de pesquisa do Wikpedia: ');
    }

    function askAndReturnPrefix(){
        const prefixes  = ['Who is','What is', 'The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes,'Escolha uma opção: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]
        return selectedPrefixText;
        
    }

    console.log(content)
}

start()