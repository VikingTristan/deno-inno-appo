const innovationDays = [
    {
       "title":"Tom's Fantasy Stories",
       "description":"Web and text based social game. Made with AngularJS. I actually don't remember what the idea was here."
    },
    {
       "title":"Web Radio",
       "description":"A web radio where the GUI was an actual radio. Created with laravel (PHP) and jQuery."
    },
    {
       "title":"ECMAScript 6",
       "images":[
          "./images/es6.gif"
       ],
       "description":"Learn ECMAScript 6 and its new features. Used ES6 Katas to learn by doing."
    },
    {
       "title":"Autocomplete and RTS game",
       "images":[
          "./images/unityrts1.png",
          "./images/unityrts2.gif",
          "./images/unityrts3.png"
       ],
       "description":"Create a custom autocomplete using google API's. Also try to create an RTS in Unity."
    },
    {
       "title":"RTS game 2",
       "images":[
          "./images/unityrts5.gif",
          "./images/unityrts6.gif",
          "./images/unityrts7.gif"
       ],
       "description":"Keep working on an RTS game in Unity."
    },
    {
       "title":"RTS game 3",
       "images":[
          "./images/unityrts8.gif"
       ],
       "description":"Keep working on an RTS game in Unity."
    },
    {
       "title":"MEVN stack",
       "images":[
          "./images/mevn1.png",
          "./images/mevn2.png"
       ],
       "description":"Try to create a simple quotes app with MongoDB, Express.js, VueJS, and Node.js"
    },
    {
       "title":"MEVN stack 2",
       "images":[
          "./images/mevn3.png",
          "./images/mevn4.png"
       ],
       "description":"Continue creating a quotes app with a MEVN stack."
    },
    {
       "title":"Deploying MEVN stack",
       "images":[
          "./images/mevn6.png",
          "./images/mevn7.png"
       ],
       "description":"Quotes app works locally. Time to test out different deployment methods. Research Digital Ocean, Docker Swarm and Captain Duck Duck."
    },
    {
       "title":"Webpack 4",
       "images":[
          "./images/webpack4.gif",
          "./images/webpack42.png"
       ],
       "description":"Look into Webpack and how it could benefit us."
    },
    {
       "title":"Fyllord",
       "images":[
          "./images/fyllord.png",
          "./images/fyllord2.png",
          "./images/fyllord3.png"
       ],
       "description":"Create a web app called 'Fyllord'. This web app used the Speech Recognition API to detect Norwegian 'filler' words."
    },
    {
       "title":"Deep dive into Captain Duck Duck",
       "images":[
          "./images/duckduck.png",
          "./images/duckduck2.png"
       ],
       "description":"Take a closer look into Captain Duck Duck and how it works behind the scenes."
    },
    {
       "title":"VikingBot",
       "images":[
          "./images/vikingbot2.png",
          "./images/vikingbot4.png"
       ],
       "description":"Create a slack app that will use the Quotes web app API from previous Innovation Days. Any slack user can add or get quotes submitted by other slack members."
    },
    {
       "title":"Make VikingBot rap",
       "images":[
          "./images/vikingbot3.png"
       ],
       "description":"Try to generate random strings that make somewhat sense and also rhyme.",
       "link":"https://www.youtube.com/watch?v=dzNBIScGJQc"
    },
    {
       "title":"Make VikingBot a philosopher",
       "images":[
          "./images/vikingbot5.png",
          "./images/vikingbot6.png"
       ],
       "description":"Based on existing data from different philosophies, try to make VikingBot generate philosophical arguments."
    },
    {
       "title":"Strapi and Nuxt",
       "images":[
          "./images/strapi.png",
          "./images/strapi2.png"
       ],
       "description":"Try to create something with Strapi as a headless CMS and API and Nuxt as frontend."
    },
    {
       "title":"Sockets",
       "images":[
          "./images/sockets.png",
          "./images/sockets2.png",
          "./images/sockets3.png",
          "./images/sockets4.png"
       ],
       "description":"Look into web sockets and what fun we can do with it. Also read up on Pusher and JWT."
    },
    {
       "title":"GraphQL",
       "images":[
          "./images/graphql.png",
          "./images/graphql2.png"
       ],
       "description":"Research GraphQL and try to use it with the Strapi and Nuxt app."
    },
    {
       "title":"Vue Composition API",
       "images":[
          "./images/compositionapi.png",
          "./images/compositionapi2.png"
       ],
       "description":"Research the new Vue Composition API."
    },
    {
       "title":"Cloud Functions",
       "images":[
          "./images/cloudfunctions.png",
          "./images/cloudfunctions2.png"
       ],
       "description":"Research Firebase and its Cloud Functions integration."
    },
    {
       "title":"Random JavaScript things",
       "images":[
          "./images/randomjs.png"
       ],
       "description":"Research random weird JavaScript things."
    },
    {
       "title":"Lobby system",
       "images":[
          "./images/lobby.png",
          "./images/lobby2.png"
       ],
       "description":"Try to create a simple lobby system that players can leave and join using a room code."
    },
    {
       "title":"Backend as a service",
       "images":[
          "./images/baas.png",
          "./images/baas2.png",
          "./images/baas3.png"
       ],
       "description":"Look into different platforms that offer serverless 'backend as a service'. 8Base and Sanity."
    },
    {
       "title":"Report a player",
       "images":[
          "./images/report.png",
          "./images/report2.png",
          "./images/report3.png",
          "./images/report4.png"
       ],
       "description":"Create a web app that anyone can use to report any player, from any game. Use tailwind, Nuxt, and GitHub Actions to deploy to GitHub Pages.",
       "link":"https://vikingtristan.github.io/ReportAPlayer/"
    },
    {
       "title":"Sanity",
       "images":[
          "./images/sanity.png",
          "./images/sanity2.png",
          "./images/sanity3.png"
       ],
       "description":"Research and try to create something with Sanity."
    },
    {
       "title":"Form Generator",
       "images":[
          "./images/formgenerator.png",
          "./images/formgenerator2.png",
          "./images/formgenerator3.png",
          "./images/formgenerator4.png"
       ],
       "description":"Create a frontend with 10 lines of code that has a super dynamic form generator: The Form Generator K-884973x-HEL."
    },
    {
       "title":"VikingBot trading",
       "images":[
          "./images/trade.png",
          "./images/trade2.png",
          "./images/trade3.png"
       ],
       "description":"Further expand on VikingBot, giving him the ability to trade crypto."
    },
    {
       "title":"Crypto and taxes",
       "images":[
          "./images/cryptotax.png",
          "./images/cryptotax2.png",
          "./images/cryptotax3.png",
          "./images/cryptotax4.png",
          "./images/cryptotax5.png"
       ],
       "description":"Any profit made from crypto must be taxed. Create a web app that does this for you."
    },
    {
       "title":"Three.js",
       "images":[
          "./images/threejs.png"
       ],
       "description":"Research Three.js"
    },
    {
       "title":"Scroll effect",
       "images":[
          "./images/scroll.png",
          "./images/scroll2.png",
          "./images/scroll3.gif"
       ],
       "description":"Try to create some kind of scrolling effect."
    },
    {
       "title":"Drawing a line",
       "images":[
          "./images/line.png",
          "./images/line2.png",
          "./images/line3.png"
       ],
       "description":"Use canvas to draw different things."
    },
    {
       "title":"Vue 3 + Vite",
       "description":"Research Vue 3 and Vite"
    },
    {
       "title":"Deno",
       "description":"Create a server with Deno that serves this very page."
    }
 ]

export {
    innovationDays
}