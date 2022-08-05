<?php
    $rootDir = dirname(__DIR__, 4);
    $creds = parse_ini_file($rootDir."/.ini");
    $apikey = $creds["apikey"];
    $hostname = $creds["hostname"];
    header('Content-Type:application/json; charset=utf-8');
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => "$hostname/api/application/servers",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
            //"Cache-Control: no-cache",
            "Accept: application/json",
            "Content-Type: application/json",
            "Authorization: Bearer $apikey"
        ),
    ));
    $isErr = false;
    $response = curl_exec($curl);
    if(!$response){
        $isErr = true;
    }
    $err = curl_error($curl);
    $response = json_decode($response, true); //because of true, it's in an array
    //$response = json_encode($response, JSON_PRETTY_PRINT);
    $resOutput = array();

    //print_r($response);

    foreach ($response['data'] as $currserver){
        $currserver = $currserver['attributes'];
        $serverName = $currserver['name'];
        $serverId = $currserver['identifier'];
        $isSuspended = $currserver['suspended'];
        $curlSpecific = curl_init();
        curl_setopt_array($curlSpecific, array(
            CURLOPT_URL => "$hostname/api/client/servers/$serverId/resources",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_2,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => array(
                //"Cache-Control: no-cache",
                "Accept: application/json",
                "Content-Type: application/json",
                "Authorization: Bearer $apikey"
            ),
        ));
        $res = curl_exec($curlSpecific);
        $resArr = json_decode($res, true);
        $currRes = $resArr["attributes"];
        $resStatus = $currRes["current_state"];
        if($isSuspended){
            $resStatus = "suspended";
            continue;
        }
        if(!(str_contains($serverName, "AkaKitsune") || str_contains($serverName, "EACC"))){
            continue;
        }
        //print_r("ID: ".$serverId."\nName: ".$serverName."\nStatus: ".$resStatus."\n\n");
        $finRes = array("id" => $serverId, "name" => $serverName, "status" => $resStatus);
        array_push($resOutput, $finRes);

        //print_r($serverName."\t".$serverId."\n");
        //foreach($currserver['attributes'] as $currattrib){
        //    print_r($currattrib);
        //}
    }
    $finResOut = array("servers" => $resOutput);

    $jsonOutput = json_encode($finResOut, JSON_PRETTY_PRINT);

    print_r($jsonOutput);
    //if(!$isErr){
    //    print_r($response);
    //}

    curl_close($curl);
?>