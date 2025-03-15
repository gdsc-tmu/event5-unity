var URL =
	"https://script.google.com/macros/s/AKfycbxtJvIDFqw9DX3LHIspdCRa90Uke3ip6KV5luQW3UdAhWN6tgxb3EBbQhk_AKodTfAi0w/exec";

var SendDATA = {
	param1: "hello",
};

var postparam = {
	method: "POST",
	mode: "no-cors",
	"Content-Type": "application/x-www-form-urlencoded",
	body: JSON.stringify(SendDATA),
};

fetch(URL, postparam);
