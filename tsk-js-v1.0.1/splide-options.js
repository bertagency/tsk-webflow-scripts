
function sliderhomebg() {

    let splides = $('.sliderhomebg');
    for ( let i = 0, splideLength = splides.length; i < splideLength; i++ ) {
        new Splide( splides[ i ], {
      // Desktop on down
        //perPage: 1,
        perMove: 1,
      focus: 0, // 0 = left and 'center' = center
      type: 'fade', // 'loop' or 'slide' or 'fade'
      autoplay: 'playing', // 'playing' or 'pause'
      gap: '0em', // space between slides
      arrows: false, // 'slider' or false
      pagination: false, // 'slider' or false
      speed : 550, // transition speed in miliseconds
      dragAngleThreshold: 60, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind : true, // go back to beginning when reach end
      rewindSpeed : 1800,
      waitForTransition : false,
      updateOnMove : true,
      trimSpace: false, // true removes empty space from end of list
      pauseOnHover: false,
      draggable: false,
      
      breakpoints: {
            991: {
            // Tablet
                perPage: 1,
          gap: '0vw',
            },
        767: {
            // Mobile Landscape
                perPage: 1,
          gap: '0vw',
            },
        479: {
            // Mobile Portrait
                perPage: 1,
          gap: '0vw',
            }
        }
      
    
      
    } ).mount();
    }
    
    }
    sliderhomebg();
    
    
    function slider3col() {
    
    let splides = $('.slider3col');
    for ( let i = 0, splideLength = splides.length; i < splideLength; i++ ) {
        new Splide( splides[ i ], {
      // Desktop on down
        perPage: 3,
        perMove: 1,
      focus: 'center', // 0 = left and 'center' = center
      type: 'loop', // 'loop' or 'slide'
      gap: '2rem', // space between slides
      arrows: 'slider', // 'slider' or false
      pagination: false, // 'slider' or false
      speed : 500, // transition speed in miliseconds
      dragAngleThreshold: 60, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind : false, // go back to beginning when reach end
      rewindSpeed : 500,
      waitForTransition : false,
      updateOnMove : true,
      trimSpace: false,
      breakpoints: {
            991: {
            // Tablet
                perPage: 3,
          gap: '2rem',
            },
        767: {
            // Mobile Landscape
                perPage: 2,
          gap: '2rem',
            },
        479: {
            // Mobile Portrait
                perPage: 1,
          gap: '2rem',
            }
        }
    } ).mount();
    }
    
    }
    slider3col();
    
    
    function slidertopnav() {
    
    let splides = $('.slidertopnav');
    for ( let i = 0, splideLength = splides.length; i < splideLength; i++ ) {
        new Splide( splides[ i ], {
      // Desktop on down
        perPage: 6,
        perMove: 1,
      focus: 'left', // 0 = left and 'center' = center
      type: 'loop', // 'loop' or 'slide'
      autoplay: 'playing', // 'playing' or 'pause'
      gap: '1vw', // space between slides
      arrows: false, // 'slider' or false
      pagination: false, // 'slider' or false
      speed : 1550, // transition speed in miliseconds
      dragAngleThreshold: 80, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind : false, // go back to beginning when reach end
      rewindSpeed : 1800,
      waitForTransition : false,
      updateOnMove : true,
      trimSpace: false,
      pauseOnHover: false,
      draggable: false,
      breakpoints: {
            991: {
            // Tablet
                perPage: 3,
          gap: '1rem',
            },
        767: {
            // Mobile Landscape
                perPage: 3,
          gap: '1rem',
            },
        479: {
            // Mobile Portrait
                perPage: 2,
          gap: '1rem',
            }
        }
    } ).mount();
    }
    
    }
    slidertopnav();
    

    function slider1col() {

        let splides = $('.slider1col');
        for ( let i = 0, splideLength = splides.length; i < splideLength; i++ ) {
            new Splide( splides[ i ], {
          // Desktop on down
            perPage: 1,
            perMove: 1,
          focus: 0, // 0 = left and 'center' = center
          type: 'fade', // 'loop' or 'slide'
          gap: '2em', // space between slides
          arrows: 'slider', // 'slider' or false
          pagination: 'slider', // 'slider' or false
          speed : 1200, // transition speed in miliseconds
          dragAngleThreshold: 30, // default is 30
          autoWidth: false, // for cards with differing widths
          rewind : true, // go back to beginning when reach end
          rewindSpeed : 400,
          waitForTransition : false,
          updateOnMove : true,
          trimSpace: false, // true removes empty space from end of list
          breakpoints: {
                991: {
                // Tablet
                },
            767: {
                // Mobile Landscape
                },
            479: {
                // Mobile Portrait
                }
            }
        } ).mount();
        }
        
        }
        slider1col();


function slider4col() {

    let splides = $('.slider4col');
    for ( let i = 0, splideLength = splides.length; i < splideLength; i++ ) {
        new Splide( splides[ i ], {
      // Desktop on down
        perPage: 4,
        perMove: 1,
      focus: 0, // 0 = left and 'center' = center
      type: 'loop', // 'loop' or 'slide'
      gap: '2em', // space between slides
      arrows: 'slider', // 'slider' or false
      pagination: false, // 'slider' or false
      speed : 500, // transition speed in miliseconds
      dragAngleThreshold: 60, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind : false, // go back to beginning when reach end
      rewindSpeed : 500,
      waitForTransition : false,
      updateOnMove : true,
      trimSpace: false, // true removes empty space from end of list
      breakpoints: {
            991: {
            // Tablet
                perPage: 2,
          gap: '3vw',
            },
        767: {
            // Mobile Landscape
                perPage: 2,
          gap: '3vw',
            },
        479: {
            // Mobile Portrait
                perPage: 2,
          gap: '3vw',
            }
        }
    } ).mount();
    }
    
    }
    slider4col();