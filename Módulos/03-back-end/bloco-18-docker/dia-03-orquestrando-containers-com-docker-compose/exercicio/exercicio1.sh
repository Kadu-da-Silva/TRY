# Crie um container para manter um servidor httpd:2.4.54 Apache e vincule sua porta interna com a porta 4545 da sua máquina local.
docker run -d --name site-trybe -p 4545:80 -v .:/usr/local/apache2/htdocs httpd:2.4.54

# Obtenha o id do container httpd:2.4.54;
docker container ps

# Obtenha o Mounts através da propriedade Source, que deve mostrar o volume desse container no Docker Host;
docker inspect 557dac

# Agora pare o container httpd:2.4.54;
docker stop 557dac

# Exclua o seu container;
docker rm 557

# Verifique se a pasta onde você salvo o arquivo html permanece no mesmo lugar
ls -la

# Obtenha o IMAGE ID do servidor;
docker images

# Depois de obter o IMAGE ID, exclua a imagem.
docker rmi -f 463