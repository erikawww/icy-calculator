self.addEventListener("install", function(e){
    e.waitUntil(
        caches.open('mi-pwa')
            .then(function(cache){
                cache.addAll(['/', 'index.html', 'https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&display=swap', 'color.css'])
            })
    )
  })
  
  // estrategia de cache
  self.addEventListener("fetch", function(e){
    e.respondWith(caches.match(e.request)
        .then(function(res){
            if(res){
                return res
            } else {
                return fetch(e.request)
            }
        })
    )
  })