<?php

	header('Content-type: application/json;charset=UTF-8');

	$mysqli = new mysqli("localhost","root","123456","marimedia");
    $myArray = array();

    if ($result = $mysqli->query("SELECT * FROM tasks_tb")) 
    {
        $tempArray = array();
        while($row = $result->fetch_object()) 
        {
                $tempArray = $row;
                array_push($myArray, $tempArray);
        }

 			$data = array (
                            'success' =>  true,
                            'data' => $myArray
                            );
            echo json_encode($data);

    }
    else
    {
    	
			$data = array (
                             'success' =>  false,
                             'data' => ''
                            );
            echo json_encode($data);

    }

    $result->close();
    $mysqli->close();
    

   