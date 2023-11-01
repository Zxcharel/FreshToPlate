<?php
require_once 'common.php';

// WRITE YOUR CODES HERE
$tmp_username = '';
if (isset($_SESSION["register_fail"])){
    $tmp_username = $_SESSION["register_fail"];
    unset ($_SESSION["register_fail"]);
}
?>

<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">

        <link rel="stylesheet" href="../style.css">

    </head>
    <body class="flexCenter" >
        
        <form action="process_register.php" method="post">
            <div id = "signup" class = "mainContainer"> <!-- this the part that has problem -->
                
                <div class = "inputHeader flexCenter">
                    <p>Signup</p>
                </div>
                <div id = "signupInput" class = "inputBox">    
                    <input name="username" value= '<?= $tmp_username?>' placeholder="Email">
                    <input type="password" name="password" value="" placeholder="Password">
                    <input type="password" name="confirmPassword" value="" placeholder="Confirm Password">
                    <!-- <p class = "link"> Forgot Password?</p> -->
                    <!-- <a href="change_password.php">Forget Password?</a> -->
                </div>
                <div id = "signupSubmit" class = "submitBox">
                    <!-- <div class = "submitButton flexCenter accountButton" onclick = "checkLogin()">
                        <p>Login</p>
                    </div> -->
                    <input type="submit" name="submit" value="Signup">
                    <!-- <p>Don't have an account? <span class = "link" onclick = "toggleLogin()">Signup</span></p> -->
                    <p>Already have an account? <a href="login.php">Login</a></p>
                    <?php printErrors(); ?>
                </div>    
                
            </div>
        </form>

        <!-- Bootstrap Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
    </body>
</html>


