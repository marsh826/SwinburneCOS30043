<?php
// Reference:
// https://www.leaseweb.com/labs/2015/10/creating-a-simple-rest-api-in-php/

// Use this API for demonstration purposes only

// connect to the mysql database, provide the appropriate credentials
$conn = mysqli_connect('localhost', 'root', '', 'realestate');
mysqli_set_charset($conn, 'utf8');
$response = array();
$i = 0;

if($conn) {
	switch($_GET['action']){
		//////////////////////////////Display in AGENT page//////////////////////////////////////
		case 'agentsDisplay':
			$_SERVER['REQUEST_METHOD'] == 'GET';
			$sql = "SELECT * FROM agents";
			$result = mysqli_query($conn, $sql);
			if($result){
				while($row = mysqli_fetch_assoc($result)){
					$response[$i]['AgentID'] = $row['AgentID'];
					$response[$i]['FirstName'] = $row['FirstName'];
					$response[$i]['LastName'] = $row['LastName'];
					$response[$i]['Phone'] = $row['Phone'];
					$response[$i]['Email'] = $row['Email'];
					$response[$i]['LicenseNumber'] = $row['LicenseNumber'];
					$response[$i]['AgentImage'] = $row['AgentImage'];
					$i++;
				}
				echo json_encode($response);
			}
		break;
	}
} else {
	echo "Unable to Connect to Database";
}

// $response[$i]['AgentID'] = $row['AgentID'];
// $response[$i]['FirstName'] = $row['FirstName'];
// $response[$i]['LastName'] = $row['LastName'];
// $response[$i]['Email'] = $row['Email'];
// $response[$i]['LicenseNumber'] = $row['LicenseNumber'];
// $response[$i]['AgentImage'] = $row['AgentImage'];
// $i++;

// close mysql connection
mysqli_close($conn);
