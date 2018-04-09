# hyperledger-composer-starter-guide

Basic guide for getting started in hyperleger composer

Model your business network and integrate existing systems and data with your blockchain applications.

Supports Hyperledger Fabric blockchain infrastructure and runtime & pluggable blockchain consensus protocols to validate.

Composer - create Business Network Definition comprised of Model, Script, ACL, Query files - package this network to a .bna business network 
archive (ready to deploy) -> then use ID Cards (connection information) to deploy to a distributed ledger.

A modeling language, and a set of APIs to quickly define and deploy business networks and applications that allow participants to send transactions that exchange assets.

Key Concepts in Hyperledger Composer
- Blockchain State Storage
- Connection Profiles (business network cards)
- Assets (unique identifier)
- Participants
- Identitifiers
- Business network = combination of an identity, a connection profile, and metadata
- Transactions = Functions
- Queries = return data about the blockchain world-state (extract data from blockchain network using Hyperledger Composer API)
- Events = emitted by transaction processor functions (composer-client API)
- Access Control (who has access to what)
- Historian registry (records successful transactions as HistorianRecord)


Architecture 

Create "full-stack" blockchain solutions. I.e. business logic that runs on the blockchain, REST APIs that expose the blockchain logic to web or mobile applications, as well as integrating the blockchain with existing enterprise systems of record.

Hyperledger Composer is composed of the following high-level components:

Execution Runtimes - Hyperledger Fabric v1.1. State is stored on the distributed ledger (browser-localstorage,web-playground)

Connection Profiles - For Hyperledger Fabric v1.1 runtime it will contain TCP/IP addresses and ports for the Fabric peers, as well as cryptographic certificates etc.

JavaScript SDK - is a set of Node.js APIs the enables developers to create applications to manage and interact with deployed business networks. - two npm modules – composer-client crud composer-admin – manage business networks.

Command Line Interface - deploy and managed business network definitions
REST Server - Open API (Swagger) REST API based on LoopBack technology
LoopBack Connector - 
Playground Web User Interface
Yeoman code generator - Angular web application Node.js application Skeleton 								business network
VSCode and Atom editor plugins

Installing the development environment

pre-requisites :

    • Docker Engine: Version 17.03 or higher
    • Docker-Compose: Version 1.8 or higher
    • Node: 8.9 or higher (note version 9 is not supported)
    • npm: v5.x
    • git: 2.9.x or higher
    • Python: 2.7.x
    • A code editor of your choice, we recommend VSCode.	

COMMANDS :

curl -O https://hyperledger.github.io/composer/latest/prereqs-ubuntu.sh
chmod u+x prereqs-ubuntu.sh
./prereqs-ubuntu.sh

then 
npm install -g composer-cli
npm install -g composer-rest-server
npm install -g generator-hyperledger-composer
npm install -g yo

npm install -g composer-playground

then vscode extension hyperledger composer

Install Hyperledger Fabric

mkdir ~/fabric-tools && cd ~/fabric-tools

curl -O https://raw.githubusercontent.com/hyperledger/composer-tools/master/packages/fabric-dev-servers/fabric-dev-servers.tar.gz
tar -xvf fabric-dev-servers.tar.gz

cd ~/fabric-tools
./downloadFabric.sh

connect to runtime using peerAdminCard, start and stop runtime anytime
    cd ~/fabric-tools
    ./startFabric.sh
    ./createPeerAdminCard.sh
    ./stopFabric.sh

run web application

terminal cmd : composer-playground

http://localhost:8080/login

destroy a previous setup

   docker kill $(docker ps -q)
   docker rm $(docker ps -aq)
   docker rmi $(docker images dev-* -q)


