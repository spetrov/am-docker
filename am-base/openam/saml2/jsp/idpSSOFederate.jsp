<%--
   DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.
  
   Copyright (c) 2006 Sun Microsystems Inc. All Rights Reserved
  
   The contents of this file are subject to the terms
   of the Common Development and Distribution License
   (the License). You may not use this file except in
   compliance with the License.

   You can obtain a copy of the License at
   https://opensso.dev.java.net/public/CDDLv1.0.html or
   opensso/legal/CDDLv1.0.txt
   See the License for the specific language governing
   permission and limitations under the License.

   When distributing Covered Code, include this CDDL
   Header Notice in each file and include the License file
   at opensso/legal/CDDLv1.0.txt.
   If applicable, add the following below the CDDL Header,
   with the fields enclosed by brackets [] replaced by
   your own identifying information:
   "Portions Copyrighted [year] [name of copyright owner]"

   $Id: idpSSOFederate.jsp,v 1.6 2009/10/15 00:00:41 exu Exp $

   Portions Copyrighted 2013-2016 ForgeRock AS.
--%>

<%@ page import="com.sun.identity.saml2.common.SAML2Constants" %>
<%@ page import="com.sun.identity.saml2.common.SAML2Exception" %>
<%@ page import="com.sun.identity.saml2.common.SAML2Utils" %>
<%@ page import="com.sun.identity.saml.common.SAMLUtils" %>
<%@ page import="com.sun.identity.saml2.profile.IDPSSOUtil" %>
<%@ page import="com.sun.identity.saml2.profile.IDPSSOFederate" %>
<%@ page import="java.io.PrintWriter" %>
<%@ page import="org.forgerock.guice.core.InjectorHolder" %>
<%@ page import="org.forgerock.openam.audit.AuditEventPublisher" %>
<%@ page import="org.forgerock.openam.saml2.audit.SAML2Auditor" %>
<%@ page import="org.forgerock.openam.audit.AuditEventFactory" %>
<%@ page import="org.slf4j.LoggerFactory" %>
<%@ page import="org.slf4j.Logger" %>
<%! private final Logger logger = LoggerFactory.getLogger("jsp.saml2.idpSSOFederate"); %>
<%

    AuditEventPublisher aep = InjectorHolder.getInstance(AuditEventPublisher.class);
    AuditEventFactory aef = InjectorHolder.getInstance(AuditEventFactory.class);
    SAML2Auditor saml2Auditor = new SAML2Auditor(aep, aef, request);

    saml2Auditor.setMethod("idpSSOFederate");
    saml2Auditor.setSessionTrackingId(session.getId());
    saml2Auditor.auditAccessAttempt();

    // check request, response
    if ((request == null) || (response == null)) {
	    SAMLUtils.sendError(request, response, response.SC_BAD_REQUEST, "nullInput",
                SAML2Utils.bundle.getString("nullInput"));
        saml2Auditor.auditAccessFailure(String.valueOf(response.SC_BAD_REQUEST),
                SAML2Utils.bundle.getString("nullInput"));
        return;
    }

    try {
        String cachedResID = request.getParameter(SAML2Constants.RES_INFO_ID);
        // if this id is set, then this is a redirect from the COT
        // cookie writer. There is already an assertion response
        // cached in this provider. Send it back directly.
        if ((cachedResID != null) && (cachedResID.length() != 0)) {
            saml2Auditor.auditAccessSuccess();
            IDPSSOUtil.sendResponse(request, response, new PrintWriter(out, true), cachedResID);
            return;
        }
    } catch (SAML2Exception sse) {
        logger.error("Error processing request " , sse);
        SAMLUtils.sendError(request, response, response.SC_BAD_REQUEST,  "requestProcessingError",
                SAML2Utils.bundle.getString("requestProcessingError") + " " + sse.getMessage());
        saml2Auditor.auditAccessFailure(String.valueOf(response.SC_BAD_REQUEST),
                SAML2Utils.bundle.getString("requestProcessingError"));
        return;
    }

    String reqBinding = SAML2Constants.HTTP_REDIRECT;
    if (request.getMethod().equals("POST")) {
        reqBinding = SAML2Constants.HTTP_POST;
    }

    /*
     * This call handles the federation and/or single sign on request
     * from a service provider. It processes the AuthnRequest
     * sent by the service provider and generates a proper
     * SAML Response that contains an Assertion.
     * It sends back a response containing error status if
     * something is wrong during the request processing.
     */
    IDPSSOFederate.doSSOFederate(request, response, new PrintWriter(out, true), reqBinding, saml2Auditor);
%>
