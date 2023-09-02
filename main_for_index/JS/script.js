

        // const changeButton = document.getElementById('changeButton');
        // const root = document.documentElement;

        // changeButton.addEventListener('click', () => {
        //     // Set the value of the --box-color variable
        //     root.style.setProperty('--theme', 'rgb(255, 192, 203)'); // Change to the color you want
        // });








        function theme_default() {

            // Select the :root element.
            const root = document.querySelector(':root');

            // Create a variable to store the new value for the `--color` variable.
            const theme = 'rgb(66, 135, 245)';
            const body = 'rgb(255, 255, 255)';
            const typography = 'rgb(0, 0, 0)';

            // Set the value of the `--color` variable to the new value.
            root.style.setProperty('--theme', theme);
            root.style.setProperty('--page-background', body);
            root.style.setProperty('--regular-color', typography);


        }



        function theme_blue() {
            theme_default()

            // Select the :root element.
            const root = document.querySelector(':root');

            // Create a variable to store the new value for the `--color` variable.
            const newColor = 'rgb(99, 205, 55)';

            // Set the value of the `--color` variable to the new value.
            root.style.setProperty('--theme', newColor);

        }






        function theme_red() {
            theme_default()

            // Select the :root element.
            const root = document.querySelector(':root');

            // Create a variable to store the new value for the `--color` variable.
            const newColor = 'rgb(245, 66, 113)';

            // Set the value of the `--color` variable to the new value.
            root.style.setProperty('--theme', newColor);

        }


        function theme_orange() {
            theme_default();

            // Select the :root element.
            const root = document.querySelector(':root');

            // Create a variable to store the new value for the `--color` variable.
            const newColor = 'rgb(245, 161, 66)';

            // Set the value of the `--color` variable to the new value.
            root.style.setProperty('--theme', newColor);

        }





        function theme_dark() {


            // Select the :root element.
            const root = document.querySelector(':root');

            // Create a variable to store the new value for the `--color` variable.
            const theme = 'rgb(4, 46, 114)';
            const body = 'rgb(0, 0, 0)';
            const typography = 'rgb(255, 255, 255)';

            // Set the value of the `--color` variable to the new value.
            root.style.setProperty('--theme', theme);
            root.style.setProperty('--page-background', body);
            root.style.setProperty('--regular-color', typography);

        }






        function myFunction() {
            var x = document.getElementById("nav-list");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }
        }
















