<%--
  Copyright 2019 ForgeRock AS. All Rights Reserved

  Use of this code requires a commercial software license with ForgeRock AS.
  or with one of its affiliates. All use shall be exclusively subject
  to such license between the licensee and ForgeRock AS.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="org.owasp.esapi.ESAPI" %>

<%--
    //Keys realm, idpEntityID, spEntityID are available in the request if needed e.g.
    String realm = (String) request.getAttribute("realm");
    String idpEntityID = (String) request.getAttribute("idpEntityID");
    String spEntityID = (String) request.getAttribute("spEntityID");
--%>
<%
    String saml2Request = (String) request.getAttribute("saml2Request");
    String secondVisitUrl = (String) request.getAttribute("secondVisitUrl");
    String loginUrl = (String) request.getAttribute("loginUrl");
%>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Access rights validated</title>
        <script type="text/javascript" src="<%= request.getContextPath() %>/js/saml2-write.js" defer></script>
    </head>
    <body>
        <form method="post" action="">
            <input type="hidden" id="saml2Request" value="<%= ESAPI.encoder().encodeForHTMLAttribute(saml2Request) %>" />
            <input type="hidden" id="secondVisitUrl" value="<%= ESAPI.encoder().encodeForHTMLAttribute(secondVisitUrl) %>" />
            <input type="hidden" id="loginUrl" value="<%= ESAPI.encoder().encodeForHTMLAttribute(loginUrl) %>" />
        </form>
    </body>
</html>
