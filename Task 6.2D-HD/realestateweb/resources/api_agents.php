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
			//////////////////////////////Display in AGENT page//////////////////////////////////////
		case 'agentsDisplay':
			$_SERVER['REQUEST_METHOD'] === "GET";
			$sql = "SELECT * FROM agents";
			$result = mysqli_query($conn, $sql);
			if ($result) {
				while ($row = mysqli_fetch_assoc($result)) {
					$response[$i]['AgentID'] = $row['AgentID'];
					$response[$i]['FirstName'] = $row['FirstName'];
					$response[$i]['LastName'] = $row['LastName'];
					$response[$i]['Phone'] = $row['Phone'];
					$response[$i]['Email'] = $row['Email'];
					$response[$i]['LicenseNumber'] = $row['LicenseNumber'];
					$response[$i]['Votes'] = $row['Votes'];
					$response[$i]['AgentImage'] = $row['AgentImage'];
					$i++;
				}
				echo json_encode($response);
			}
			break;
			/////////////////////////////////////Update votes for selected agent///////////////////////////
		case 'updateVotes':
			if ($_SERVER['REQUEST_METHOD'] === "POST") {
				$agentID = $_POST['AgentID'];
				$sql = "UPDATE agents SET Votes = Votes + 1 WHERE AgentID = ?";
				$stmt = $conn->prepare($sql);
				$stmt->bind_param("s", $agentID);

				// Debugging output
				echo "AgentID: " . $agentID . "\n";

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
		case 'like':
			// votes: serialize/ unserialize
			// get data from db, unserialize votes => votes[]

			// add logged in user id into votes[] if not exist
			// serialize votes -> save into db

			if ($_SERVER['REQUEST_METHOD'] === "POST") {
				$agentID = $_POST['AgentID'];
				$sql = "UPDATE agents SET Votes = Votes + 1 WHERE AgentID = ?";
				$stmt = $conn->prepare($sql);
				$stmt->bind_param("s", $agentID);

				// Debugging output
				echo "AgentID: " . $agentID . "\n";

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

		case 'unlike':

			break;
	}
} else {
	echo "Unable to Connect to Database";
}

// close mysql connection
mysqli_close($conn);
