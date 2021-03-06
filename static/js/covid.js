let requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

async function get_th() {
    let Confirmed, Recovered, Hospitalized, Deaths;
    let NewConfirmed, NewRecovered, NewHospitalized, NewDeaths;
    let UpdateDate;
    await fetch("http://158.108.182.10:3000/get_th_stat", requestOptions)
        .then(response => response.json())
        .then(json => {
            Confirmed = json.Confirmed
            document.getElementById("Confirmed Value").innerHTML = Confirmed
            Recovered = json.Recovered
            document.getElementById("Recovered Value").innerHTML = Recovered
            Hospitalized = json.Hospitalized
            document.getElementById("Hospitalized Value").innerHTML = Hospitalized
            Deaths = json.Deaths
            document.getElementById("Deaths Value").innerHTML = Deaths
            NewConfirmed = json.NewConfirmed
            document.getElementById("New Confirmed Value").innerHTML = NewConfirmed
            NewRecovered = json.NewRecovered
            document.getElementById("New Recovered Value").innerHTML = NewRecovered
            NewHospitalized = json.NewHospitalized
            document.getElementById("New Hospitalized Value").innerHTML = NewHospitalized
            NewDeaths = json.NewDeaths
            document.getElementById("New Deaths Value").innerHTML = NewDeaths
            UpdateDate = json.UpdateDate
            document.getElementById("Update Date Value").innerHTML = UpdateDate
        })
        .catch(error => console.log('error', error));
}


get_th().then(r => {
    return r;
})
// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
// };

// fetch("http://4439fc04db58.ngrok.io/get_th_stat", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));