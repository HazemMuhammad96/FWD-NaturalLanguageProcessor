
import handleSubmit from "./js/handleSubmit";
import "./styles/style.scss";

function onSubmit(e) {
    e.preventDefault();
    const url = document.getElementById("article-url").value;


    function updateUI(res) {
        console.log(res);

        const container = document.getElementById("result-list");

        container.innerHTML = "";
        
        document.getElementById("result-section").style = "display:flex;";

        Object.keys(res).forEach(it => {
            const wrapper = document.createElement('li');

            const label = document.createElement('span');
            label.innerHTML = it + ": ";
            wrapper.appendChild(label);

            const value = document.createElement('span');
            value.innerText = res[it].toLowerCase();
            wrapper.appendChild(value);

            container.appendChild(wrapper);
        })

    }
    handleSubmit(
        url,
        updateUI,
        (err) => alert(err)
    );

}


export {
    onSubmit
}