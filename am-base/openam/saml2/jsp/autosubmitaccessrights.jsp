<%--
  Copyright 2013-2019 ForgeRock AS. All Rights Reserved
 
  Use of this code requires a commercial software license with ForgeRock AS.
  or with one of its affiliates. All use shall be exclusively subject
  to such license between the licensee and ForgeRock AS.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="org.owasp.esapi.ESAPI" %>

<%
String targetUrl = (String) request.getAttribute("TARGET_URL");
String samlMessageName = (String) request.getAttribute("SAML_MESSAGE_NAME");
String samlMessageValue = (String) request.getAttribute("SAML_MESSAGE_VALUE");
String relayStateName = (String) request.getAttribute("RELAY_STATE_NAME");
String relayStateValue = (String) request.getAttribute("RELAY_STATE_VALUE");
String samlPostKey = (String) request.getAttribute("SAML_POST_KEY");
%>

<html>
<head>
    <title>Access rights validated</title>
</head>
<body onload="document.forms[0].submit()">
<form method="post" action="<%= ESAPI.encoder().encodeForHTMLAttribute(targetUrl) %>">

    <input type="hidden" name="<%= ESAPI.encoder().encodeForHTMLAttribute(samlMessageName) %>" value="<%= ESAPI.encoder().encodeForHTMLAttribute(samlMessageValue) %>" />
    <%
    if (relayStateValue != null && !relayStateValue.isEmpty()) {
    %>
        <input type="hidden" name="<%= ESAPI.encoder().encodeForHTMLAttribute(relayStateName) %>" value="<%= ESAPI.encoder().encodeForHTMLAttribute(relayStateValue) %>" />
    <%
    }
    %>
    <noscript>
        <input type="submit" value="<%= ESAPI.encoder().encodeForHTMLAttribute(samlPostKey) %>" />
    </noscript>
</form>
</body>
</html>
