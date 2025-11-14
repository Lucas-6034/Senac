/*
Painel de Controle de Metas/Tarefas

Vocês vão criar uma página interativa para registrar metas(tarefas) e marcar quando forem concluídas.
Ao final, o projeto deve ser publicado no GitHub.
Utilizem tudo o que já aprendemos em aula com os outros exercícios e o trabalho de vocês.

1) Estrutura do projeto
    Criem uma pasta chamada painel-metas.
        Dentro dela, criem:
            index.html
            Pasta css com style.css
            Pasta js com script.js

2) HTML
    A página deve conter:
        Header:
            Um título principal: “Painel de Metas Diárias”

        Main:
            Uma section central com um pequeno formulário contendo:
                Um input de texto para o nome(título) da meta
                Um textarea para a descrição da meta
                Um select com prioridade (Baixa, Média, Alta)
                Um input do tipo data para selecionar a data que pretente realizar aquela meta
                Um botão para adicionar meta

                Uma div vazia com a classe erro

            Criem uma section com id="lista" e dentro dela uma tag <ul> com id="lista-metas"
            Cada meta deve exibir:
                Texto(título) da meta
                Descrição da meta
                Prioridade
                E a Data escolhida
                Um botão para marcar como concluída (Quando de fato for concluída)
                Um botão para remover aquela meta

        Footer:
            Nome do aluno e data
        Dica:
            Usem tags semânticas e organizem tudo' dentro de seções bem definidas.

3) CSS
    A página deve ser visualmente organizada e responsiva:
        Fundo claro e painel centralizado
        A lista de metas deve ter bordas, sombra e espaçamento adequado
        Cada prioridade deve ter uma cor diferente usando classes:
            Baixa, Media, Alta
        O item marcado como concluído deve mudar completamente de aparência
            Pode ficar com opacidade menor
            Ou ficar riscado
            Use classList.add e classList.remove para controlar isso via CSS
        Os botões devem ter efeito de hover


*/