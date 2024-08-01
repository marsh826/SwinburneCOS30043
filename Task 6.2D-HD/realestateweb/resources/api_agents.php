<?php
// Reference:
// https://www.leaseweb.com/labs/2015/10/creating-a-simple-rest-api-in-php/

// Use this API for demonstration purposes only

// connect to the mysql database, provide the appropriate credentials
$conn = mysqli_connect('localhost', 'root', '', 'realestate');
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
					$response[$i]['AgentImage'] = $row['AgentImage'];
		
					$x = $row['Likes'];
					$x_unSrlsd = unserialize(base64_decode($x));
					$response[$i]['Likes'] = $x_unSrlsd;
					$i++;
				}
				echo json_encode($response);
			}
			break;
			/////////////////////////////////////Update votes for selected agent///////////////////////////
		// case 'updateVotes':
		// 	if ($_SERVER['REQUEST_METHOD'] === "POST") {
		// 		$agentID = $_POST['AgentID'];
		// 		$sql = "UPDATE agents SET Votes = Votes + 1 WHERE AgentID = ?";
		// 		$stmt = $conn->prepare($sql);
		// 		$stmt->bind_param("s", $agentID);

		// 		// Debugging output
		// 		echo "AgentID: " . $agentID . "\n";

		// 		if ($stmt->execute()) {
		// 			http_response_code(202);
		// 		} else {
		// 			http_response_code(501);
		// 		}
		// 		$stmt->close();
		// 	} else {
		// 		http_response_code(405);
		// 	}
		// 	break;
		////////////////////////////////Like selected agent////////////////////////////////////////
		case 'agentLike':
			// Ensure we only handle POST requests
			if ($_SERVER['REQUEST_METHOD'] === "POST") {
				// Retrieve the POST parameters
				$agentID = $_POST['AgentID'];
				$username = $_POST['UserName'];
		
				// Prepare the database connection
				$sql = "SELECT Likes FROM agents WHERE AgentID = ?";
				$stmt = $conn->prepare($sql);
				$stmt->bind_param("s", $agentID);
				$stmt->execute();
				$stmt->bind_result($serializedLikes);
				$stmt->fetch();
				$stmt->close();
		
				// Unserialize existing data or initialize an empty array if none exists
				$likes = ($serializedLikes) ? unserialize(base64_decode($serializedLikes)) : array();
		
				// Add the new username if it's not already in the array
				if (!in_array($username, $likes)) {
					$likes[] = $username;
				}

				// Remove duplicates
				$likes = array_unique($likes);
		
				// Serialize the updated array
				$newSerializedLikes = base64_encode(serialize($likes));
		
				// Update the database with the new serialized data
				$sql = "UPDATE agents SET Likes = ? WHERE AgentID = ?";
				$stmt = $conn->prepare($sql);
				$stmt->bind_param("ss", $newSerializedLikes, $agentID);
		
				// Debugging output
				echo "AgentID: " . $agentID . "\n";
				echo "Likes Array: " . print_r($likes, true) . "\n";
		
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
			////////////////////////////////Unlike selected agent////////////////////////////////////////
			case 'agentUnLike':
				// Ensure we only handle POST requests
				if ($_SERVER['REQUEST_METHOD'] === "POST") {
					// Retrieve the POST parameters
					$agentID = $_POST['AgentID'];
					$username = $_POST['UserName'];
			
					// Prepare the database connection
					$sql = "SELECT Likes FROM agents WHERE AgentID = ?";
					$stmt = $conn->prepare($sql);
					$stmt->bind_param("s", $agentID);
					$stmt->execute();
					$stmt->bind_result($serializedLikes);
					$stmt->fetch();
					$stmt->close();
			
					// Unserialize existing data or initialize an empty array if none exists
					$likes = ($serializedLikes) ? unserialize(base64_decode($serializedLikes)) : array();
			
					// Remove the specified username from the array if it exists
					$likes = array_diff($likes, array($username));
			
					// Serialize the updated array
					$newSerializedLikes = base64_encode(serialize($likes));
			
					// Update the database with the new serialized data
					$sql = "UPDATE agents SET Likes = ? WHERE AgentID = ?";
					$stmt = $conn->prepare($sql);
					$stmt->bind_param("ss", $newSerializedLikes, $agentID);
			
					// Debugging output
					echo "AgentID: " . $agentID . "\n";
					echo "Likes Array: " . print_r($likes, true) . "\n";
			
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
		////////////////////////////////////////////////////////////////////////
		
	}
} else {
	echo "Unable to Connect to Database";
}

// close mysql connection
mysqli_close($conn);
