
        window.onscroll = function() { 
            scrollFunction1(); 
            scrollFunction2(); 
            // scrollFunction3(); 

        }; 
            
        function scrollFunction1() { 
            if (document.body.scrollTop > 700 || 
                document.documentElement.scrollTop > 700) //when small
            { 
                document.querySelector(".main-head").style.opacity = "0.01";
                document.querySelector(".lc1").style.top = "-500px";
                document.querySelector(".side-works").style.top = "-410px";


                    
            } 
            else {                                          //when large
                document.querySelector(".main-head").style.opacity = "1";
                document.querySelector(".lc1").style.top = "0px";
                document.querySelector(".side-works").style.top = "0px";


            } 
        } 

        function scrollFunction2() { 
            if (document.body.scrollTop > 1250 || 
                document.documentElement.scrollTop > 1250) //when small
            { 
                document.querySelector(".main-head2").style.opacity = "0.01",
                document.querySelector(".lc2").style.top = "-500px";
                document.querySelector(".about").style.top = "-770px";

                    
            } 
            else {                                          //when large
                document.querySelector(".main-head2").style.opacity = "1"; 
                document.querySelector(".lc2").style.top = "0px"; 
                document.querySelector(".about").style.top = "0px";
            } 
        } 

        function scrollFunction3() { 
            if (document.body.scrollTop > 2000 || 
                document.documentElement.scrollTop > 2000) //when small
            { 
                document.querySelector(".main-head3").style.fontSize = "5vw",
                document.querySelector(".main-head3").style.lineHeight="100%";
                document.querySelector(".main-head3").style.paddingLeft="70px";
                document.querySelector(".main-head3").style.webkitTextStroke="2px #cccccc";
                    
            } 
            else {                                          //when large
                document.querySelector(".main-head3").style.fontSize = "20vw"; 
                document.querySelector(".main-head3").style.lineHeight="90%";
                document.querySelector(".main-head3").style.paddingLeft="0px";
                document.querySelector(".main-head3").style.webkitTextStroke="6px #cccccc";          
            } 
        } 
