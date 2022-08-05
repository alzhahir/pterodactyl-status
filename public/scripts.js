var headers = new Headers();
headers.set("Content-Type", "application/javascript; charset=utf-8")

var xmlhttp = new XMLHttpRequest();
var url = "/api/get/status"

xmlhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        var spinner = document.getElementById("loadingSpinner");
        var table = document.getElementById("statusTable");
        var data = JSON.parse(this.responseText);
        var tableBody = table.createTBody();
        var tableHeader = table.createTHead();
        var headerRow = tableHeader.insertRow(0);
        var noHeader = headerRow.insertCell(0);
        //var idHeader = headerRow.insertCell(1);
        var nameHeader = headerRow.insertCell(1);
        var statusHeader = headerRow.insertCell(2);
        noHeader.innerHTML = "<b>#</b>";
        //idHeader.innerHTML = "<b>Server ID</b>";
        nameHeader.innerHTML = "<b>Server Name</b>";
        statusHeader.innerHTML = "<b>Server Status</b>";
        for(var i = 0; i < data.servers.length; i++){
            var tableRow = tableBody.insertRow(i);
            var noCell = tableRow.insertCell(0);
            //var idCell = tableRow.insertCell(1);
            var nameCell = tableRow.insertCell(1);
            var statusCell = tableRow.insertCell(2);
            noCell.innerHTML = i+1;
            //idCell.innerHTML = data.servers[i].id;
            nameCell.innerHTML = data.servers[i].name;
            statusCell.innerHTML = processStatus(data.servers[i].status);
        }
        spinner.remove();
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

