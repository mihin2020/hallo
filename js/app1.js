const ratio = .1

const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
  }

  const handleIntersect = function (entries, observer) {
      entries.forEach(function (entry) {
          if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible');
              observer.unobserve(entry.target)
          }else {
              console.log('invisible')
          }
          console.log(entry.intersectionRatio)
          
      })
  }
   

      AOS.init();



  AOS.init();
      

    

        
        
   
  const observer = new IntersectionObserver(handleIntersect, options);
  document.querySelectorAll('[class*="reveal-"]').forEach(function(r){
      observer.observe(r)
  })
  

  function ouvrirPage () {
    var a = document.getElementById("Recherche").value;
    if(a=="cancer"){
        window.open("../index.html");
    }
    if(a=="ADRESSE"|| a=="adr"){
        window.open("../Hallo docteur/pages/contact.html");
    }
 }
  