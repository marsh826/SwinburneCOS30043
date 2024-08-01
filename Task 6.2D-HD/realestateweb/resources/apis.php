<?php
// Reference:
// https://www.leaseweb.com/labs/2015/10/creating-a-simple-rest-api-in-php/

// Use this API for demonstration purposes only

// connect to the mysql database, provide the appropriate credentials
$conn = mysqli_connect('localhost:3309', 'root', '', 'realestate');
mysqli_set_charset($conn, 'utf8');
$response = array();
$i = 0;

if ($conn) {
	switch ($_GET['action']) {
			/////////////////////////////////Display in BUY page///////////////////////////////////////
		case 'buyDisplay':
			$_SERVER['REQUEST_METHOD'] === "GET";
			$sql = "SELECT *, agents.FirstName, agents.LastName FROM propertylisting 
						INNER JOIN agents on propertylisting.AgentID = agents.AgentID";
			// WHERE propertylisting.Status = 'Available'";
			$result = mysqli_query($conn, $sql);
			if ($result) {
				while ($row = mysqli_fetch_assoc($result)) {
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
			//////////////////////Display all properties in DASHBOARD page///////////////////////////
		case 'dashboardDisplay':
			$_SERVER['REQUEST_METHOD'] === "GET";
			$sql = "SELECT *, agents.FirstName, agents.LastName FROM propertylisting 
						INNER JOIN agents on propertylisting.AgentID = agents.AgentID
						ORDER BY propertylisting.PropertyID";
			$result = mysqli_query($conn, $sql);
			if ($result) {
				while ($row = mysqli_fetch_assoc($result)) {
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
				http_response_code(201);
				echo json_encode($response);
			} else {
				http_response_code(404);
			}
			break;
			//////////////////////Insert New Property into the Database///////////////////////////
		case 'addNewProperty':
			if ($_SERVER['REQUEST_METHOD'] === "POST") {
				$address = $_POST['Address'];
				$city = $_POST['City'];
				$state = $_POST['State'];
				$postcode = $_POST['PostCode'];
				$price = $_POST['ListingPrice'];
				$date = $_POST['ListingDate'];
				$squareM2 = $_POST['SquareFootage'];
				$bedrooms = $_POST['Bedrooms'];
				$bathrooms = $_POST['Bathrooms'];
				$garages = $_POST['Garages'];
				$status = $_POST['Status'];
				$agentID = $_POST['AgentID'];

				///Image Data Processing
				$fileDestination = '';
				if (isset($_FILES['Image'])) {
					$file = $_FILES['Image'];
					$fileName = $file['name'];
					$fileTmpName = $file['tmp_name'];
					$fileSize = $file['size'];
					$fileError = $file['error'];
					$fileType = $file['type'];
					$fileExt = explode('.', $fileName);
					$fileActualExt = strtolower(end($fileExt));
					$allowed = array('jpg', 'jpeg', 'png');

					if (in_array($fileActualExt, $allowed)) {
						if ($fileError === 0) {
							if ($fileSize < 10000000) { // Size should be in bytes, 10MB = 10000000 bytes, images are usually in KBs
								$fileNameNew = uniqid('', true) . "." . $fileActualExt;
								//XAMPP folder destination
								$uploadDir = __DIR__ . '/../css/img/';
								// Make sure the directory exists
								if (!is_dir($uploadDir)) {
									mkdir($uploadDir, 0777, true); // Create directory if it doesn't exist
								}
								$fileDestination = $uploadDir . $fileNameNew;
								move_uploaded_file($fileTmpName, $fileDestination);
							} else {
								echo "File too big!";
								exit();
							}
						} else {
							echo "File Upload Error";
							exit();
						}
					} else {
						echo "Only jpg, jpeg and png are allowed";
						exit();
					}
				} else {
					echo "No file uploaded";
					exit();
				}

				$sql = "INSERT INTO propertylisting(Address, City, State, PostCode, ListingPrice, ListingDate, 
					SquareFootage, Bedrooms, Bathrooms, Garages, Status, Image, AgentID) 
					VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
				$imagePath = './css/img/' . basename($fileNameNew);
				$stmt = $conn->prepare($sql);
				$stmt->bind_param(
					"sssssssssssss",
					$address,
					$city,
					$state,
					$postcode,
					$price,
					$date,
					$squareM2,
					$bedrooms,
					$bathrooms,
					$garages,
					$status,
					$imagePath,
					$agentID
				);

				if ($stmt->execute()) {
					http_response_code(202);
				} else {
					http_response_code(501);
				}
				$stmt->close();
			} else {
				http_response_code(405);
			}
			break;
			//////////////////////Update the Property with new data///////////////////////////
		case 'updateProperty':
			if ($_SERVER['REQUEST_METHOD'] === "POST") {
				$propertyID = $_POST['PropertyID'];
				$address = $_POST['Address'];
				$city = $_POST['City'];
				$state = $_POST['State'];
				$postcode = $_POST['PostCode'];
				$price = $_POST['ListingPrice'];
				$date = $_POST['ListingDate'];
				$squareM2 = $_POST['SquareFootage'];
				$bedrooms = $_POST['Bedrooms'];
				$bathrooms = $_POST['Bathrooms'];
				$garages = $_POST['Garages'];
				$status = $_POST['Status'];
				$agentID = $_POST['AgentID'];

				///Image Data Processing
				$fileDestination = '';
				if (isset($_FILES['Image'])) {
					$file = $_FILES['Image'];
					$fileName = $file['name'];
					$fileTmpName = $file['tmp_name'];
					$fileSize = $file['size'];
					$fileError = $file['error'];
					$fileType = $file['type'];
					$fileExt = explode('.', $fileName);
					$fileActualExt = strtolower(end($fileExt));
					$allowed = array('jpg', 'jpeg', 'png');

					if (in_array($fileActualExt, $allowed)) {
						if ($fileError === 0) {
							if ($fileSize < 10000000) { // Size should be in bytes, 10MB = 10000000 bytes, images are usually in KBs
								$fileNameNew = uniqid('', true) . "." . $fileActualExt;
								//XAMPP folder destination
								$uploadDir = __DIR__ . '/../css/img/';
								// Make sure the directory exists
								if (!is_dir($uploadDir)) {
									mkdir($uploadDir, 0777, true); // Create directory if it doesn't exist
								}
								$fileDestination = $uploadDir . $fileNameNew;
								move_uploaded_file($fileTmpName, $fileDestination);
							} else {
								echo "File too big!";
								exit();
							}
						} else {
							echo "File Upload Error";
							exit();
						}
					} else {
						echo "Only jpg, jpeg and png are allowed";
						exit();
					}
				} else {
					echo "No file uploaded";
					exit();
				}

				$sql = "UPDATE propertylisting SET Address = ?, City = ?, State = ?, PostCode = ?, ListingPrice = ?, ListingDate = ?, 
					SquareFootage = ?, Bedrooms = ?, Bathrooms = ?, Garages = ?, Status = ?, Image = ?, AgentID = ?
					WHERE PropertyID = ?";
				$imagePath = './css/img/' . basename($fileNameNew);
				$stmt = $conn->prepare($sql);
				$stmt->bind_param(
					"sssssssssssssi",
					$address,
					$city,
					$state,
					$postcode,
					$price,
					$date,
					$squareM2,
					$bedrooms,
					$bathrooms,
					$garages,
					$status,
					$imagePath,
					$agentID,
					$propertyID
				);

				if ($stmt->execute()) {
					http_response_code(202);
				} else {
					http_response_code(501);
				}
				$stmt->close();
			} else {
				http_response_code(405);
			}
			break;
			//////////////////////Delete the data of a property///////////////////////////
		case 'deleteProperty':
			if ($_SERVER['REQUEST_METHOD'] === "POST") {
				$propertyID = $_POST['PropertyID'];
				$sql = "DELETE FROM propertylisting	WHERE PropertyID = ?";
				$stmt = $conn->prepare($sql);
				$stmt->bind_param("s", $propertyID);

				if ($stmt->execute()) {
					http_response_code(202);
				} else {
					http_response_code(501);
				}
				$stmt->close();
			} else {
				http_response_code(405);
			}
			break;
	}
} else {
	echo "Unable to Connect to Database";
}




////////////////////////////////////////////////////////////////////////////////////////

// close mysql connection
mysqli_close($conn);
