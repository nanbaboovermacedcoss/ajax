$(document).ready(function() {
    $("#one").click(function() {
        call()
    });
    $("#l").click(function() {
        addmovie();
    });
    $("#u").click(function() {
        deletemovie();
    });
    $("#k").click(function() {
        update();
    });
});

function forr(){
    for(i=0;i<arr.length;i++){
        n += `
       <tr >
           <td>${arr[i].title}</td>
           <td>${arr[i].year}</td>
            <td>${arr[i].imdbRating}</td>
            <td><img src=${arr[i].posterurl}></td>
       </tr>`
       
    }
    $('table').append(n)
}

function call(){
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "https://raw.githubusercontent.com/FEND16/movie-json-data/master/json/top-rated-indian-movies-01.json",
        success: function (data) {
           // alert('Get Success');
            console.log(data);
            var r=document.createElement("table")
            var e=document.createElement("tr")
            var t=document.createElement("th")
            var result =" ";
            data.forEach(movies => {
                result += `
           <tr>
               <td>${movies.title}</td>
               <td>${movies.year}</td>
               <td>${movies.imdbRating}</td>
               <td><img src=${movies.posterurl}></td>
           </tr>`
            });
            $('table').append(result);
        }
        });

}


  function addmovie(){

        $('#n').append('<form action="#">');
         $('#n').append('<input type="text" name="title" placeholder="Enter title" id="title">')
         $('#n').append('<input type="text" name="imdbRating" placeholder="Enter duration" id="imdbRating">')
         $('#n').append('<input type="text"  name="year" placeholder="Enter year" id="year">')
         $('#n').append('<input type="file" name="posterurl" placeholder="Enter image" id="posterurl">')
         $('#n').append('<input type="submit" value="Submit" id="btnsubmit">')+$('#btnsubmit').on('click',function(){
            var cr = {};
            $('input[type="text"]').each(function() { 
     
               cr[$(this).attr('id')] = $(this).val()
               cr[$(this).attr('id')] = $(this).val()
               cr[$(this).attr('id')] = $(this).val()
               console.log(cr)
            });
            $('input[type="file"]').each(function(i) { 
                 var et=$(this).val();
                 console.log(et)
                 var w=et.split('\\').pop()
                 console.log(w)
                cr[$(this).attr('name')] = w;
             });
            arr.push(cr);
            console.log(arr);
            forr();
}); 
 }

 function deletemovie(){

      $('#n').append('<form action="#">');
      $('#n').append('<input type="number" name="id" placeholder="Enter Id" id="nu">')
      $('#n').append('<input type="submit" value="Submit" id="btnsubmit"></form>')+$('#btnsubmit').on('click',function(){
       
        console.log(e);
        for(i=0; i<arr.length;i++){
            arr[i].id = i+1 ;
            var e =  $("#nu").val();
            if(arr[i].id==e){
                arr.splice(i, 1);
            }
          }
          forr();

      console.log(arr);
    });
 }
 function update(){

    $('#n').append('<form action="#">');
    $('#n').append('<input type="type" name="tittle" id="tittle" placeholder="Enter title" class="nu">')
    $('#n').append('<input type="text" name="number" id="number" placeholder="Enter title" class="nu"></form>')
    forr() 
    $(".nu").on("keyup", function () {
         
        var title = $(this).val().toLowerCase();
        var year = $(this).val().toLowerCase();
        if (title !="" && year=="") {
            $(" tr").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(title) > -1);
            });
        }else if(title=="" && year!=""){
            $(" tr").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(year) > -1);
            });
        }else{
            if(title!="" && year!=""){
            $(" tr").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(title) > -1);
            $(" tr").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(year) > -1);
            });
        });
    }
        }
});
}
      
       
    

   
 