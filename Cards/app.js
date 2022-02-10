var option = document.querySelector("#vari");
var btn = document.querySelector("#icons-btn-heart")

option.addEventListener("click", variant)
btn.addEventListener("click", heart)

function variant()
{
    var value = option.value
    document.getElementsByTagName('section')[0].style.display = 'none';
    document.getElementsByTagName('section')[1].style.display = 'none';
    document.getElementsByTagName('section')[2].style.display = 'none';
    document.getElementsByTagName('section')[3].style.display = 'none';
    document.getElementsByTagName('section')[4].style.display = 'none';
    document.getElementsByTagName('section')[5].style.display = 'none';
    if(value=="basic")
    {
        document.getElementsByTagName('section')[0].style.display = 'block';
    }
    else if(value=="basictext")
    {
        document.getElementsByTagName('section')[1].style.display = 'block';
    }
    else if(value=="basicheader")
    {
        document.getElementsByTagName('section')[2].style.display = 'block';
    }
    else if(value=="basicbuttons")
    {
        document.getElementsByTagName('section')[3].style.display = 'block';
    }
    else if(value=="basicicons")
    {
        document.getElementsByTagName('section')[4].style.display = 'block';
    }
    else if(value=="horizontal")
    {
        document.getElementsByTagName('section')[5].style.display = 'block';
    }
}

// function heart()
// {
//     document.getElementById("icons-btn-heart").className="fas fa-heart";
// }
