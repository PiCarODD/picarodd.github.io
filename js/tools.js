var ip = prompt("Enter Victim IP")
function nmapfullport(){
	document.getElementById('result').value="Scan all ports, might take a while. \" nmap -p- -o fullport "+ip+"\"";
}
function nmapudpscan(){
	document.getElementById('result').value="UDP Scan \" nmap -sU -o udpscan "+ip+"\" | \"unicornscan -mU -v -I "+ip+"\"";
}
function nmapinfoscan(){
	document.getElementById('result').value="Scan for version, with NSE-scripts and trying to identify OS \" nmap -sV -sC -o initial "+ip+"\""
}
function anonyftp(){
		document.getElementById('result').value="\"apt install ncftp\" | \" ncftp "+ip+"\"";
}
function versionftp(){
		document.getElementById('result').value="\"nmap -sV --script vuln "+ip+"\"";
}