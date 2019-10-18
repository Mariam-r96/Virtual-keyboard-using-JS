window.addEventListener("keydown",playSound);
                   
                   let displayNote = document.querySelector(".note");

                   function playSound(e){
                     
                    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
                    
                    //HOVERING WHITE KEYS
                    if(document.querySelector(`.key[data-key="${e.keyCode}"]`)){
                        key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
                        key.classList.add("hover_white");

                        let keyNote = key.getAttribute("data-note");
                        displayNote.innerHTML = `<b> Note : ' ${keyNote} '</b>` ;
                       
                    }
                   //HOVERING BLACK KEYS
                    else if(document.querySelector(`.keySharp[data-key="${e.keyCode}"]`)){
                        keySharp = document.querySelector(`.keySharp[data-key="${e.keyCode}"]`);
                        keySharp.classList.add("hover_black");
                        let sharpNote = keySharp.getAttribute("data-note");
                        displayNote.innerHTML =  `<b> Note : ' ${sharpNote} '</b>` ;
                    }

                     console.log(e.keyCode)

                     //PLAYING THE MUSIC
                     audio.currentTime = 0;
                     audio.play();

                   }  

                   //REMOVING HOVER EFFECT
                   window.addEventListener("keyup",function(e){

                    // REMOVING HOVER FOR WHITE KEYS
                    if(document.querySelector(`.key[data-key="${e.keyCode}"]`)){
                    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
                    key.classList.remove("hover_white");
                    }
                    // REMOVING HOVER FOR BLACK KEYS
                    else if(document.querySelector(`.keySharp[data-key="${e.keyCode}"]`)){
                    keySharp = document.querySelector(`.keySharp[data-key="${e.keyCode}"]`);
                    keySharp.classList.remove("hover_black");
                   }
                   })