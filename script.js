$(document).ready(function () {
    var apikey = "99a4cd78";
    $("#movieForm").submit(function (event) {
        event.preventDefault();

        var movie = $("#movie").val();

        var result = "";
        var nomination = "";

        var url = "http://www.omdbapi.com/?apikey=" + apikey;
        $.ajax({
            type: "GET",
            url: url + "&t=" + movie,
            success: function (data) {
                console.log(data);
                result = `
                    <h1>Results for ${data.Title}...</h1>
                    <img src=${data.Poster}/>
                    <h3>Title: ${data.Title}</h3>
                    <h3>Release Date: ${data.Released}</h3>
                    <button id="btn" style= opacity=100>Nominate</button>
                `;
                $("#result").html(result);
                document
                    .getElementById("result")
                    .addEventListener("click", function () {
                        document.getElementById("btn").innerHTML = "Nominated";
                        document.querySelector("#btn").classList.add("nominated");
                    });
            },
        });
    });
});
