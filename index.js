const apiendpoint = "https://crudcrud.com/api/fd937ea29cf141cba25b7886f0c02e6d";
const submitButton = document.getElementById("submit");
document.addEventListener("DOMContentLoaded", () => {
    console.log('vscode');
    async function getUserData() {
        await axios.get(`${apiendpoint}/registeruser`).then((data) => {

            for (let i = 0; i < data.data.length; i++) {
                addNewLineElement(data.data[i]);
            }

        });
    }
    getUserData();
});

submitButton.addEventListener("click", () => {
    const name = document.getElementById("name").value;
    const emailId = document.getElementById("email").value;
    const userdetails = {
        name: name,
        email: emailId
    };
    axios.post(`${apiendpoint}/registeruser`, userdetails);
    addNewLineElement(userdetails);

});

function addNewLineElement(object) {
    const ul = document.getElementById("listOfPeople");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(object.name + " " + object.email));


    const deletebutton = document.createElement("input");
    deletebutton.type = "button";
    deletebutton.value = "Delete";
    deletebutton.addEventListener("click", () => {
        axios.delete(`${apiendpoint}/registeruser/${object._id}`);
    });
    deletebutton.className = "delete";
    li.appendChild(deletebutton);
    const updateButton = document.createElement("input");
    updateButton.type = "button";
    updateButton.value = "Update";
    
    li.appendChild(updateButton);
    ul.appendChild(li);
    console.log(object);
}
