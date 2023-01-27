const btn = document.querySelector('#btn');
const sb = document.querySelector('#calendar-option');

btn.onclick = (event) => {
    event.preventDefault();
    if (sb.selectedIndex === 0 || sb.selectedIndex === 1) {
        const formatter = sb.selectedIndex === 0 ? "d" : sb.selectedIndex === 1 ? "w" : null;
        const date = moment(moment(moment.now())).add(6, formatter);
        document.getElementById("date").innerHTML = moment(date).format("DD-MM-YYYY");
    }
    else if(sb.selectedIndex === 2){
        const date = moment("12-01-2019", "DD-MM-YYYY").subtract(187, "d");
        document.getElementById("date").innerHTML = moment(date).format("DD-MM-YYYY");
    }
};