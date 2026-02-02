let form = document.getElementById("MyForm");
form.addEventListener("submit",volume_sphere);

function volume_sphere(e) {
    //Write your code here
	e.preventDefault();
	let valR= +document.getElementById("radius").value;
	if(valR==NaN || valR<0){
		document.getElementById("volume").value="NaN";
	}
	else{
		document.getElementById("volume").value=((4/3)*(22/7)*(valR**3)).toFixed(4);
	}
} 

// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
