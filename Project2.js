// <div class="photo">
// <div><a href="sun_large.jpg"><img src="sunSmall.jpg" alt=""></a><div class="Bottomleft"><h3>Sun</h3></div></div>
// <div><a href="UranusLarge.jpg"> <img src="uranusSmall.jpg" alt="Uranus"></a><div class="Bottomleft"><h3>Uranus</h3></div></div>
// <div><a href="fullMoonLarg.jpg"><img src="fullMoonSmall.jpg" alt=""></a><div class="Bottomleft"><h3>Full Moon</h3></div></div>
// <a href="galaxsiLarge.jpg"><img src="galaxsiSmall.jpg" alt=""></a><div class="Bottomleft"><h3>Galaxy</h3></div></div> -->
// <<a href="mercuryLarge.jpg"> <img src="mercurySmall.jpg" alt=""></a><div class="Bottomleft"><h3>Mercury</h3></div></div>
// <div><a href="Meteor showeLarg.jpg"><img src="Meteor showeSmall.jpg" alt=""></a><div class="Bottomleft"><h3>Meteor Shower</h3></div></div>
// <div><a href="nebulaLarg.jpg"><img src="nebulaSmall.jpg" alt=""></a><div class="Bottomleft"><h3>Nebula</h3></div></div>
// <div><a href="PleiadesLarge.jpg"><img src="PleiadesSmall.jpg" alt=""></a><div class="Bottomleft"><h3>Pleiades</h3></div></div>
// <div><a href="solar eclipseLarg.jpg"><img src="solar eclipseSmall.jpg" alt=""></a><div class="Bottomleft"><h3>solar eclipse</h3></div></div>
// <div><a href="n3large.jpg"><img src="n3.jpg" alt=""></a><div class="Bottomleft"><h3>Eye Cat Nebula</h3></div></div>
// <div><a href="butterflyLarg.jpg"><img src="butterflySmall.jpg" alt=""></a><div class="Bottomleft"><h3>butter fly Nebula</h3></div></div>
// <div><a href="saturnLarg.jpg"><img src="saturnSmall.jpg" alt=""></a><div class="Bottomleft"><h3>Saturn</h3></div></div>
// <div><a href="auroraLarg.jpg"><img src="auroraSmall.jpg" alt=""></a><div class="Bottomleft"><h3>Aurora</h3></div></div>
// <div><a href="astronauteLarg.jpg"><img src="astronauteSmalljpg.jpg" alt=""></a><div class="Bottomleft"><h3>Astronaut</h3></div></div> -->

$(document).ready(function () {
  const galleryArray = [
    "sunSmall",
    "uranusSmall",
    "fullMoonSmall",
    "galaxsiSmall",
    "mercurySmall",
    "Meteor showeSmall",
    "nebulaSmall",
    "PleiadesSmall",
    "solar eclipseSmall",
    "n3",
    "butterflySmall",
    "saturnSmall",
    "auroraSmall",
    "astronauteSmalljpg",
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
    "Astronaut To give love always    ",
  ];
  const galleryArrayLink = [
    "sun_large",
    "UranusLarge",
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
    "auroraLarg",
    "astronauteLarg",
  ];
  const gallery = $(".gallery");
  for (let i = 0; i < galleryArray.length; i++) {
    gallery.append(
      `<div class="gallery-item"><a href="./` +
        galleryArrayLink[i] +
        `.jpg" target='blank'>
    <img src="./` +
        galleryArray[i] +
        `.jpg" alt="" > </a>
    <div class="image-description">` +
        descriptionArray[i] +
        `</div>

    </div>`
    );
  }
  $('.gallery-item').click(function(){

  $('.gallery-item ').animate(
    {
      width: "50vw",
      height: "50vh",
      borderRadius: "20px",
    },
    500,
    function () {
      $([descriptionArray[i]]).fadeIn();
    }
  ); })
});
