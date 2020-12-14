const app = new Vue({
    el:'#app',
    data:{
      noticias: []
    },
    /* este archivo llama el api del NYtimes para solicitar noticias de literatura, 
    ya funciona con una, hay que repircarlo en las otras cambiando el 0 por 1 porque el JSON
    vienen varias noticias, lo unico es acomodar los styles del css pero habian muchos y me confundia
    tal vez cathe lo pueda hacer mejor ya que los creo, por si de algo les sirve*/
    methods:{
        async traerNoticia(){            
            let resultado = await fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=literature&api-key=eLpBwtpvw3etFfcNFAGXedwzbxLf1XXD');
            let resultadoJson = await resultado.json();
            console.log(resultadoJson)
            if(resultadoJson["status"]=="OK")
            {
                this.noticias.push(
                    {
                        titulo : resultadoJson['response']['docs']['0']['headline']['main'],            
                        noticia: resultadoJson['response']['docs']['0']['lead_paragraph'],
                        descripcion : resultadoJson['response']['docs']['0']['abstract'],
                        img: 'https://static01.nyt.com/' + resultadoJson['response']['docs']['0']['multimedia']['0']['url'],
                    }
                )
            }                                    
            
        }
    }
    
})



