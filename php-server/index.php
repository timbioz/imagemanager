<?php

$config = include '../config/config.php';

// Remove error with CORS policy
header('Access-Control-Allow-Origin: *');

// Check trailing slash in upload directory
$upload_dir = $config['upload_dir'];
if(mb_substr($upload_dir, -1) !== '/') {
    $upload_dir .= '/';
};



$total = count($_FILES['uploadImages']['name']);

foreach($_FILES['uploadImages']['name'] as $i => $name) {
    // now $name holds the original file name

    $tmp_name = $_FILES['uploadImages']['tmp_name'][$i];
    $error = $_FILES['uploadImages']['error'][$i];
    $size = $_FILES['uploadImages']['size'][$i];
    $type = $_FILES['uploadImages']['type'][$i];

    $target_file = $upload_dir . $name;

    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));

    // Check if image file is a actual image or fake image
    if(isset($_POST['submit'])) {
        $check = getimagesize($tmp_name);
        if($check !== false) {
            echo 'File is an image - ' . $check['mime'] . '.';
            $uploadOk = 1;
        } else {
            echo 'File is not an image.';
            $uploadOk = 0;
        }
    }

    // Check if file already exists
    if (file_exists($target_file)) {
        echo 'Sorry, file already exists.';
        $uploadOk = 0;
    }

    // Check file size
    if ($size > 5000000) {
        echo 'Sorry, your file is too large.';
        $uploadOk = 0;
    }

    // Allow certain file formats
    if($imageFileType !== 'jpg' && $imageFileType !== 'png' && $imageFileType !== 'jpeg'
        && $imageFileType !== 'gif') {
        echo 'Sorry, only JPG, JPEG, PNG & GIF files are allowed.';
        $uploadOk = 0;
    }

    $send = array(
        'error' => '112233',
        'sended' => '445566'
    );

    // Check if $uploadOk is set to 0 by an error
    if ($uploadOk === 0) {
        echo 'Sorry, your file was not uploaded.';
        // if everything is ok, try to upload file
    } else if (move_uploaded_file($tmp_name, $target_file)) {
        //echo 'The file ' . basename($name). ' has been uploaded SUCCESS Tim.';
        //echo json_encode($send);
    } else {
        echo 'Sorry, there was an error uploading your file.';
    }


    $tr = 0;




}

echo json_encode($send);






