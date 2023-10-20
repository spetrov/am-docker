<%--
  ~ Copyright 2019 ForgeRock AS. All Rights Reserved
  ~
  ~ Use of this code requires a commercial software license with ForgeRock AS.
  ~ or with one of its affiliates. All use shall be exclusively subject
  ~ to such license between the licensee and ForgeRock AS.
  --%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="com.sun.identity.saml.common.SAMLUtils" %>
<%@ page import="com.sun.identity.common.SystemConfigurationUtil" %>
<%@ page import="com.sun.identity.saml.common.SAMLConstants" %>
<%@ page import="com.sun.identity.saml2.common.SAML2Utils" %>
<%@ page import="org.owasp.esapi.ESAPI" %>
<%--<%@ page import="com.sun.identity.saml2.meta.SAML2MetaUtils" %>--%>

<%
    String defaultAction = SAMLUtils.getErrorUrl(SystemConfigurationUtil.getProperty(SAMLConstants.ERROR_PAGE_URL,
            SAMLConstants.DEFAULT_ERROR_PAGE_URL), 500, "UnableToGetAuthnReq",
            SAML2Utils.bundle.getString("UnableToGetAuthnReq"));
%>

<%--
    //Keys realm, idpEntityID can be obtained as follows:
    String metaAlias = SAML2MetaUtils.getMetaAliasByUri(request.getRequestURI());
    String idpEntityID = SAML2Utils.getSAML2MetaManager().getEntityByMetaAlias(metaAlias);
    String realm = SAML2MetaUtils.getRealmByMetaAlias(metaAlias);
--%>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Access rights validated</title>
        <script type="text/javascript"
                src="<%= ESAPI.encoder().encodeForHTMLAttribute(request.getContextPath()) %>/js/saml2-read.js"
                defer></script>
    </head>
    <body>
        <form method="post"
              action="<%= ESAPI.encoder().encodeForHTMLAttribute(request.getContextPath() + defaultAction) %>">
            <input id="saml2Request" type="hidden" name="saml2Request" value="" />
        </form>
    </body>
</html>
