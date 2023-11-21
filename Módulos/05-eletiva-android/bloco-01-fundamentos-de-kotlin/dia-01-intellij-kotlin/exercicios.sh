# Exercício 1 - no Linux
# Seu objetivo é preparar o ambiente instalando o Java JDK 17 em seu computador!
sudo apt install openjdk-17-jre openjdk-17-jdk


# Exercício 2 - no Linux
# Seu objetivo é preparar o ambiente instalando o IntelliJ IDEA CE em seu computador!

# Instalar os pacotes essenciais do IntelliJ IDEA CE
sudo apt install software-properties-common apt-transport-https curl -y

# Adicionando o JetBrains PPA na lista de repositórios
curl -s https://s3.eu-central-1.amazonaws.com/jetbrains-ppa/0xA6E8698A.pub.asc | gpg --dearmor | sudo tee /usr/share/keyrings/jetbrains-ppa-archive-keyring.gpg > /dev/null

# Instalar o IntelliJ IDEA CE
sudo apt update
sudo apt install intellij-idea-community