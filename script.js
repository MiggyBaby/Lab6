const form = document.getElementById("myForm")
        
        form.addEventListener("submit", function(event) {
            event.preventDefault(); 

            const firstName = document.getElementById("firstName").value;
            const middleInitial = document.getElementById("middleInitial").value;
            const lastName = document.getElementById("lastName").value;
            const email = document.getElementById("email").value;

            if (!firstName || !middleInitial || !lastName || !isValidEmail(email)) {
                alert("Invalid inputs. Please check your entries.");
            } else {
                alert("Success!");
                form.reset(); 
            }
        });
        
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