function processStatus(string){
    const okEmote = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="24" height="24"
    viewBox="0 0 48 48"
    style=" fill:#000000;"><linearGradient id="I9GV0SozQFknxHSR6DCx5a_70yRC8npwT3d_gr1" x1="9.858" x2="38.142" y1="9.858" y2="38.142" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#21ad64"></stop><stop offset="1" stop-color="#088242"></stop></linearGradient><path fill="url(#I9GV0SozQFknxHSR6DCx5a_70yRC8npwT3d_gr1)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path d="M32.172,16.172L22,26.344l-5.172-5.172c-0.781-0.781-2.047-0.781-2.828,0l-1.414,1.414	c-0.781,0.781-0.781,2.047,0,2.828l8,8c0.781,0.781,2.047,0.781,2.828,0l13-13c0.781-0.781,0.781-2.047,0-2.828L35,16.172	C34.219,15.391,32.953,15.391,32.172,16.172z" opacity=".05"></path><path d="M20.939,33.061l-8-8c-0.586-0.586-0.586-1.536,0-2.121l1.414-1.414c0.586-0.586,1.536-0.586,2.121,0	L22,27.051l10.525-10.525c0.586-0.586,1.536-0.586,2.121,0l1.414,1.414c0.586,0.586,0.586,1.536,0,2.121l-13,13	C22.475,33.646,21.525,33.646,20.939,33.061z" opacity=".07"></path><path fill="#fff" d="M21.293,32.707l-8-8c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414c0.391-0.391,1.024-0.391,1.414,0	L22,27.758l10.879-10.879c0.391-0.391,1.024-0.391,1.414,0l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414l-13,13	C22.317,33.098,21.683,33.098,21.293,32.707z"></path></svg>`;
    const crossEmote = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="24" height="24"
    viewBox="0 0 48 48"
    style=" fill:#000000;"><linearGradient id="wRKXFJsqHCxLE9yyOYHkza_fYgQxDaH069W_gr1" x1="9.858" x2="38.142" y1="9.858" y2="38.142" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f44f5a"></stop><stop offset=".443" stop-color="#ee3d4a"></stop><stop offset="1" stop-color="#e52030"></stop></linearGradient><path fill="url(#wRKXFJsqHCxLE9yyOYHkza_fYgQxDaH069W_gr1)" d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path><path d="M33.192,28.95L28.243,24l4.95-4.95c0.781-0.781,0.781-2.047,0-2.828l-1.414-1.414	c-0.781-0.781-2.047-0.781-2.828,0L24,19.757l-4.95-4.95c-0.781-0.781-2.047-0.781-2.828,0l-1.414,1.414	c-0.781,0.781-0.781,2.047,0,2.828l4.95,4.95l-4.95,4.95c-0.781,0.781-0.781,2.047,0,2.828l1.414,1.414	c0.781,0.781,2.047,0.781,2.828,0l4.95-4.95l4.95,4.95c0.781,0.781,2.047,0.781,2.828,0l1.414-1.414	C33.973,30.997,33.973,29.731,33.192,28.95z" opacity=".05"></path><path d="M32.839,29.303L27.536,24l5.303-5.303c0.586-0.586,0.586-1.536,0-2.121l-1.414-1.414	c-0.586-0.586-1.536-0.586-2.121,0L24,20.464l-5.303-5.303c-0.586-0.586-1.536-0.586-2.121,0l-1.414,1.414	c-0.586,0.586-0.586,1.536,0,2.121L20.464,24l-5.303,5.303c-0.586,0.586-0.586,1.536,0,2.121l1.414,1.414	c0.586,0.586,1.536,0.586,2.121,0L24,27.536l5.303,5.303c0.586,0.586,1.536,0.586,2.121,0l1.414-1.414	C33.425,30.839,33.425,29.889,32.839,29.303z" opacity=".07"></path><path fill="#fff" d="M31.071,15.515l1.414,1.414c0.391,0.391,0.391,1.024,0,1.414L18.343,32.485	c-0.391,0.391-1.024,0.391-1.414,0l-1.414-1.414c-0.391-0.391-0.391-1.024,0-1.414l14.142-14.142	C30.047,15.124,30.681,15.124,31.071,15.515z"></path><path fill="#fff" d="M32.485,31.071l-1.414,1.414c-0.391,0.391-1.024,0.391-1.414,0L15.515,18.343	c-0.391-0.391-0.391-1.024,0-1.414l1.414-1.414c0.391-0.391,1.024-0.391,1.414,0l14.142,14.142	C32.876,30.047,32.876,30.681,32.485,31.071z"></path></svg>`;
    const unavailableEmote = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
    width="24" height="24"
    viewBox="0 0 48 48"
    style=" fill:#000000;"><linearGradient id="GCWVriy4rQhfclYQVzRmda_hRIvjOSQ8I0i_gr1" x1="9.812" x2="38.361" y1="9.812" y2="38.361" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f44f5a"></stop><stop offset=".443" stop-color="#ee3d4a"></stop><stop offset="1" stop-color="#e52030"></stop></linearGradient><path fill="url(#GCWVriy4rQhfclYQVzRmda_hRIvjOSQ8I0i_gr1)" d="M24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,12.955,35.045,4,24,4z M24,38	c-7.732,0-14-6.268-14-14s6.268-14,14-14s14,6.268,14,14S31.732,38,24,38z"></path><linearGradient id="GCWVriy4rQhfclYQVzRmdb_hRIvjOSQ8I0i_gr2" x1="6.821" x2="41.08" y1="6.321" y2="40.58" gradientTransform="translate(-.146 .354)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#f44f5a"></stop><stop offset=".443" stop-color="#ee3d4a"></stop><stop offset="1" stop-color="#e52030"></stop></linearGradient><polygon fill="url(#GCWVriy4rQhfclYQVzRmdb_hRIvjOSQ8I0i_gr2)" points="13.371,38.871 9.129,34.629 34.629,9.129 38.871,13.371"></polygon></svg>`;
    if(string === "running"){
        return okEmote+" Online";
    }else if(string === "offline"){
        return crossEmote+" Offline";
    }else{
        return unavailableEmote+" Suspended";
    }
}
