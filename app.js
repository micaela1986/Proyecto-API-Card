const cardsnumber = document.getElementById('cardsnumber');

const url = 'https://protected-taiga-89091.herokuapp.com/api/card'


fetch(url)
.then((resp) => resp.json())
.then((data) => printData(data.data))
.catch((error) => console.log(error))


   
const printData = (arr) =>{
    let str = '';
    for(let i = 0; i <arr.length; i++){
      const cardnumber = arr[i].cardnumber
      const spanishName = arr[i].spanishName
      const _id = arr[i]._id
      const meaning = arr[i].meaning
      const sakuraCard = arr[i].sakuraCard
      str = str + `
      <div class="cardnumber">
      <figure>
        <img src ="${sakuraCard}" alt="${sakuraCard}" width="180">
      </figure>
      <p>Nombre:${spanishName} </p>
      <p>_id: "${_id}" </p>
      <span> Sentido: "${meaning}" </span>
      </div>
      
        
        `   
    }
    cardsnumber.innerHTML = str; 
}

        
        
            
        
        
        
        
        
     













        


        
        
        
        

