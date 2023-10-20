

docker build -t forgerock/am-base .

docker run -p 443:443 -h openam.example.com forgerock/am-base