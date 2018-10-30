$('#submit').on("click", function (event){

    event.preventDefault();

    console.log('Hello World')

    const userData = {

        name : $('#employeeName').val(),
        photo : $('#photoEmployeeImage').val(),
        scores : [

            $('#question1').val(),
            $('#question2').val(),
            $('#question3').val(),
            $('#question4').val(),
            $('#question5').val(),
            $('#question6').val(),
            $('#question7').val(),
            $('#question8').val(),
            $('#question9').val(),
            $('#question10').val()

        ]





    };
console.log(userData)

$.post("/api/employees", userData, function(data) {

console.log(data);

$('#match-name').text(data.name);
$('#match-picture').attr( "src", data.photo);

});








});