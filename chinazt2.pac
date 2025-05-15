function FindProxyForURL(url, host) {

    /* Bypass are directly accessible */
    if ((shExpMatch(host, "*.akamai.com")) ||
		(shExpMatch(host, "*.kompas.com")) ||
		(shExpMatch(host, "*.facebook.com")))
        return "DIRECT";

    /* Default Traffic Forwarding. Forwarding to Zen on port 80, but you can use port 9400 also */
    return "PROXY tsn1.sme.zscalertwo.net:80; PROXY bjs1.sme.zscalertwo.net:443; DIRECT";
}