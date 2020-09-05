<?php
/**
 * @author Mahesh Babu <info@flucoder.in>
 * @copyright Flucoder Apps 2020
 * @package online-stories
 * 
 * 
 * Created using IMA Builder v2
 */


/** site **/
$config["app-name"]			= "Online Stories" ; //Write the name of your website
$config["app-desc"]			= "An Online Stories app for Android" ; //Write a brief description of your website
$config["utf8"]				= true; 
$config["debug"]			= false; 
$config["protect"]			= false; 
$config["url"]			= "http://localhost/onlinestories/restapi.php"; 
$config["timezone"]			= "Asia/Kolkata" ; // check this site: http://php.net/manual/en/timezones.php
$config["gzip"]			= false; //compressed page 

/** mysql **/
$config["db_host"]				= "localhost" ; //host
$config["db_user"]				= "root" ; //Username SQL
$config["db_pwd"]				= "" ; //Password SQL
$config["db_name"]			= "db_online_stories" ; //Database


/** DON'T EDIT THE CODE BELLOW **/
session_start();
if($config["gzip"]==true){
	ob_start("ob_gzhandler");
}
ini_set("internal_encoding", "utf-8");
date_default_timezone_set($config["timezone"]);
if($config["debug"]==true){
	error_reporting(E_ALL);
}else{
	error_reporting(0);
}

if($config["protect"]==true){
	if(isset($_SERVER["HTTP_USER_AGENT"])){
		if(!preg_match("/online\-stories/i",$_SERVER["HTTP_USER_AGENT"])){
			die("Not allowed");
		}
	}else{
		die("Not allowed");
	}
}

if(isset($_SERVER["HTTP_X_AUTHORIZATION"])){
	$_SERVER["HTTP_AUTHORIZATION"] = $_SERVER["HTTP_X_AUTHORIZATION"];
}
/** CONNECT TO MYSQL **/
$mysql = new mysqli($config["db_host"], $config["db_user"], $config["db_pwd"], $config["db_name"]);
if (mysqli_connect_errno()){
	die(mysqli_connect_error());
}

