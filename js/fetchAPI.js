// Json dosyasından veri çekme

fetch('http://localhost:8080/data/settings.json')
.then(response => {
    if (!response.ok) {
        throw new Error('Connection Failed');
    }
    return response.json();
})
.then(data => {
    console.log(data[0].userName);
})
.catch(error => console.error('Hata:', error));

let userListDOM = document.querySelector('#userList');

// API üzerinden veri çekme
fetch('https://jsonplaceholder.typicode.com/posts').then(
    response => response.json()
).then(responseJson => {
    responseJson.forEach(element => {
        let liDOM = document.createElement('li');
        liDOM.innerHTML = element.title;
        userListDOM.append(liDOM);
    });
});