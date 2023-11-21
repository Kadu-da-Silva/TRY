# Exercício 3
# Baixe a imagem utilizando a tag: stable-slim, que é uma versão reduzida da distribuição.
docker pull debian:stable-slim


# Exercício 4
# Após baixar a imagem para seu computador local, crie e execute um container no modo interativo utilizando essa imagem como referência — não esqueça referenciar a tag.
docker run -it debian:stable-slim

# Exercício 5
# No terminal, você deve conseguir rodar o comando cat /etc/*-release, que vai retornar os dados da distribuição Debian que está sendo rodada dentro do container.
cat /etc/*-release

# Exercício 6
# Encerre o terminal.
docker exit

# Exercício 7
# Verifique na sua lista de contêiners qual contêiner se refere ao exercício que acabou de praticar.
docker ps -a

# Exercício 8
# Inicie o mesmo container novamente, sem criar outro. Valide se ele está ativo na lista de containers.
docker start <container_id>
docker ps

# Exercício 9
# Retome o container que foi criado anteriormente neste exercício.
docker exec -it <container_id> /bin/bash

# Exercício 10
# Rode o comando cat /etc/debian_version que deve retornar a versão atual do sistema do container.
cat /etc/debian_version

# Exercício 11
# Encerre o terminal.
docker exit

# Exercício 12
# Remova somente o container criado para esse exercício.
docker stop <container_id>

# Exercício 13
# [BÔNUS] Crie e rode de modo interativo em modo ‘Cleanup’, a imagem andrius/ascii-patrol.
docker pull andrius/ascii-patrol

# Exercício 14
# [BÔNUS] Encerre o container utilizando os botões [ctrl] + [c].