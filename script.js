fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {

        let postyDiv = document.getElementById("posty");

        postyDiv.innerHTML +=
            `<tr>
                <th>user ID: </th>
                <th>ID:</th>
                <th>title:</th>
                <th>completed:</th>
            </tr>`

        for (let i = 0; i < json.length; i++) {

            postyDiv.innerHTML += 
                `<tr>
                    <td class = "id">${json[i].userId}</td>
                    <td class = "id">${json[i].id}</td>
                    <td class = "name">${json[i].title}</td>
                    <td class = "email">${json[i].completed}</td>
                </tr>`
        }
    });





