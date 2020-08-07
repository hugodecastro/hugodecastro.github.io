# hugodecastro.github.io

## Case Técnico DP6
- Implentação do [_Google Analytics_](https://analytics.google.com/analytics/web/provision/#/provision) nas páginas do projeto

## Analytics.js
- Utilizado a biblioteca [_analytics.js_](https://developers.google.com/analytics/devguides/collection/analyticsjs):
```javascript
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-XXXXX-Y', 'auto');
ga('send', 'pageview');
```
- Para todo analytic foi criado um event listener que irá disparar para as informações para o Google Analytics quando acionado, conforme exemplo:
```javascript
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
```