if($config["utf8"]==true){
	$mysql->set_charset("utf8");
}
if(!isset($_GET["api"])){
	$_GET["api"]= "route";
}
$root_url = $config["url"];
$rest_api=array("data"=>array("status"=>404,"title"=>"Not found"),"title"=>"Error","message"=>"Routes not found");
switch($_GET["api"]){
	case "route":
		// TODO: JSON --+-- ROUTES
		$rest_api=array();
		$rest_api["name"] = "Online Stories" ;
		$rest_api["description"] = "An Online Stories app for Android" ;
		$rest_api["generator"] = "IMA-BuildeRz vrev20.06.15" ;

		$rest_api["namespaces"][1] = "categories/";
		$rest_api["namespaces"][2] = "stories/";

		$rest_api["routes"]["/categories/"]["namespace"] = "categories/";
		$rest_api["routes"]["/categories/"]["methods"][0] = "GET";
		$rest_api["routes"]["/categories/"]["endpoints"][0]["methods"][0] = "GET";
		$rest_api["routes"]["/categories/"]["endpoints"][0]["args"]["category-name"]["required"] = false;
		$rest_api["routes"]["/categories/"]["endpoints"][0]["args"]["category-name"]["default"] = "";
		$rest_api["routes"]["/categories/"]["endpoints"][0]["args"]["category-name"]["type"] = "string";
		$rest_api["routes"]["/categories/"]["endpoints"][0]["args"]["category-name"]["description"] = "Limit result set to items with more specific by `category_name`.";

		$rest_api["routes"]["/categories/"]["endpoints"][0]["args"]["orderby"]["required"] = false;
		$rest_api["routes"]["/categories/"]["endpoints"][0]["args"]["orderby"]["default"] = "id";
		$rest_api["routes"]["/categories/"]["endpoints"][0]["args"]["orderby"]["type"] = "string";
		$rest_api["routes"]["/categories/"]["endpoints"][0]["args"]["orderby"]["enum"][0] = "id";
		$rest_api["routes"]["/categories/"]["endpoints"][0]["args"]["orderby"]["enum"][1] = "category-name";
		$rest_api["routes"]["/categories/"]["endpoints"][0]["args"]["orderby"]["enum"][2] = "category-image";
		$rest_api["routes"]["/categories/"]["endpoints"][0]["args"]["orderby"]["description"] = "Sort collection by object attribute";
		$rest_api["routes"]["/categories/"]["endpoints"][0]["args"]["sort"]["required"] = false;
		$rest_api["routes"]["/categories/"]["endpoints"][0]["args"]["sort"]["default"] = "asc";
		$rest_api["routes"]["/categories/"]["endpoints"][0]["args"]["sort"]["type"] = "string";
		$rest_api["routes"]["/categories/"]["endpoints"][0]["args"]["sort"]["enum"][0] = "asc";
		$rest_api["routes"]["/categories/"]["endpoints"][0]["args"]["sort"]["enum"][1] = "desc";
		$rest_api["routes"]["/categories/"]["endpoints"][0]["args"]["sort"]["description"] = "Order sort attribute ascending or descending";
		$rest_api["routes"]["/categories/"]["endpoints"][0]["_links"][0] = $root_url . "?api=categories";

		$rest_api["routes"]["/categories/(?P<id>[\d]+)"]["namespace"] = "categories/";
		$rest_api["routes"]["/categories/(?P<id>[\d]+)"]["method"][0] = "GET";
		$rest_api["routes"]["/categories/(?P<id>[\d]+)"]["endpoints"]["args"]["id"]["required"] = "true";
		$rest_api["routes"]["/categories/(?P<id>[\d]+)"]["endpoints"]["args"]["id"]["type"] = "integer";
		$rest_api["routes"]["/categories/(?P<id>[\d]+)"]["endpoints"]["args"]["id"]["description"] = "Unique identifier for the object";
		$rest_api["routes"]["/categories/(?P<id>[\d]+)"]["endpoints"]["_links"][0] = $root_url . "?api=categories&id=<id>";

		$rest_api["routes"]["/stories/"]["namespace"] = "stories/";
		$rest_api["routes"]["/stories/"]["methods"][0] = "GET";
		$rest_api["routes"]["/stories/"]["endpoints"][0]["methods"][0] = "GET";
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["story-title"]["required"] = false;
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["story-title"]["default"] = "";
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["story-title"]["type"] = "string";
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["story-title"]["description"] = "Limit result set to items with more specific by `story_title`.";
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["category"]["required"] = false;
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["category"]["default"] = "";
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["category"]["type"] = "string";
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["category"]["description"] = "Limit result set to items with more specific by `category`.";
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["story-date"]["required"] = false;
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["story-date"]["default"] = "";
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["story-date"]["type"] = "string";
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["story-date"]["description"] = "Limit result set to items with more specific by `story_date`.";
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["story-content"]["required"] = false;
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["story-content"]["default"] = "";
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["story-content"]["type"] = "string";
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["story-content"]["description"] = "Limit result set to items with more specific by `story_content`.";

		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["orderby"]["required"] = false;
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["orderby"]["default"] = "id";
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["orderby"]["type"] = "string";
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["orderby"]["enum"][0] = "id";
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["orderby"]["enum"][1] = "story-title";
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["orderby"]["enum"][2] = "story-image";
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["orderby"]["enum"][3] = "category";
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["orderby"]["enum"][4] = "story-date";
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["orderby"]["enum"][5] = "story-content";
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["orderby"]["description"] = "Sort collection by object attribute";
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["sort"]["required"] = false;
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["sort"]["default"] = "asc";
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["sort"]["type"] = "string";
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["sort"]["enum"][0] = "asc";
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["sort"]["enum"][1] = "desc";
		$rest_api["routes"]["/stories/"]["endpoints"][0]["args"]["sort"]["description"] = "Order sort attribute ascending or descending";
		$rest_api["routes"]["/stories/"]["endpoints"][0]["_links"][0] = $root_url . "?api=stories";

		$rest_api["routes"]["/stories/(?P<id>[\d]+)"]["namespace"] = "stories/";
		$rest_api["routes"]["/stories/(?P<id>[\d]+)"]["method"][0] = "GET";
		$rest_api["routes"]["/stories/(?P<id>[\d]+)"]["endpoints"]["args"]["id"]["required"] = "true";
		$rest_api["routes"]["/stories/(?P<id>[\d]+)"]["endpoints"]["args"]["id"]["type"] = "integer";
		$rest_api["routes"]["/stories/(?P<id>[\d]+)"]["endpoints"]["args"]["id"]["description"] = "Unique identifier for the object";
		$rest_api["routes"]["/stories/(?P<id>[\d]+)"]["endpoints"]["_links"][0] = $root_url . "?api=stories&id=<id>";		break;
	case "categories":
		$rest_api = array();
		// TODO: JSON --+-- CATEGORIES
		/** statement `where` **/

		if(isset($_GET["id"])){
			if($_GET["id"] != "-1"){
				if($_GET["id"]=="random"){
					$_GET["orderby"] = "random";
				}else{
					$id = (int)$_GET["id"] ; 
					$statement[] = "`id` =$id"; 
				}
			}
		}

		if(isset($_GET["category-name"])){
			if($_GET["category-name"] != "-1"){
				$value = $mysql->escape_string($_GET["category-name"]); 
				$statement[] = "`category_name` LIKE '%$value%'"; 
			}
		}

		if(isset($_GET["category-image"])){
			if($_GET["category-image"] != "-1"){
				$value = $mysql->escape_string($_GET["category-image"]); 
				$statement[] = "`category_image` LIKE '%$value%'"; 
			}
		}

		$where ="" ;
		if(isset($statement)){
			$where ="WHERE " . implode(" AND ",$statement);
		}
		/** order by **/
		$order_by = "`id`";
		if(isset($_GET["orderby"])){
			switch($_GET["orderby"]){
			case "id":
				$order_by = "`id`";
				break;
			case "category-name":
				$order_by = "`category_name`";
				break;
			case "category-image":
				$order_by = "`category_image`";
				break;
			case "random":
				$order_by = "RAND()";
				break;
			}
		}

		/** sort **/
		$sort = "ASC";
		if(isset($_GET["sort"])){
			if($_GET["sort"]=="asc"){
				$sort = "ASC";
			}else{
				$sort = "DESC";
			}
		}

		$sql_query = "SELECT * FROM `categories` ".$where." ORDER BY ".$order_by." ".$sort.";"; 
		$z=0;
		if($result = $mysql->query($sql_query)){
			while ($data = $result->fetch_array()){
				if(isset($data["id"])){
					$data_rest_api[$z] = $data;
					$rest_api[$z]["id"] = (int) $data["id"];
				}
				if(isset($data["category_name"])){
					$data_rest_api[$z] = $data;
					$rest_api[$z]["category_name"] = $data["category_name"];
				}
				if(isset($data["category_image"])){
					$data_rest_api[$z] = $data;
					$rest_api[$z]["category_image"] = $data["category_image"];
				}
				$rest_api[$z]["_links"]["self"][0] = $root_url . "?api=categories&id=". $data["id"];
				$z++;
			}
			$result->close();
		}
		if(isset($_GET["id"])){
			if(isset($data_rest_api[0])){
				$rest_api = array();
				$rest_api["id"] = $data_rest_api[0]["id"];
				$rest_api["category_name"] = $data_rest_api[0]["category_name"];
				$rest_api["category_image"] = $data_rest_api[0]["category_image"];
			}else{
				$rest_api=array("data"=>array("status"=>404,"title"=>"Not found"),"title"=>"Error","message"=>"Invalid ID");
			}
		}
		break;
	case "stories":
		$rest_api = array();
		// TODO: JSON --+-- STORIES
		/** statement `where` **/

		if(isset($_GET["id"])){
			if($_GET["id"] != "-1"){
				if($_GET["id"]=="random"){
					$_GET["orderby"] = "random";
				}else{
					$id = (int)$_GET["id"] ; 
					$statement[] = "`id` =$id"; 
				}
			}
		}

		if(isset($_GET["story-title"])){
			if($_GET["story-title"] != "-1"){
				$value = $mysql->escape_string($_GET["story-title"]); 
				$statement[] = "`story_title` LIKE '%$value%'"; 
			}
		}

		if(isset($_GET["story-image"])){
			if($_GET["story-image"] != "-1"){
				$value = $mysql->escape_string($_GET["story-image"]); 
				$statement[] = "`story_image` LIKE '%$value%'"; 
			}
		}

		if(isset($_GET["category"])){
			if($_GET["category"] != "-1"){
				$value = $mysql->escape_string($_GET["category"]); 
				$statement[] = "`category` LIKE '$value'"; 
			}
		}

		if(isset($_GET["story-date"])){
			if($_GET["story-date"] != "-1"){
				$value = $mysql->escape_string($_GET["story-date"]); 
				$statement[] = "`story_date` LIKE '%$value%'"; 
			}
		}

		if(isset($_GET["story-content"])){
			if($_GET["story-content"] != "-1"){
				$value = $mysql->escape_string($_GET["story-content"]); 
				$statement[] = "`story_content` LIKE '%$value%'"; 
			}
		}

		$where ="" ;
		if(isset($statement)){
			$where ="WHERE " . implode(" AND ",$statement);
		}
		/** order by **/
		$order_by = "`id`";
		if(isset($_GET["orderby"])){
			switch($_GET["orderby"]){
			case "id":
				$order_by = "`id`";
				break;
			case "story-title":
				$order_by = "`story_title`";
				break;
			case "story-image":
				$order_by = "`story_image`";
				break;
			case "category":
				$order_by = "`category`";
				break;
			case "story-date":
				$order_by = "`story_date`";
				break;
			case "story-content":
				$order_by = "`story_content`";
				break;
			case "random":
				$order_by = "RAND()";
				break;
			}
		}

		/** sort **/
		$sort = "ASC";
		if(isset($_GET["sort"])){
			if($_GET["sort"]=="asc"){
				$sort = "ASC";
			}else{
				$sort = "DESC";
			}
		}

		$sql_query = "SELECT * FROM `stories` ".$where." ORDER BY ".$order_by." ".$sort.";"; 
		$z=0;
		if($result = $mysql->query($sql_query)){
			while ($data = $result->fetch_array()){
				if(isset($data["id"])){
					$data_rest_api[$z] = $data;
					$rest_api[$z]["id"] = (int) $data["id"];
				}
				if(isset($data["story_title"])){
					$data_rest_api[$z] = $data;
					$rest_api[$z]["story_title"] = $data["story_title"];
				}
				if(isset($data["story_image"])){
					$data_rest_api[$z] = $data;
					$rest_api[$z]["story_image"] = $data["story_image"];
				}
				if(isset($data["category"])){
					$data_rest_api[$z] = $data;
					$rest_api[$z]["category"]["id"] = $data["category"];
					$categories_id = htmlentities(stripslashes($data["category"]));
					$sql_categories_query = "SELECT * FROM `categories` WHERE `id`='{$categories_id}'" ;
					$categories_result = $mysql->query($sql_categories_query);
					if($categories_result){
						$categories_result_data = $categories_result->fetch_array();
						if(isset($categories_result_data["category_name"])){
							$rest_api[$z]["category"]["rendered"] = stripslashes($categories_result_data["category_name"]);
						}else{
							$rest_api[$z]["category"]["rendered"] = "";
						}
					}else{
						$rest_api[$z]["category"]["rendered"] = "";
					}
				}
				if(isset($data["story_date"])){
					$data_rest_api[$z] = $data;
					$rest_api[$z]["story_date"] = $data["story_date"];
				}
				if(isset($data["story_content"])){
					$data_rest_api[$z] = $data;
					$rest_api[$z]["story_content"] = $data["story_content"];
				}
				$rest_api[$z]["_links"]["self"][0] = $root_url . "?api=stories&id=". $data["id"];
				$z++;
			}
			$result->close();
		}
		if(isset($_GET["id"])){
			if(isset($data_rest_api[0])){
				$rest_api = array();
				$rest_api["id"] = $data_rest_api[0]["id"];
				$rest_api["story_title"] = $data_rest_api[0]["story_title"];
				$rest_api["story_image"] = $data_rest_api[0]["story_image"];
				$rest_api["category"]["rendered"] = "Invalid ID";
				$rest_api["category"]["id"] = $data_rest_api[0]["category"];
				$categories_id = htmlentities(stripslashes($data_rest_api[0]["category"]));
				$sql_categories_query = "SELECT * FROM `categories` WHERE `id`='{$categories_id}'" ;
				$categories_result = $mysql->query($sql_categories_query);
				if($categories_result){
					$categories_result_data = $categories_result->fetch_array();
					if(isset($categories_result_data["category_name"])){
						$rest_api["category"]["rendered"] = stripslashes($categories_result_data["category_name"]);
					}else{
						$rest_api["category"]["rendered"] = "Invalid ID";
					}
				}else{
					$rest_api["category"]["rendered"] = "Invalid ID";
				}
				$rest_api["story_date"] = $data_rest_api[0]["story_date"];
				$rest_api["story_content"] = $data_rest_api[0]["story_content"];
			}else{
				$rest_api=array("data"=>array("status"=>404,"title"=>"Not found"),"title"=>"Error","message"=>"Invalid ID");
			}
		}
		break;
}

$mysql->close();

// TODO: JSON --+-- CROSSDOMAIN
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, PUT, OPTIONS');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization, X-Authorization');
header('Access-Control-Max-Age: 86400');
header('Connection: close');

if (!isset($_GET["callback"])){
	// TODO: OUTPUT --+-- JSON
	if(defined("JSON_UNESCAPED_UNICODE")){
		echo json_encode($rest_api,JSON_UNESCAPED_UNICODE);
	}else{
		echo json_encode($rest_api);
	}
}else{
	// TODO: OUTPUT --+-- JSONP
	if(defined("JSON_UNESCAPED_UNICODE")){
		echo strip_tags($_GET["callback"]) ."(". json_encode($rest_api,JSON_UNESCAPED_UNICODE). ");" ;
	}else{
		echo strip_tags($_GET["callback"]) ."(". json_encode($rest_api) . ");" ;
	}
}

