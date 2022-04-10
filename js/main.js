const apiUrl = "https://restcountries.com/v2/name/";
const countryInput = document.querySelector('#input');
const SearchBtn = document.querySelector('#searchBtn');
const row = document.querySelector('.row');


SearchBtn.addEventListener('click',()=>{
  let country = countryInput.value;

 setTimeout(function(){
  console.log(country);
 },5000)

  if(country.length != 0){
      let apidata = `${apiUrl}${country}`;
  row.innerHTML = "";
  fetch(apidata)
    .then((countryData) => countryData.json())
    .then((data) => {
      splice(data);
    })
    .catch((err) => console.log(err));
  }else{
  row.innerHTML = "search field is required";

  }

})


  const splice = (data) => {
    console.log(data);
        
      for (let x = 0; x <= data.length; x++) {
        process(data[x]);
      }
     

  };


  const process = (data) => {
      if(data.area ==undefined){
        data.area = ""
      }
      if(data.borders ==undefined){
        data.borders = ""
      }
      if(data.regionalBlocs == undefined){
        data.regionalBlocs = ""
      }
    let htmlData = `<div class="card">
                        <div class="flag" style="background-image:url('${(data.flag != "undefined")?  data.flag : ""}" alt="${data.name}');">  </div>
                        <div class="details">
                            <div class="name">Country name: ${data.name} </div>
                            <div class="nativename">Native name:${data.nativeName}</div>
                            <div class="subrigion">Sub-rigion: ${data.subregion}</div>
                            <div class="region">Rigion: ${data.region}</div>
                            <div class="capital">Capital: ${data.capital}</div>
                            <div class="calling-code">Calling Code: +${data.callingCodes}</div>
                            <div class="population">Population: ${data.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }</div>
                            <div class="language">Language: ${data.languages[0].name}</div>
                            <div class="language">Native language: ${data.languages[0].nativeName}</div>
                            <div class="timezone">Timezone: ${data.timezones}</div>
                            <div class="topleveldomain">Domain: ${data.topLevelDomain}</div>
                            <div class="lontitiude">longtitude & Latitude: ${data.latlng}</div>
                            <div class="area">Area: ${data.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }m<sup>2</sup></div>
                            <div class="gini">Gini index: ${data.gini}</div>
                            <div class="border">Bordering countries: ${JSON.stringify(data.borders).replace(/[#_"]]/g, "")}</div>
                            <div class="numeric-code">Numeric code: ${data.numericCode}</div>
                            <div class="currency-name">Currency name: ${data.currencies[0].name}</div>
                            <div class="currency-code">Currency code: ${data.currencies[0].code}</div> 
                            <div class="currency-symbol">Currency symbol: ${data.currencies[0].symbol }</div>
                            <div class="language">Language: ${data.languages[0].name}</div>
                            <div class="navtive-language">Native Langaue: ${data.languages[0].nativeName }</div>
                            <div class="language-abbr">Language abbr: ${data.languages[0].iso639_2}</div>
                            <div class="regional-Blocs-name">Rigional Blocs: ${(data.regionalBlocs.length !=0 )? data.regionalBlocs[0].name : "" }</div>
                            <div class="regional-Blocs-abrr">Regional Blocs Abrr: ${(data.regionalBlocs.length != 0)? data.regionalBlocs[0].acronym : ""}</div>
                        </div>

                    </div>`;

   row.innerHTML += htmlData;
  };







