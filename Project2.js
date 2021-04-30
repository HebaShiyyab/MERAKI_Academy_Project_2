

$( document ).ready(function() {
    const descriptionArray = ['Sun','Uranus','Full Moon','Galaxy','Mercury','Meteor Shower','Nebula','Pleiades','Solar Eclipse','Eye Cat Nebula','Butter fly Nebula','Saturn','Aurora','Astronaut']
    const galleryArray = ['sun_large','UranusLarge','fullMoonLarg','galaxsiLarge', 'mercuryLarge','Meteor showeLarg','nebulaLarg','PleiadesLarge','solar eclipseLarg','n3large','butterflyLarg','saturnLarg','auroraLarg','astronauteLarg']
    const gallery = $('.gallery')
    for(let i = 0 ; i< galleryArray.length ;i++ ){
    // console.log(galleryArray[i])
    gallery.append(`<div class="gallery-item">
    <img src="./`+galleryArray[i]+`.jpg" alt="">
    <div class="image-description">`+descriptionArray[i] +`</div>

    </div>`)}
    
});

$(document).ready(function(){



    
    
    
    
    
    
})



