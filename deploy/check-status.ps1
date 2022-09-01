echo "Checking site availability"
Start-Sleep -Seconds 2
$status = (curl trainedbynik.fit).StatusCode;
echo "Status code is $status"
