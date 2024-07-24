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
		/////////////////////////////////Display in BUY page///////////////////////////////////////
		case 'buyDisplay':
			$_SERVER['REQUEST_METHOD'] == 'GET';
			$sql = "SELECT *, agents.FirstName, agents.LastName FROM propertylisting 
						INNER JOIN agents on propertylisting.AgentID = agents.AgentID 
						WHERE propertylisting.Status = 'Available'";
			$result = mysqli_query($conn, $sql);
			if($result){
				while($row = mysqli_fetch_assoc($result)){
					$response[$i]['PropertyID'] = $row['PropertyID'];
					$response[$i]['Address'] = $row['Address'];
					$response[$i]['City'] = $row['City'];
					$response[$i]['State'] = $row['State'];
					$response[$i]['PostCode'] = $row['PostCode'];
					$response[$i]['ListingPrice'] = $row['ListingPrice'];
					$response[$i]['ListingDate'] = $row['ListingDate'];
					$response[$i]['SquareFootage'] = $row['SquareFootage'];
					$response[$i]['Bedrooms'] = $row['Bedrooms'];
					$response[$i]['Bathrooms'] = $row['Bathrooms'];
					$response[$i]['Garages'] = $row['Garages'];
					$response[$i]['Status'] = $row['Status'];
					$response[$i]['Image'] = $row['Image'];
					$response[$i]['FirstName'] = $row['FirstName'];
					$response[$i]['LastName'] = $row['LastName'];
					$i++;
				}
				echo json_encode($response);
			}
			break;

		//////////////////////////////Display in SOLD page//////////////////////////////////////
		case 'soldDisplay':
			$_SERVER['REQUEST_METHOD'] == 'GET';
			$sql = "SELECT *, agents.FirstName, agents.LastName FROM propertylisting 
						INNER JOIN agents on propertylisting.AgentID = agents.AgentID 
						WHERE propertylisting.Status = 'Under Contract'";
			$result = mysqli_query($conn, $sql);
			if($result){
				while($row = mysqli_fetch_assoc($result)){
					$response[$i]['PropertyID'] = $row['PropertyID'];
					$response[$i]['Address'] = $row['Address'];
					$response[$i]['City'] = $row['City'];
					$response[$i]['State'] = $row['State'];
					$response[$i]['PostCode'] = $row['PostCode'];
					$response[$i]['ListingPrice'] = $row['ListingPrice'];
					$response[$i]['ListingDate'] = $row['ListingDate'];
					$response[$i]['SquareFootage'] = $row['SquareFootage'];
					$response[$i]['Bedrooms'] = $row['Bedrooms'];
					$response[$i]['Bathrooms'] = $row['Bathrooms'];
					$response[$i]['Garages'] = $row['Garages'];
					$response[$i]['Status'] = $row['Status'];
					$response[$i]['Image'] = $row['Image'];
					$response[$i]['FirstName'] = $row['FirstName'];
					$response[$i]['LastName'] = $row['LastName'];
					$i++;
				}
				echo json_encode($response);
			}
		break;
	}
} else {
	echo "Unable to Connect to Database";
}




////////////////////////////////////////////////////////////////////////////////////////

// close mysql connection
mysqli_close($conn);
