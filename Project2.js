$(document).ready(function () {
  const galleryArray = [
    "sun_large",
    "uranusLarge",
    "fullMoonLarg",
    "galaxsiLarge",
    "mercuryLarge",
    "Meteor showeLarg",
    "nebulaLarg",
    "PleiadesLarge",
    "solar eclipseLarg",
    "n3large",
    "butterflyLarg",
    "saturnLarg",
    "auroraLarg"
 
  ];
  const descriptionArray = [
    "The sun is the great star in the solar system",
    "Uranus is a planet from the solar system",
    "The full moon is one of the phases of the moon that comes in the middle of the lunar month",
    "Milky Way",
    "Mercury  is a planet from the solar system",
    "Meteor Shower are parts of meteors or small asteroids",
    "Nebula is Cosmic dust and the remains of a dead star",
    "Pleiades an open stellar cluster",
    "Operation Solar Eclipse",
    "Eye Cat Nebula",
    "Butter fly Nebula",
    "Saturn is a planet from the solar system",
    "Aurora Great interference of ions through the magnetic field",
   
  ];

  const gallery = $(".gallery");
  for (let i = 0; i < galleryArray.length; i++) {
    gallery.append(
      `<div class="gallery-item">
    <img src="./` +
        galleryArray[i] +
        `.jpg" alt="" > 
    <div class="image-description">` +
        descriptionArray[i] +
        `</div><div><button style='background-image: url("https://toppng.com/uploads/preview/facebook-love-icon-11549682031zkpiupatd5.png")' id="button"></button> </div>

    </div>`
    );
    $('#button').click(function(){
        console.log("heba")
      $('#button').css("background-image","red")
    })
  }



  $(".gallery-item").click(function () {
    $(this).toggleClass("full-screen");
  });
  //   const dynamic = $("#dynamic");
  //   const sub = $("#sub");
  $("#dynamic").click(function () {});
  $("#sub").click(function () {
    // const dynamic = $("#dynamic");
    const file1 = $("#dynamic").val();
    //if the you choose file alert the word
    if (file1) {
      alert("Image added successfully");
    } else {
      alert("Add Image");
    }
  });
  $("#del").click(function () {
    $("#dynamic").val("");
  });
});
