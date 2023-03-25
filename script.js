console.log('ciao')
const bottoneGatto = document.querySelector('.buttoncat')
const myButton = document.querySelector('.btn-button')
const URL = [
  'https://api.thecatapi.com/v1/images/search',
  '?limit=3',
  // '&page=10',
  // '&order=desc',
  '&api_key=live_DIOPoYoNtmLp7eNWSQNpUAgmUmXZN9mZRAmRHJ8GNgJk7e5IXJAkN8kvyl1K8EMH'
].join('')

console.log(URL)


//la forma piu facile per risolvere l'esercizio è:

//<button type="button" onclick="mycatAsync()" class="buttoncat">Generare gattini</button> ma ormai non si usa l'onclick sul html


// Codice meno leggibile con la promessa
function mycatPromise() {
    return fetch(URL)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        const img1 = document.querySelector('#div1');
        const img2 = document.querySelector('#div2');
        const img3 = document.querySelector('#div3');
        img1.src = data[0].url;
        img2.src = data[1].url;
        img3.src = data[2].url;
      })
      .catch(err => console.error(err));
  }


  bottoneGatto.addEventListener('click', () => {
    mycatPromise().catch(err => console.error(err));
  });
  
  
mycatPromise()  

  

//Codice leggibile grazie ad async/await la quale aspetta la risposta delle funzuoni. con aggiunta di forach per iterare le 3 immagini che devono comparire nella pagina
  async function mycatAsync() {
    try {
        const res = await fetch(URL);
        const data = await res.json();
        console.log(data)
        const images = document.getElementsByTagName('img')
        const arrayImages = [...images]
        arrayImages.forEach((image, item) => {
          image.src = data[item].url
        })
       
    } catch (err) {
        return console.error(err);
    }
  }

myButton.onclick = mycatAsync;



// const URL2 = [
//   'https://api.thecatapi.com/v1/images/search',
//   '?limit=3',
//   '&order=Desc',
// ].join('');

// console.log(URL2)