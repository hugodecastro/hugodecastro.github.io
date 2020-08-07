// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

//import analytics.js
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
    
ga('create', 'UA-12345-6​', 'auto', {'name': 'contato'});

//nome da página
var page = document.location.pathname;

//botão Entre em Contato
var contato = document.getElementsByClassName("menu-lista-contato");

//botão Download PDF
var download = document.getElementsByClassName("menu-lista-download");

//interação na collection contato
for(i = 0; i < contato.length; i++) {
    contato[i].addEventListener("click", function () {
        ga('contato.send', {
            hitType: 'pageview',
            eventCategory: 'menu',
            eventAction: 'entre_em_contato',
            eventLabel: 'link_externo',
        }, page);
    }, false);
}

ga('create', 'UA-12345-6​', 'auto', {'name': 'download'});

//interação na collection download
for(i = 0; i < download.length; i++) {
    download[i].addEventListener("click", function () {
        ga('download.send', {
            hitType: 'pageview',
            eventCategory: 'menu',
            eventAction: 'download_pdf',
            eventLabel: 'download_pdf',
        }, page);
    }, false);
}

switch(page) {
    case '/analise.html':
        ga('create', 'UA-12345-6​', 'auto', {'name': 'analise'});

        //retorna elemento cardBox
        let cardBox = document.getElementsByClassName("card-montadoras");

        for(i = 0; i < cardBox.length; i++){  
            cardBox[i].addEventListener("click", function(){
                //retorna o data.id ('lorem', 'ipsum', 'dolor')
                let idCardBox = $(this).attr('data-id');
                ga('analise.send', {
                    hitType: 'click',
                    eventCategory: 'analise',
                    eventAction: 'ver_mais',
                    eventLabel: idCardBox,
                    }, page);
            })
        } 
        break;
    case '/sobre.html':
        ga('create', 'UA-12345-6​', 'auto', {'name': 'sobre'});
        let form = document.getElementsByClassName('contato');
        let nome = document.getElementById("nome");
        let email = document.getElementById("email");
        let telefone = document.getElementById("telefone");
        let aceite = document.getElementById("aceito");
     
        nome.addEventListener('input', function(){
            let value = nome.value
            if(value != "") {
                ga('sobre.send', {
                    hitType: 'preencher',
                    eventCategory: 'contato',
                    eventAction: nome.id,
                    eventLabel: 'preencheu',
                    }, page);
            }
        })
        email.addEventListener('input', function(){
            let value = email.value
            if(value != "") {
                ga('sobre.send', {
                    hitType: 'preencher',
                    eventCategory: 'contato',
                    eventAction: email.id,
                    eventLabel: 'preencheu',
                    }, page);
            }
        })
        telefone.addEventListener('input', function(){
            let value = telefone.value
            if(value != "") {
                ga('sobre.send', {
                    hitType: 'preencher',
                    eventCategory: 'contato',
                    eventAction: telefone.id,
                    eventLabel: 'preencheu',
                    }, page);
            }
        })
        aceite.addEventListener('input', function(){
            if(aceite.checked == true) {
                ga('sobre.send', {
                    hitType: 'preencher',
                    eventCategory: 'contato',
                    eventAction: aceite.id,
                    eventLabel: 'preencheu',
                    }, page);
            }
        })

        for(i = 0; i < form.length; i++) {
            form[i].addEventListener('submit', function(){
                ga('sobre.send', {
                    hitType: 'enviar',
                    eventCategory: 'contato',
                    eventAction: 'enviado',
                    eventLabel: 'enviado',
                    }, page);
            });
        }
        break;
}