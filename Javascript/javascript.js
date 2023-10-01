function tampil() {
    // document.querySelector('h1').innerText = "belajar Javascript";
    // document.querySelector('.container').style.backgroundColor = "red";
    // document.querySelector('#para').style.fontSize = "50px";

    // console.log(document.querySelector('img'));

    // min = Math.ceil(0);
    // max = Math.floor(2);
    // let n = Math.floor(Math.random() * (max - min + 1) + min);
    // console.log(n);

    // document.querySelectorAll('img')[n].style.visibility = "visible";

    // alert(document.querySelector('#nama').value);

    document.querySelector('#hasil').value = document.querySelector('#nama').value;

    document.querySelector('#para').innerText = document.querySelector('#nama').value;
}

// btn.onclick = tampil;

// btn.onmouseover = function() {
//     alert('javascript');
// }

// btn.addEventListener('mouseover', tampil);

btn.addEventListener('mouseover', function() {
    alert('event');
})