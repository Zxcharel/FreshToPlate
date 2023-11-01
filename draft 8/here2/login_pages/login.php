<?php
    require_once 'common.php';

    // WRITE YOUR CODES HERE

    $username='';
    if (isset ($_SESSION["login_page"])){
        $username = $_SESSION["login_page"];
        unset ($_SESSION["login_page"]);
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
        <form action="process_login.php" method="post">
            <div id = "login" class = "mainContainer">
                <div class = "inputHeader flexCenter">
                    <p>Login</p>
                </div>
                <div id = "loginInput" class = "inputBox">    
                    <input name="username" value = '<?php echo $username ?>' placeholder="Email">
                    <input type="password" name="password" placeholder="Password">
                    <!-- <p class = "link"> Forgot Password?</p> -->
                    <a href="change_password.php">Forget Password?</a>
                </div>
                <div id = "loginSubmit" class = "submitBox">
                    <!-- <div class = "submitButton flexCenter accountButton" onclick = "checkLogin()">
                        <p>Login</p>
                    </div> -->
                    <input type="submit" value="Login">
                    <!-- <p>Don't have an account? <span class = "link" onclick = "toggleLogin()">Signup</span></p> -->
                    <p>Don't have an account? <a href="register.php">Signup</a></p>
                    <?php printErrors(); ?>
                </div>    
                
            </div>
        </form>

        <!-- Bootstrap Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>
    </body>
</html>