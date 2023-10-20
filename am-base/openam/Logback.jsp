<%--
   DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS HEADER.

   Copyright 2010-2020 ForgeRock AS.

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

   Portions Copyrighted 2006 Sun Microsystems Inc. All Rights Reserved
--%>
<%@ page pageEncoding="UTF-8" %>
<%@ page import="java.util.Collection,
                 java.util.Map,
                 java.util.MissingResourceException,
                 java.util.TreeSet,
                 org.forgerock.openam.logback.LogbackUtilities,
                 org.forgerock.openam.shared.security.crypto.Fingerprints,
                 org.forgerock.openam.utils.LogUtils,
                 org.owasp.esapi.ESAPI,
                 org.slf4j.LoggerFactory,
                 com.google.common.base.Strings,
                 com.google.common.collect.Multimap" %>
<!DOCTYPE html>
<%
    ResourceBundle bundle = ResourceBundle.getBundle("logback-jsp", request.getLocale());
%>
<html lang="<%= Strings.isNullOrEmpty(bundle.getLocale().getLanguage()) ? "en" : bundle.getLocale().getLanguage() %>">
    <head>
        <title>ForgeRock Access Manager</title>
        <link rel="stylesheet" type="text/css" href="com_sun_web_ui/css/css_ns6up.css" />
        <link rel="shortcut icon" href="com_sun_web_ui/images/favicon/favicon.ico" type="image/x-icon" />
        <style type="text/css">
            h3 {
                color: green;
                margin: 10px;
            }
            table {
                margin: 5px;
            }
            td {
                padding: 5px;
            }
        </style>
    </head>
    <body class="DefBdy">
        <div class="MstDiv">
            <table class="MstTblBot">
                <tr>
                    <td class="MstTdTtl">
                        <div class="MstDivTtl">
                            <img src="com_sun_web_ui/images/PrimaryProductName.png" alt="Access Manager" />
                        </div>
                    </td>
                </tr>
            </table>
        </div>
        <%@ include file="/WEB-INF/jsp/admincheck.jsp" %>
        <%
            SSOToken ssoToken = requireAdminSSOToken(request, response, out, "Logback.jsp");
            if (ssoToken == null) {
                out.println("</body></html>");
                return;
            }

            if (!LoggerFactory.getILoggerFactory().getClass().getName().equals("ch.qos.logback.classic.LoggerContext")) {
        %>
        <p><%= bundle.getString("not-using-logback") %>
        </p>
        <p><%= MessageFormat.format(bundle.getString("debug-link"), "Debug.jsp") %></p>
    </body>
</html>
<%
        return;
    }

    if (request.getMethod().equals("POST")) {
        String receivedToken = request.getParameter("formToken");
        if (receivedToken == null || !Fingerprints.isValid(receivedToken, ssoToken.getTokenID().toString())) {
            out.println("Invalid Request</body></html>");
            return;
        }

        if (request.getParameter("appender") != null) {
            LogbackUtilities.updateLoggersUsingAppender(request.getParameter("appender"),
                    request.getParameter("appenderLevel"));
        } else {
            LogbackUtilities.updateLogLevel(request.getParameter("logger"), request.getParameter("loggerLevel"));
        }
        LogUtils.preventDebugInformationLoggedByHttpClient();
%>
<h3><%= bundle.getString("label-updated") %></h3>
<%
    }

    Multimap<String, String> appenders = LogbackUtilities.getAppenders();
%>

<form action="" method="POST">
    <table>
        <tr>
            <td><label for="appender"><%= bundle.getString("label-appender") %></label></td>
            <td>
                <select id="appender" name="appender">
                    <% for (String appender : appenders.keySet()) { %>
                    <option value="<%= ESAPI.encoder().encodeForHTMLAttribute(appender) %>"><%= ESAPI.encoder().encodeForHTML(appender) %></option>
                    <% } %>
                </select>
            </td>
            <td><label for="appenderLevel"><%= bundle.getString("label-level")%></label></td>
            <td>
                <select id="appenderLevel" name="appenderLevel">
                    <option value='OFF'><%= bundle.getString("label-level-off") %></option>
                    <option value='ERROR'><%= bundle.getString("label-level-error") %></option>
                    <option value='WARN'><%= bundle.getString("label-level-warn") %></option>
                    <option value='INFO'><%= bundle.getString("label-level-info") %></option>
                    <option value='DEBUG'><%= bundle.getString("label-level-debug") %></option>
                    <option value='TRACE'><%= bundle.getString("label-level-trace") %></option>
                </select>
            </td>
            <td><button class="Btn1" type="submit"><%= bundle.getString("button-apply") %></button></td>
        </tr>
    </table>
    <input type="hidden" name="formToken" value="<%= Fingerprints.generate(ssoToken.getTokenID().toString()) %>" />
</form>

<form action="" method="POST">
    <table>
        <tr>
            <td><label for="logger"><%= bundle.getString("label-logger") %></label></td>
            <td>
                <select id="logger" name="logger">
                    <% for (String logger : new TreeSet<String>(appenders.values())) { %>
                    <option value="<%= ESAPI.encoder().encodeForHTMLAttribute(logger) %>"><%= ESAPI.encoder().encodeForHTML(logger)%></option>
                    <% } %>
                </select>
            </td>
            <td><label for="loggerLevel"><%= bundle.getString("label-level")%></label></td>
            <td>
                <select id="loggerLevel" name="loggerLevel">
                    <option value='OFF'><%= bundle.getString("label-level-off") %></option>
                    <option value='ERROR'><%= bundle.getString("label-level-error") %></option>
                    <option value='WARN'><%= bundle.getString("label-level-warn") %></option>
                    <option value='INFO'><%= bundle.getString("label-level-info") %></option>
                    <option value='DEBUG'><%= bundle.getString("label-level-debug") %></option>
                    <option value='TRACE'><%= bundle.getString("label-level-trace") %></option>
                </select>
            </td>
            <td><button class="Btn1" type="submit"><%= bundle.getString("button-apply") %></button></td>
        </tr>
    </table>
    <input type="hidden" name="formToken" value="<%= Fingerprints.generate(ssoToken.getTokenID().toString()) %>" />
</form>

<table border=1>
    <tr>
        <th>
            <%= bundle.getString("label-appender") %>
        </th>
        <th>
            <%= bundle.getString("label-logger") %>
        </th>
    </tr>
    <%
        for (Map.Entry<String, Collection<String>> entry : appenders.asMap().entrySet()) {
            out.println("<tr><td valign=top><b>" + ESAPI.encoder().encodeForHTML(entry.getKey()) + "</b></td>");
            out.println("<td>");
            String title;
            try {
                title = bundle.getString("appender-" + entry.getKey());
            } catch (MissingResourceException ex) {
                title = entry.getKey();
            }
            out.println("<b>" + ESAPI.encoder().encodeForHTML(title) + "</b><br>");
            out.print("<span class=\"HlpFldTxt\">");
            out.println(ESAPI.encoder().encodeForHTML(String.join(", ", entry.getValue())));
            out.print("</span>");
            out.println("</td></tr>");
        }
    %>
</table>

</body>
</html>
